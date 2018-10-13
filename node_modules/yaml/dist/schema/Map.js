"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toJSON = _interopRequireDefault(require("../toJSON"));

var _Collection = _interopRequireDefault(require("./Collection"));

var _Merge = _interopRequireDefault(require("./Merge"));

var _Pair = _interopRequireDefault(require("./Pair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Published as 'yaml/map'
class YAMLMap extends _Collection.default {
  toJSON(_, keep) {
    return this.items.reduce((map, item) => {
      if (item instanceof _Merge.default) {
        // If the value associated with a merge key is a single mapping node,
        // each of its key/value pairs is inserted into the current mapping,
        // unless the key already exists in it. If the value associated with the
        // merge key is a sequence, then this sequence is expected to contain
        // mapping nodes and each of these nodes is merged in turn according to
        // its order in the sequence. Keys in mapping nodes earlier in the
        // sequence override keys specified in later mapping nodes.
        // -- http://yaml.org/type/merge.html
        const keys = Object.keys(map);
        const items = item.value.items;

        for (let i = items.length - 1; i >= 0; --i) {
          const source = items[i].source;

          if (source instanceof YAMLMap) {
            const obj = source.toJSON('', keep);
            Object.keys(obj).forEach(key => {
              if (!keys.includes(key)) map[key] = obj[key];
            });
          } else {
            throw new Error('Merge sources must be maps');
          }
        }
      } else {
        const stringKey = item.stringKey,
              value = item.value;
        map[stringKey] = (0, _toJSON.default)(value, stringKey, keep);
      }

      return map;
    }, {});
  }

  toString(ctx, onComment) {
    if (!ctx) return JSON.stringify(this);
    this.items.forEach(item => {
      if (!(item instanceof _Pair.default)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
    });
    return super.toString(ctx, {
      blockItem: ({
        str
      }) => str,
      flowChars: {
        start: '{',
        end: '}'
      },
      itemIndent: ctx.indent || ''
    }, onComment);
  }

}

exports.default = YAMLMap;
module.exports = exports.default;
module.exports.default = exports.default;