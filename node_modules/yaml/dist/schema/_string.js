"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;
exports.str = exports.resolve = exports.strOptions = void 0;

var _addComment = require("../addComment");

var _Node = require("../cst/Node");

var _foldFlowLines = _interopRequireWildcard(require("../foldFlowLines"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const strOptions = {
  defaultType: _Node.Type.PLAIN,
  doubleQuoted: {
    jsonEncoding: false,
    minMultiLineLength: 40
  },
  fold: {
    lineWidth: 80,
    minContentWidth: 20
  }
};
exports.strOptions = strOptions;

const lineLengthOverLimit = (str, limit) => {
  const strLen = str.length;
  if (strLen <= limit) return false;

  for (let i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === '\n') {
      if (i - start > limit) return true;
      start = i + 1;
      if (strLen - start <= limit) return false;
    }
  }

  return true;
};

const resolve = (doc, node) => {
  // on error, will return { str: string, errors: Error[] }
  const res = node.strValue;
  if (!res) return '';
  if (typeof res === 'string') return res;
  res.errors.forEach(error => {
    if (!error.source) error.source = node;
    doc.errors.push(error);
  });
  return res.str;
};

exports.resolve = resolve;

function doubleQuotedString(value, {
  implicitKey,
  indent
}) {
  const _strOptions$doubleQuo = strOptions.doubleQuoted,
        jsonEncoding = _strOptions$doubleQuo.jsonEncoding,
        minMultiLineLength = _strOptions$doubleQuo.minMultiLineLength;
  const json = JSON.stringify(value);
  if (jsonEncoding) return json;
  let str = '';
  let start = 0;

  for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
      // space before newline needs to be escaped to not be folded
      str += json.slice(start, i) + '\\ ';
      i += 1;
      start = i;
      ch = '\\';
    }

    if (ch === '\\') switch (json[i + 1]) {
      case 'u':
        str += json.slice(start, i);
        const code = json.substr(i + 2, 4);

        switch (code) {
          case '0000':
            str += '\\0';
            break;

          case '0007':
            str += '\\a';
            break;

          case '000b':
            str += '\\v';
            break;

          case '001b':
            str += '\\e';
            break;

          case '0085':
            str += '\\N';
            break;

          case '00a0':
            str += '\\_';
            break;

          case '2028':
            str += '\\L';
            break;

          case '2029':
            str += '\\P';
            break;

          default:
            if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2);else str += json.substr(i, 6);
        }

        i += 5;
        start = i + 1;
        break;

      case 'n':
        if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
          i += 1;
        } else {
          // folding will eat first newline
          str += json.slice(start, i) + '\n\n';

          while (json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"') {
            str += '\n';
            i += 2;
          }

          str += indent; // space after newline needs to be escaped to not be folded

          if (json[i + 2] === ' ') str += '\\';
          i += 1;
          start = i + 1;
        }

        break;

      default:
        i += 1;
    }
  }

  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : (0, _foldFlowLines.default)(str, indent, _foldFlowLines.FOLD_QUOTED, strOptions.fold);
}

function singleQuotedString(value, ctx) {
  const indent = ctx.indent,
        implicitKey = ctx.implicitKey;

  if (implicitKey) {
    if (/\n/.test(value)) return doubleQuotedString(value, ctx);
  } else {
    // single quoted string can't have leading or trailing whitespace around newline
    if (/[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
  }

  const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
  return implicitKey ? res : (0, _foldFlowLines.default)(res, indent, _foldFlowLines.FOLD_FLOW, strOptions.fold);
}

function blockString({
  comment,
  type,
  value
}, ctx, onComment) {
  // 1. Block can't end in whitespace unless the last line is non-empty.
  // 2. Strings consisting of only whitespace are best rendered explicitly.
  if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  const indent = ctx.indent || (ctx.forceBlockIndent ? ' ' : '');
  const indentSize = indent ? '2' : '1'; // root is at -1

  const literal = type === _Node.Type.BLOCK_FOLDED ? false : type === _Node.Type.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, strOptions.fold.lineWidth - indent.length);
  let header = literal ? '|' : '>';
  if (!value) return header + '\n';
  let wsStart = '';
  let wsEnd = '';
  value = value.replace(/[\n\t ]*$/, ws => {
    const n = ws.indexOf('\n');

    if (n === -1) {
      header += '-'; // strip
    } else if (value === ws || n !== ws.length - 1) {
      header += '+'; // keep
    }

    wsEnd = ws.replace(/\n$/, '');
    return '';
  }).replace(/^[\n ]*/, ws => {
    if (ws.indexOf(' ') !== -1) header += indentSize;
    const m = ws.match(/ +$/);

    if (m) {
      wsStart = ws.slice(0, -m[0].length);
      return m[0];
    } else {
      wsStart = ws;
      return '';
    }
  });
  if (wsEnd) wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, `$&${indent}`);
  if (wsStart) wsStart = wsStart.replace(/\n+/g, `$&${indent}`);

  if (comment) {
    header += ' #' + comment.replace(/ ?[\r\n]+/g, ' ');
    if (onComment) onComment();
  }

  if (!value) return `${header}${indentSize}\n${indent}${wsEnd}`;

  if (literal) {
    value = value.replace(/\n+/g, `$&${indent}`);
    return `${header}\n${indent}${wsStart}${value}${wsEnd}`;
  }

  value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
  //         ^ ind.line  ^ empty     ^ capture next empty lines only at end of indent
  .replace(/\n+/g, `$&${indent}`);
  const body = (0, _foldFlowLines.default)(`${wsStart}${value}${wsEnd}`, indent, _foldFlowLines.FOLD_BLOCK, strOptions.fold);
  return `${header}\n${indent}${body}`;
}

