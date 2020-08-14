"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _root = require("react-hot-loader/root");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ppfMockup = _interopRequireDefault(require("../assets/images/ppf-mockup.jpg"));

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

function Ppf(props) {
  var _useParams = (0, _reactRouterDom.useParams)(),
      projectId = _useParams.projectId;

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "img-desc"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _ppfMockup["default"],
    alt: "PPF Services"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "desc"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "PPF Services"), /*#__PURE__*/_react["default"].createElement("p", null, "A client needed a website designed and created for his landscaping and housekeeping company PPF Services so they could stand out from the competition and so potential customers could request quotes."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tech"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "HTML"), /*#__PURE__*/_react["default"].createElement("p", null, "SASS"), /*#__PURE__*/_react["default"].createElement("p", null, "JavaScript ES6"), /*#__PURE__*/_react["default"].createElement("p", null, "Jekyll"), /*#__PURE__*/_react["default"].createElement("p", null, "Figma")))));
}

__signature__(Ppf, "useParams{{ projectId }}", function () {
  return [_reactRouterDom.useParams];
});

var _default = (0, _root.hot)(Ppf);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Ppf, "Ppf", "/home/frances/code/francescheng/react-from-scratch/src/ppfservices.jsx");
  reactHotLoader.register(_default, "default", "/home/frances/code/francescheng/react-from-scratch/src/ppfservices.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();