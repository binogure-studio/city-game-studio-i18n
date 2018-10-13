"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DefaultTags = exports.defaultPrefix = exports.availableSchema = void 0;

var _Node = require("../cst/Node");

var _createNode = _interopRequireDefault(require("../createNode"));

var _errors = require("../errors");

var _Alias = _interopRequireDefault(require("./Alias"));

var _Collection = _interopRequireDefault(require("./Collection"));

var _core = _interopRequireDefault(require("./core"));

var _failsafe = _interopRequireDefault(require("./failsafe"));

var _json = _interopRequireDefault(require("./json"));

var _Node2 = _interopRequireDefault(require("./Node"));

var _Pair = _interopRequireDefault(require("./Pair"));

var _Scalar = _interopRequireDefault(require("./Scalar"));

var _string = require("./_string");

var _yaml = _interopRequireDefault(require("./yaml-1.1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const availableSchema = {
  core: _core.default,
  failsafe: _failsafe.default,
  json: _json.default,
  'yaml-1.1': _yaml.default
};
exports.availableSchema = availableSchema;
const defaultPrefix = 'tag:yaml.org,2002:';
exports.defaultPrefix = defaultPrefix;
const DefaultTags = {
  MAP: 'tag:yaml.org,2002:map',
  SEQ: 'tag:yaml.org,2002:seq',
  STR: 'tag:yaml.org,2002:str'
};
exports.DefaultTags = DefaultTags;

const isMap = ({
  type
}) => type === _Node.Type.FLOW_MAP || type === _Node.Type.MAP;

const isSeq = ({
  type
}) => type === _Node.Type.FLOW_SEQ || type === _Node.Type.SEQ;

class Schema {
  static defaultStringifier(value) {
    return JSON.stringify(value);
  }

  constructor({
    merge,
    schema,
    tags
  }) {
    this.merge = !!merge;
    this.name = schema;
    this.schema = availableSchema[schema];

    if (!this.schema) {
      const keys = Object.keys(availableSchema).map(key => JSON.stringify(key)).join(', ');
      throw new Error(`Unknown schema; use ${keys}, or { tag, test, resolve }[]`);
    }

    if (Array.isArray(tags)) {
      this.schema = this.schema.concat(tags);
    } else if (typeof tags === 'function') {
      this.schema = tags(this.schema.slice());
    }
  } // falls back to string on no match


  resolveScalar(str, tags) {
    if (!tags) tags = this.schema;

    for (let i = 0; i < tags.length; ++i) {
      const _tags$i = tags[i],
            format = _tags$i.format,
            test = _tags$i.test,
            resolve = _tags$i.resolve;

      if (test) {
        const match = str.match(test);

        if (match) {
          const res = new _Scalar.default(resolve.apply(null, match));
          if (format) res.format = format;
          return res;
        }
      }
    }

    if (this.schema.scalarFallback) str = this.schema.scalarFallback(str);
    return new _Scalar.default(str);
  } // sets node.resolved on success


  resolveNode(doc, node, tagName) {
    const tags = this.schema.filter(({
      tag
    }) => tag === tagName);
    const generic = tags.find(({
      test
    }) => !test);
    if (node.error) doc.errors.push(node.error);

    try {
      if (generic) {
        let res = generic.resolve(doc, node);
        if (!(res instanceof _Collection.default)) res = new _Scalar.default(res);
        node.resolved = res;
      } else {
        const str = (0, _string.resolve)(doc, node);

        if (typeof str === 'string' && tags.length > 0) {
          node.resolved = this.resolveScalar(str, tags);
        }
      }
    } catch (error) {
      if (!error.source) error.source = node;
      doc.errors.push(error);
      node.resolved = null;
    }

    if (!node.resolved) return null;
    if (tagName) node.resolved.tag = tagName;
    return node.resolved;
  }

  resolveNodeWithFallback(doc, node, tagName) {
    const res = this.resolveNode(doc, node, tagName);
    if (node.hasOwnProperty('resolved')) return res;
    const fallback = isMap(node) ? DefaultTags.MAP : isSeq(node) ? DefaultTags.SEQ : DefaultTags.STR;

    if (fallback) {
      doc.warnings.push(new _errors.YAMLWarning(node, `The tag ${tagName} is unavailable, falling back to ${fallback}`));
      const res = this.resolveNode(doc, node, fallback);
      res.tag = tagName;
      return res;
    } else {
      doc.errors.push(new _errors.YAMLReferenceError(node, `The tag ${tagName} is unavailable`));
    }

    return null;
  }

  getTagObject(item) {
    if (item instanceof _Alias.default) return _Alias.default;

    if (item.tag) {
      let match = this.schema.find(({
        format,
        tag
      }) => tag === item.tag && format === item.format);
      if (!match) match = this.schema.find(({
        tag
      }) => tag === item.tag);
      if (match) return match;
    }

    if (item.value === null) {
      const match = this.schema.find(t => t.class === null && !t.format);
      if (!match) throw new Error('Tag not resolved for null value');
      return match;
    } else {
      let obj = item;

      if (item.hasOwnProperty('value')) {
        switch (typeof item.value) {
          case 'boolean':
            obj = new Boolean();
            break;

          case 'number':
            obj = new Number();
            break;

          case 'string':
            obj = new String();
            break;

          default:
            obj = item.value;
        }
      }

      let match = this.schema.find(t => t.class && obj instanceof t.class && t.format === item.format);

      if (!match) {
        match = this.schema.find(t => t.class && obj instanceof t.class && !t.format);
      }

      if (!match) {
        const name = obj && obj.constructor ? obj.constructor.name : typeof obj;
        throw new Error(`Tag not resolved for ${name} value`);
      }

      return match;
    }
  } // needs to be called before stringifier to allow for circular anchor refs


  stringifyProps(node, tagObj, {
    anchors,
    doc
  }) {
    const props = [];
    const anchor = doc.anchors.getName(node);

    if (anchor) {
      anchors[anchor] = node;
      props.push(`&${anchor}`);
    }

    if (node.tag && node.tag !== tagObj.tag) {
      props.push(doc.stringifyTag(node.tag));
    } else if (!tagObj.default) {
      props.push(doc.stringifyTag(tagObj.tag));
    }

    return props.join(' ');
  }

  stringify(item, ctx, onComment) {
    if (!(item instanceof _Node2.default)) item = (0, _createNode.default)(item, true);
    ctx.tags = this;
    if (item instanceof _Pair.default) return item.toString(ctx, onComment);
    const tagObj = this.getTagObject(item);
    const props = this.stringifyProps(item, tagObj, ctx);
    const stringify = tagObj.stringify || Schema.defaultStringifier;
    const str = stringify(item, ctx, onComment);
    return props ? item instanceof _Collection.default && str[0] !== '{' && str[0] !== '[' ? `${props}\n${ctx.indent}${str}` : `${props} ${str}` : str;
  }

}

exports.default = Schema;