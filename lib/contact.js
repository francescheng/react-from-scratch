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

function Contact(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grey-form"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hello"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Contact me at ", /*#__PURE__*/_react["default"].createElement("a", {
    id: "red-email",
    href: "mailto:francesvcheng@gmail.com"
  }, "francesvcheng@gmail.com"), /*#__PURE__*/_react["default"].createElement("br", null), "or send a message below")), /*#__PURE__*/_react["default"].createElement("form", {
    name: "contact",
    method: "POST",
    action: "/thanks/"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "contact"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "names"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "name"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "First Name"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "grey-contact",
    type: "text",
    id: "fname",
    name: "firstname",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "name"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Last Name"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "grey-contact",
    type: "text",
    id: "lname",
    name: "lastname",
    required: true
  }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Email"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "grey-contact",
    type: "email",
    id: "email",
    name: "email",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Subject"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "grey-contact",
    type: "text",
    id: "subject",
    name: "subject"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Message"), /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "grey-message",
    name: "message",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "submit-button"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "solid-grey-button",
    type: "submit",
    value: "Submit"
  })))));
}

var _default = (0, _root.hot)(Contact);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Contact, "Contact", "/home/frances/code/francescheng/react-from-scratch/src/contact.jsx");
  reactHotLoader.register(_default, "default", "/home/frances/code/francescheng/react-from-scratch/src/contact.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();