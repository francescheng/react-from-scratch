"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _root = require("react-hot-loader/root");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

function About(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "about-info"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hello"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Hi, I\u2019m Frances Cheng")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-title"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "I'm a:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-des"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Developer, Designer, Illustrator, Photographer, Baking and Gardening Enthusiast, and living in the Bay Area looking for my next opportunity."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-title"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "My skills:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-des"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Technologies: Ruby on Rails, HTML/CSS, JavaScript, PostgresSQL, React.js", /*#__PURE__*/_react["default"].createElement("br", null), "Design: Photoshop, Illustrator, InDesign, Lightroom, XD, User Research, UI/UX design", /*#__PURE__*/_react["default"].createElement("br", null), "Languages: English, Mandarin, French, Japanese"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-title"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "About Me:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-des"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "I have a B.S. in Industrial Design and 5 years of design experience in product and graphic design. Currently I'm self-studying programming and computer science, and doing freelance web design and development projects. To find out more about my professional background please take a look at my ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.linkedin.com/in/frances-cheng/"
  }, "LinkedIn")))));
}

var _default = (0, _root.hot)(About);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "/home/frances/code/francescheng/react-from-scratch/src/about.jsx");
  reactHotLoader.register(_default, "default", "/home/frances/code/francescheng/react-from-scratch/src/about.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();