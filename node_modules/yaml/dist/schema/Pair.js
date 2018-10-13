"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addComment = _interopRequireDefault(require("../addComment"));

var _toJSON = _interopRequireDefault(require("../toJSON"));

var _Collection = _interopRequireDefault(require("./Collection"));

var _Node = _interopRequireDefault(require("./Node"));

var _Scalar = _interopRequireDefault(require("./Scalar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Published as 'yaml/pair'
class Pair extends _Node.default {
  constructor(key, value = null) {
    super();
    this.key = key;
    this.value = value;
    this.type = 'PAIR';
  }

  get commentBefore() {
    return this.key && this.key.commentBefore;
  }

  set commentBefore(cb) {
    if (this.key == null) this.key = new _Scalar.default(null);
    this.key.commentBefore = cb;
  }

  get comment() {
    return this.value && this.value.comment;
  }

  set comment(comment) {
    if (this.value == null) this.value = new _Scalar.default(null);
    this.value.comment = comment;
  }

  get stringKey() {
    const key = (0, _toJSON.default)(this.key);
    if (key === null) return '';
    if (typeof key === 'object') try {
      return JSON.stringify(key);
    } catch (e) {
      /* should not happen, but let's ignore in any case */
    }
    return String(key);
  }

  toJSON(_, keep) {
    const pair = {};
    const sk = this.stringKey;
    pair[sk] = (0, _toJSON.default)(this.value, sk, keep);
    return pair;
  }

  toString(ctx, onComment) {
    if (!ctx || !ctx.doc) return JSON.stringify(this);
    const key = this.key,
          value = this.value;
    let keyComment = key instanceof _Node.default && key.comment;
    const explicitKey = !key || keyComment || key instanceof _Collection.default;
    const _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent;
    ctx = Object.assign({}, ctx, {
      implicitKey: !explicitKey,
      indent: indent + '  '
    });
    let keyStr = doc.schema.stringify(key, ctx, () => {
      keyComment = null;
    });
    if (keyComment) keyStr = (0, _addComment.default)(keyStr, ctx.indent, keyComment);
    ctx.implicitKey = false;
    const valueStr = doc.schema.stringify(value, ctx, onComment);
    const vcb = value && value.commentBefore ? ` #${value.commentBefore.replace(/\n+(?!\n|$)/g, `$&${ctx.indent}#`)}` : '';

    if (explicitKey) {
      return `? ${keyStr}\n${indent}:${vcb ? `${vcb}\n${ctx.indent}` : ' '}${valueStr}`;
    } else if (value instanceof _Collection.default) {
      return `${keyStr}:${vcb}\n${ctx.indent}${valueStr}`;
    } else {
      return `${keyStr}:${vcb ? `${vcb}\n${ctx.indent}` : ' '}${valueStr}`;
    }
  }

}

exports.default = Pair;
module.exports = exports.default;
module.exports.default = exports.default;