function plainString(item, ctx, onComment) {
  const comment = item.comment,
        type = item.type,
        value = item.value;
  const implicitKey = ctx.implicitKey,
        indent = ctx.indent,
        inFlow = ctx.inFlow,
        tags = ctx.tags;

  if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t ]$/.test(value)) {
    // not allowed:
    // - empty string
    // - start with an indicator character (except [?:-]) or /[?-] /
    // - '\n ', ': ' or ' \n' anywhere
    // - '#' not preceded by a non-space char
    // - end with ' '
    return implicitKey || inFlow || value.indexOf('\n') === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment);
  }

  if (!implicitKey && !inFlow && type !== _Node.Type.PLAIN && value.indexOf('\n') !== -1) {
    // Where allowed & type not set explicitly, prefer block style for multiline strings
    return blockString(item, ctx, onComment);
  } // Need to verify that output will be parsed as a string


  const str = value.replace(/\n+/g, `$&\n${indent}`);

  if (typeof tags.resolveScalar(str).value !== 'string') {
    return doubleQuotedString(value, ctx);
  }

  const body = implicitKey ? str : (0, _foldFlowLines.default)(str, indent, _foldFlowLines.FOLD_FLOW, strOptions.fold);

  if (comment && !inFlow && (body.indexOf('\n') !== -1 || comment.indexOf('\n') !== -1)) {
    if (onComment) onComment();
    return (0, _addComment.addCommentBefore)(body, indent, comment);
  }

  return body;
}

function stringify(item, ctx, onComment) {
  const defaultType = strOptions.defaultType;
  const implicitKey = ctx.implicitKey,
        inFlow = ctx.inFlow;
  let _item = item,
      type = _item.type,
      value = _item.value;

  if (typeof value !== 'string') {
    value = String(value);
    item = Object.assign({}, item, {
      value
    });
  }

  const _stringify = _type => {
    switch (_type) {
      case _Node.Type.BLOCK_FOLDED:
      case _Node.Type.BLOCK_LITERAL:
        return blockString(item, ctx, onComment);

      case _Node.Type.QUOTE_DOUBLE:
        return doubleQuotedString(value, ctx);

      case _Node.Type.QUOTE_SINGLE:
        return singleQuotedString(value, ctx);

      case _Node.Type.PLAIN:
        return plainString(item, ctx, onComment);

      default:
        return null;
    }
  };

  if (type !== _Node.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
    // force double quotes on control characters
    type = _Node.Type.QUOTE_DOUBLE;
  } else if ((implicitKey || inFlow) && (type === _Node.Type.BLOCK_FOLDED || type === _Node.Type.BLOCK_LITERAL)) {
    // should not happen; blocks are not valid inside flow containers
    type = _Node.Type.QUOTE_DOUBLE;
  }

  let res = _stringify(type);

  if (res === null) {
    res = _stringify(defaultType);
    if (res === null) throw new Error(`Unsupported default string type ${defaultType}`);
  }

  return res;
}

const str = {
  class: String,
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve,
  stringify,
  options: strOptions
};
exports.str = str;