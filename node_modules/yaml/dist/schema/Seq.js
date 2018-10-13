"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toJSON = _interopRequireDefault(require("../toJSON"));

var _Collection = _interopRequireDefault(require("./Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Published as 'yaml/seq'
class YAMLSeq extends _Collection.default {
  toJSON(_, keep) {
    return this.items.map((v, i) => (0, _toJSON.default)(v, String(i), keep));
  }

  toString(ctx, onComment) {
    if (!ctx) return JSON.stringify(this);
    return super.toString(ctx, {
      blockItem: ({
        type,
        str
      }) => type === 'comment' ? str : `- ${str}`,
      flowChars: {
        start: '[',
        end: ']'
      },
      itemIndent: (ctx.indent || '') + '  '
    }, onComment);
  }

}

exports.default = YAMLSeq;
module.exports = exports.default;
module.exports.default = exports.default;