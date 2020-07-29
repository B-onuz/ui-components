"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Button = _interopRequireDefault(require("../Button"));

var _ContextMenuDialog = _interopRequireDefault(require("./ContextMenuDialog"));

var _this = void 0,
    _jsxFileName = "/home/gabriel/Documentos/Projetos/Bonuz/ui-components/src/components/ContextMenu/ContextMenu.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  margin: 8px 0;\n  border: 1px solid #f1f1f3;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  box-shadow: 0px 2px 3px #2c282848;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  position: relative;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledContextMenu = _styledComponents["default"].div(_templateObject(), _styledSystem.color, _styledSystem.space);

var ContextMenuToogleButton = _styledComponents["default"].button(_templateObject2());

var Divider = _styledComponents["default"].hr(_templateObject3());

var Icon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject4(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.darkGrey;
});

var ContextMenu = function ContextMenu(_ref2) {
  var children = _ref2.children,
      direction = _ref2.direction,
      contextMenuActions = _ref2.contextMenuActions,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "direction", "contextMenuActions"]);

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var wrapperRef = (0, _react.useRef)(null);
  var buttonRef = (0, _react.useRef)(null);

  var onClose = function onClose() {
    setIsOpen(false);
    return true;
  };

  return /*#__PURE__*/_react["default"].createElement(StyledContextMenu, _extends({
    ref: wrapperRef
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(ContextMenuToogleButton, {
    ref: buttonRef,
    onClick: function onClick() {
      return setIsOpen(function (last) {
        return !last;
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: _freeSolidSvgIcons.faEllipsisH,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react["default"].createElement(_ContextMenuDialog["default"], {
    isOpen: isOpen,
    onClose: onClose,
    buttonRef: buttonRef,
    direction: direction,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, (contextMenuActions || []).map(function (action, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      linkButton: true,
      color: 'primary',
      onClick: function onClick() {
        return onClose() && action.buttonFunction();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, action.text), index + 1 !== contextMenuActions.length ? /*#__PURE__*/_react["default"].createElement(Divider, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 56
      }
    }) : null);
  })));
};

ContextMenu.defaultProps = {
  direction: 'left'
};
var _default = ContextMenu;
exports["default"] = _default;
module.exports = exports.default;