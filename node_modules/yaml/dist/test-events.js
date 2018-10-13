"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testEvents;

var _parse = _interopRequireDefault(require("./cst/parse"));

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// test harness for yaml-test-suite event tests
function testEvents(src, options) {
  const opt = Object.assign({
    keepCstNodes: true,
    keepNodeTypes: true,
    version: '1.2'
  }, options);
  const docs = (0, _parse.default)(src).map(cstDoc => new _Document.default(opt).parse(cstDoc));
  const errDoc = docs.find(doc => doc.errors.length > 0);
  const error = errDoc ? errDoc.errors[0].message : null;
  const events = ['+STR'];

  try {
    for (let i = 0; i < docs.length; ++i) {
      const doc = docs[i];
      let root = doc.contents;
      if (Array.isArray(root)) root = root[0];

      const _ref = doc.range || [0, 0],
            _ref2 = _slicedToArray(_ref, 2),
            rootStart = _ref2[0],
            rootEnd = _ref2[1];

      let e = doc.errors[0] && doc.errors[0].source;
      if (e && e.type === 'SEQ_ITEM') e = e.node;
      if (e && (e.type === 'DOCUMENT' || e.range.start < rootStart)) throw new Error();
      let docStart = '+DOC';
      const pre = src.slice(0, rootStart);
      const explicitDoc = /---\s*$/.test(pre);
      if (explicitDoc) docStart += ' ---';else if (!doc.contents) continue;
      events.push(docStart);
      addEvents(events, doc, e, root);
      if (doc.contents && doc.contents.length > 1) throw new Error();
      let docEnd = '-DOC';

      if (rootEnd) {
        const post = src.slice(rootEnd);
        if (/^\.\.\./.test(post)) docEnd += ' ...';
      }

      events.push(docEnd);
    }
  } catch (e) {
    return {
      events,
      error: error || e
    };
  }

  events.push('-STR');
  return {
    events,
    error
  };
}

function addEvents(events, doc, e, node) {
  if (!node) return events.push('=VAL :');
  if (e && node.cstNode === e) throw new Error();
  let props = '';
  let anchor = doc.anchors.getName(node);

  if (anchor) {
    if (/\d$/.test(anchor)) {
      const alt = anchor.replace(/\d$/, '');
      if (doc.anchors.getNode(alt)) anchor = alt;
    }

    props = ` &${anchor}`;
  }

  if (node.cstNode && node.cstNode.tag) {
    const _node$cstNode$tag = node.cstNode.tag,
          handle = _node$cstNode$tag.handle,
          suffix = _node$cstNode$tag.suffix;
    props += handle === '!' && !suffix ? ' <!>' : ` <${node.tag}>`;
  }

  let scalar = null;

  switch (node.type) {
    case 'ALIAS':
      let alias = doc.anchors.getName(node.source);

      if (/\d$/.test(alias)) {
        const alt = alias.replace(/\d$/, '');
        if (doc.anchors.getNode(alt)) alias = alt;
      }

      events.push(`=ALI${props} *${alias}`);
      break;

    case 'BLOCK_FOLDED':
      scalar = '>';
      break;

    case 'BLOCK_LITERAL':
      scalar = '|';
      break;

    case 'PLAIN':
      scalar = ':';
      break;

    case 'QUOTE_DOUBLE':
      scalar = '"';
      break;

    case 'QUOTE_SINGLE':
      scalar = "'";
      break;

    case 'PAIR':
      events.push(`+MAP${props}`);
      addEvents(events, doc, e, node.key);
      addEvents(events, doc, e, node.value);
      events.push('-MAP');
      break;

    case 'FLOW_SEQ':
    case 'SEQ':
      events.push(`+SEQ${props}`);
      node.items.forEach(item => {
        addEvents(events, doc, e, item);
      });
      events.push('-SEQ');
      break;

    case 'FLOW_MAP':
    case 'MAP':
      events.push(`+MAP${props}`);
      node.items.forEach(({
        key,
        value
      }) => {
        addEvents(events, doc, e, key);
        addEvents(events, doc, e, value);
      });
      events.push('-MAP');
      break;

    default:
      throw new Error(`Unexpected node type ${node.type}`);
  }

  if (scalar) {
    const value = node.cstNode.strValue.replace(/\\/g, '\\\\').replace(/\0/g, '\\0').replace(/\x07/g, '\\a').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\v/g, '\\v').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/\x1b/g, '\\e');
    events.push(`=VAL${props} ${scalar}${value}`);
  }
}

module.exports = exports.default;
module.exports.default = exports.default;