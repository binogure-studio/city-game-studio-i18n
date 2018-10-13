"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Node = _interopRequireWildcard(require("./Node"));

var _Range = _interopRequireDefault(require("./Range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Directive extends _Node.default {
  static endOfDirective(src, offset) {
    let ch = src[offset];

    while (ch && ch !== '\n' && ch !== '#') ch = src[offset += 1]; // last char can't be whitespace


    ch = src[offset - 1];

    while (ch === ' ' || ch === '\t') {
      offset -= 1;
      ch = src[offset - 1];
    }

    return offset;
  }

  constructor() {
    super(_Node.Type.DIRECTIVE);
    this.name = null;
  }

  get parameters() {
    const raw = this.rawValue;
    return raw ? raw.trim().split(/[ \t]+/) : [];
  }

  parseName(start) {
    const src = this.context.src;
    let offset = start;
    let ch = src[offset];

    while (ch && ch !== '\n' && ch !== '\t' && ch !== ' ') ch = src[offset += 1];

    this.name = src.slice(start, offset);
    return offset;
  }

  parseParameters(start) {
    const src = this.context.src;
    let offset = start;
    let ch = src[offset];

    while (ch && ch !== '\n' && ch !== '#') ch = src[offset += 1];

    this.valueRange = new _Range.default(start, offset);
    return offset;
  }

  parse(context, start) {
    this.context = context;
    const src = context.src;
    let offset = this.parseName(start + 1);
    offset = this.parseParameters(offset);
    offset = this.parseComment(offset);
    this.range = new _Range.default(start, offset);
    return offset;
  }

}

exports.default = Directive;
module.exports = exports.default;
module.exports.default = exports.default;