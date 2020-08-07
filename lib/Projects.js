"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _root = require("react-hot-loader/root");

var _react = _interopRequireWildcard(require("react"));

var _thumbnail = _interopRequireDefault(require("./thumbnail.jsx"));

var _reactRouterDom = require("react-router-dom");

var _ppfservices = _interopRequireDefault(require("./ppfservices.jsx"));

var _ppfMockup = _interopRequireDefault(require("../assets/images/ppf-mockup.jpg"));

var _cat = _interopRequireDefault(require("../assets/images/cat.jpg"));

var _logo = _interopRequireDefault(require("../assets/images/logo.png"));

var _clarifyScreens = _interopRequireDefault(require("../assets/images/clarify-screens.jpg"));

var _matchboxMockup = _interopRequireDefault(require("../assets/images/matchbox-mockup.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

function Projects(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "item a"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_thumbnail["default"], {
    className: "project",
    link: "/work/ppfservices",
    image: _ppfMockup["default"],
    "project-title": "",
    category: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item b"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_thumbnail["default"], {
    className: "project",
    link: "/work/odaiba",
    image: _cat["default"],
    title: "",
    category: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item c"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_thumbnail["default"], {
    className: "project",
    link: "/work/clarify",
    image: _clarifyScreens["default"],
    title: "",
    category: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item d"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_thumbnail["default"], {
    className: "project",
    link: "/work/matchbox",
    image: _matchboxMockup["default"],
    title: "",
    category: ""
  }))));
}

var _default = (0, _root.hot)(Projects);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Projects, "Projects", "/home/frances/code/francescheng/react-from-scratch/src/Projects.jsx");
  reactHotLoader.register(_default, "default", "/home/frances/code/francescheng/react-from-scratch/src/Projects.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();