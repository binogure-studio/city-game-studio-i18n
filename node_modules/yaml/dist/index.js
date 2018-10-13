"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parse = _interopRequireDefault(require("./cst/parse"));

var _createNode = _interopRequireDefault(require("./createNode"));

var _Document = _interopRequireDefault(require("./Document"));

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultOptions = {
  keepNodeTypes: true,
  keepBlobsInJSON: true,
  tags: null,
  version: '1.2'
};

class Document extends _Document.default {
  constructor(options) {
    super(Object.assign({}, defaultOptions, options));
  }

}

function parseAllDocuments(src, options) {
  return (0, _parse.default)(src).map(cstDoc => new Document(options).parse(cstDoc));
}

function parseDocument(src, options) {
  const cst = (0, _parse.default)(src);
  const doc = new Document(options).parse(cst[0]);

  if (cst.length > 1) {
    const errMsg = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
    doc.errors.unshift(new _errors.YAMLSemanticError(cst[1], errMsg));
  }

  return doc;
}

function parse(src, options) {
  const doc = parseDocument(src, options);
  doc.warnings.forEach(warning => console.warn(warning));
  if (doc.errors.length > 0) throw doc.errors[0];
  return doc.toJSON();
}

function stringify(value, options) {
  const doc = new Document(options);
  doc.contents = value;
  return String(doc);
}

var _default = {
  createNode: _createNode.default,
  defaultOptions,
  Document,
  parse,
  parseAllDocuments,
  parseCST: _parse.default,
  parseDocument,
  stringify
};
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;