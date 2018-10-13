"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createNode;

var _Map = _interopRequireDefault(require("./schema/Map"));

var _Pair = _interopRequireDefault(require("./schema/Pair"));

var _Scalar = _interopRequireDefault(require("./schema/Scalar"));

var _Seq = _interopRequireDefault(require("./schema/Seq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createNode(value, wrapScalars = true) {
  if (value == null) return new _Scalar.default(null);
  if (typeof value !== 'object') return wrapScalars ? new _Scalar.default(value) : value;

  if (Array.isArray(value)) {
    const seq = new _Seq.default();
    seq.items = value.map(v => createNode(v, wrapScalars));
    return seq;
  } else {
    const map = new _Map.default();
    map.items = Object.keys(value).map(key => {
      const k = createNode(key, wrapScalars);
      const v = createNode(value[key], wrapScalars);
      return new _Pair.default(k, v);
    });
    return map;
  }
}

module.exports = exports.default;
module.exports.default = exports.default;