"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node = require("../cst/Node");

var _toJSON = _interopRequireDefault(require("../toJSON"));

var _Node2 = _interopRequireDefault(require("./Node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Alias extends _Node2.default {
  static stringify({
    range,
    source
  }, {
    anchors,
    doc,
    implicitKey
  }) {
    const anchor = Object.keys(anchors).find(a => anchors[a] === source);
    if (anchor) return `*${anchor}${implicitKey ? ' ' : ''}`;
    const msg = doc.anchors.getName(source) ? 'Alias node must be after source node' : 'Source node not found for alias node';
    throw new Error(`${msg} [${range}]`);
  }

  constructor(source) {
    super();
    this.source = source;
    this.type = _Node.Type.ALIAS;
  }

  set tag(t) {
    throw new Error('Alias nodes cannot have tags');
  }

  toJSON(arg, keep) {
    return (0, _toJSON.default)(this.source, arg, keep);
  }

}

exports.default = Alias;

_defineProperty(Alias, "default", true);

module.exports = exports.default;
module.exports.default = exports.default;