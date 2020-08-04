"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reflexbox = require("reflexbox");

var _MenuList = _interopRequireDefault(require("./MenuList"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/SidebarMenu/SidebarMenu.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  background: #550e33 linear-gradient(89deg, #550e33 0%, #ff4f5d 100%) 0% 0% no-repeat padding-box;\n  transition: 0.2s linear;\n  z-index: 1002;\n  overflow: auto;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  z-index: 9999999;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  visibility: hidden;\n  background: rgba(0, 0, 0, 0);\n  transition: 0.2s;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Backdrop = _styledComponents["default"].div(_templateObject());

var WrapperSidebarMenu = _styledComponents["default"].nav(_templateObject2(), function (_ref) {
  var open = _ref.open;
  return !!open && "\n    @media only screen and (max-width: 767px) {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n\n      " + Backdrop + " {\n        visibility: visible;\n        background: rgba(0, 0, 0, 0.3);\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1001;\n      }\n    }\n  ";
});

var StyledSidebarMenu = (0, _styledComponents["default"])(_reflexbox.Box)(_templateObject3(), _styledSystem.layout, function (_ref2) {
  var open = _ref2.open;
  return open ? "\n    transform: translateX(0);\n  " : "\n    transform: translateX(-100%);\n  ";
});

var SidebarMenu = function SidebarMenu(_ref3) {
  var children = _ref3.children,
      _ref3$open = _ref3.open,
      open = _ref3$open === void 0 ? false : _ref3$open,
      onClose = _ref3.onClose,
      _ref3$logo = _ref3.logo,
      logo = _ref3$logo === void 0 ? 'Logo' : _ref3$logo,
      _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items,
      rest = _objectWithoutPropertiesLoose(_ref3, ["children", "open", "onClose", "logo", "items"]);

  return /*#__PURE__*/_react["default"].createElement(WrapperSidebarMenu, {
    open: !!open,
    role: "menubar",
    "aria-label": "menu",
    "aria-expanded": !!open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledSidebarMenu, _extends({
    role: "none",
    open: !!open
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), logo, /*#__PURE__*/_react["default"].createElement(_MenuList["default"], {
    role: "menu",
    isOpen: !!open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, children)), /*#__PURE__*/_react["default"].createElement(Backdrop, {
    onClick: onClose,
    "aria-role": "button",
    "aria-label": "Fechar menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }));
};

SidebarMenu.defaultProps = {
  width: '248px'
};
var _default = SidebarMenu;
exports["default"] = _default;