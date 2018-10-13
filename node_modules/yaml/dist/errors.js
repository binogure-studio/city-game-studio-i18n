"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAMLWarning = exports.YAMLSyntaxError = exports.YAMLSemanticError = exports.YAMLReferenceError = void 0;

var _Node = _interopRequireDefault(require("./cst/Node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class YAMLReferenceError extends ReferenceError {
  constructor(source, message) {
    if (!message || !(source instanceof _Node.default)) {
      throw new Error('Invalid arguments for new YAMLReferenceError');
    }

    super();
    this.name = 'YAMLReferenceError';
    this.message = message;
    this.source = source;
  }

}

exports.YAMLReferenceError = YAMLReferenceError;

class YAMLSemanticError extends SyntaxError {
  constructor(source, message) {
    if (!message || !(source instanceof _Node.default)) {
      throw new Error('Invalid arguments for new YAMLSemanticError');
    }

    super();
    this.name = 'YAMLSemanticError';
    this.message = message;
    this.source = source;
  }

}

exports.YAMLSemanticError = YAMLSemanticError;

class YAMLSyntaxError extends SyntaxError {
  constructor(source, message) {
    if (!message || !(source instanceof _Node.default)) {
      throw new Error('Invalid arguments for new YAMLSyntaxError');
    }

    super();
    this.name = 'YAMLSyntaxError';
    this.message = message;
    this.source = source;
  }

}

exports.YAMLSyntaxError = YAMLSyntaxError;

class YAMLWarning extends Error {
  constructor(source, message) {
    if (!message || !(source instanceof _Node.default)) {
      throw new Error('Invalid arguments for new YAMLWarning');
    }

    super();
    this.name = 'YAMLWarning';
    this.message = message;
    this.source = source;
  }

}

exports.YAMLWarning = YAMLWarning;