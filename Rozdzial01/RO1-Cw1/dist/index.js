(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var greeting = function greeting(name) {
  return "Witaj, ".concat(name, "!");
};

var _default = greeting;
exports.default = _default;
},{}],2:[function(require,module,exports){
"use strict";

var _greeting = _interopRequireDefault(require("./greeting"));

var _process$argv$;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _greeting.default)((_process$argv$ = process.argv[2]) !== null && _process$argv$ !== void 0 ? _process$argv$ : 'świecie'));
},{"./greeting":1}]},{},[2]);
