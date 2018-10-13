"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toJSON;

function toJSON(value, arg, keep) {
  return Array.isArray(value) ? value.map((v, i) => toJSON(v, String(i), keep)) : value && typeof value.toJSON === 'function' ? value.toJSON(arg, keep) : value;
}

module.exports = exports.default;
module.exports.default = exports.default;