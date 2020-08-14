"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./App.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, {
  forceRefresh: true,
  basename: process.env.PUBLIC_URL
}, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.getElementById("root"));

console.log("This is your", process.env.PUBLIC_URL);