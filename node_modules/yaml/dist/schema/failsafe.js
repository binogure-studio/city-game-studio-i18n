"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.seq = exports.map = void 0;

var _Map = _interopRequireDefault(require("./Map"));

var _Seq = _interopRequireDefault(require("./Seq"));

var _string = require("./_string");

var _parseMap = _interopRequireDefault(require("./parseMap"));

var _parseSeq = _interopRequireDefault(require("./parseSeq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const map = {
  class: _Map.default,
  default: true,
  tag: 'tag:yaml.org,2002:map',
  resolve: _parseMap.default,
  stringify: (value, ctx, onComment) => value.toString(ctx, onComment)
};
exports.map = map;
const seq = {
  class: _Seq.default,
  default: true,
  tag: 'tag:yaml.org,2002:seq',
  resolve: _parseSeq.default,
  stringify: (value, ctx, onComment) => value.toString(ctx, onComment)
};
exports.seq = seq;
var _default = [map, seq, _string.str];
exports.default = _default;