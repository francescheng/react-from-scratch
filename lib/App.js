"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _root = require("react-hot-loader/root");

var _react = _interopRequireWildcard(require("react"));

var _reactScriptTag = _interopRequireDefault(require("react-script-tag"));

require("../assets/stylesheets/style.scss");

var _reactRouterDom = require("react-router-dom");

var _Projects = _interopRequireDefault(require("./Projects.jsx"));

var _personal = _interopRequireDefault(require("./personal.jsx"));

var _about = _interopRequireDefault(require("./about.jsx"));

var _contact = _interopRequireDefault(require("./contact.jsx"));

var _clarify = _interopRequireDefault(require("./clarify.jsx"));

var _ppfservices = _interopRequireDefault(require("./ppfservices.jsx"));

var _logo = _interopRequireDefault(require("../assets/images/logo.png"));

var _succulents = _interopRequireDefault(require("../assets/images/succulents-01.png"));

var _succulents2 = _interopRequireDefault(require("../assets/images/succulents-02.png"));

var _succulents3 = _interopRequireDefault(require("../assets/images/succulents-03.png"));

var _succulents4 = _interopRequireDefault(require("../assets/images/succulents-04.png"));

var _succulents5 = _interopRequireDefault(require("../assets/images/succulents-05.png"));

var _succulents6 = _interopRequireDefault(require("../assets/images/succulents-06.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "page-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "logo-container"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/work"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _logo["default"],
        className: "logo",
        alt: "logo"
      }))), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "navbar"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/work"
      }, "WORK")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/about"
      }, "ABOUT")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/contact"
      }, "CONTACT")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        component: _Projects["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/work",
        component: _Projects["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/about",
        component: _about["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/contact",
        component: _contact["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/work/ppfservices",
        component: _ppfservices["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/work/odaiba",
        component: _ppfservices["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/work/clarify",
        component: _clarify["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/work/matchbox",
        component: _ppfservices["default"]
      })))), /*#__PURE__*/_react["default"].createElement("footer", {
        id: "footer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "zigzag"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer-info"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "icons"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _succulents["default"],
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("img", {
        src: _succulents2["default"],
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("img", {
        src: _succulents3["default"],
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("img", {
        src: _succulents4["default"],
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("img", {
        src: _succulents5["default"],
        alt: ""
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer-links"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://github.com/francescheng",
        target: "_blank"
      }, "Github")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/frances-cheng/",
        target: "_blank"
      }, "LinkedIn")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.francescheng.photo/",
        target: "_blank"
      }, "Personal"))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(_react.Component);

var _default = (0, _root.hot)(App);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/home/frances/code/francescheng/react-from-scratch/src/App.jsx");
  reactHotLoader.register(_default, "default", "/home/frances/code/francescheng/react-from-scratch/src/App.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();