"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addComment = _interopRequireDefault(require("../addComment"));

var _Node = _interopRequireDefault(require("./Node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Collection extends _Node.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "items", []);
  }

  // overridden in implementations
  toJSON() {
    return null;
  }

  toString(ctx, {
    blockItem,
    flowChars,
    itemIndent
  }, onComment) {
    const _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent;
    const inFlow = this.type && this.type.substr(0, 4) === 'FLOW' || ctx.inFlow;
    if (inFlow) itemIndent += '  ';
    ctx = Object.assign({}, ctx, {
      indent: itemIndent,
      inFlow,
      type: null
    });
    let hasItemWithComment = false;
    let hasItemWithNewLine = false;
    const nodes = this.items.reduce((nodes, item, i) => {
      const commentBefore = item && item.commentBefore;

      if (commentBefore) {
        hasItemWithComment = true;
        commentBefore.match(/^.*$/gm).forEach(line => {
          nodes.push({
            type: 'comment',
            str: `#${line}`
          });
        });
      }

      let comment = item && item.comment;
      if (comment) hasItemWithComment = true;
      let str = doc.schema.stringify(item, ctx, () => {
        comment = null;
      });
      if (!hasItemWithNewLine && str.indexOf('\n') !== -1) hasItemWithNewLine = true;
      if (inFlow && i < this.items.length - 1) str += ',';
      str = (0, _addComment.default)(str, itemIndent, comment);
      nodes.push({
        type: 'item',
        str
      });
      return nodes;
    }, []);
    let str;

    if (nodes.length === 0) {
      str = flowChars.start + flowChars.end;
    } else if (inFlow) {
      const start = flowChars.start,
            end = flowChars.end;
      const strings = nodes.map(({
        str
      }) => str);

      if (hasItemWithComment || hasItemWithNewLine || strings.reduce((sum, str) => sum + str.length + 2, 2) > Collection.maxFlowStringSingleLineLength) {
        str = `${start}\n  ${indent}${strings.join(`\n  ${indent}`)}\n${indent}${end}`;
      } else {
        str = `${start} ${strings.join(' ')} ${end}`;
      }
    } else {
      str = nodes.map(blockItem).join(`\n${indent}`);
    }

    if (this.comment) {
      str += '\n' + this.comment.replace(/^/gm, `${indent}#`);
      if (onComment) onComment();
    }

    return str;
  }

}

exports.default = Collection;

_defineProperty(Collection, "maxFlowStringSingleLineLength", 60);

module.exports = exports.default;
module.exports.default = exports.default;