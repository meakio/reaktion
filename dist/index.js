"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.Provider = undefined;

var _provider = require("./provider");

var _provider2 = _interopRequireDefault(_provider);

var _consumer = require("./consumer");

var _consumer2 = _interopRequireDefault(_consumer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = exports.Provider = _provider2.default;
var connect = exports.connect = _consumer2.default;