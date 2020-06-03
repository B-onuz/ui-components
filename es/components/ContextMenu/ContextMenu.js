"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Button = _interopRequireDefault(require("../Button"));

var _this = void 0,
    _jsxFileName = "/Users/rogeralbino/projects/Kazap/B-onuz/ui-components/src/components/ContextMenu/ContextMenu.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  margin: 8px 0;\n  border: 1px solid #f1f1f3;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  border-radius: 12px;\n  opacity: ", ";\n  z-index: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 16px;\n  background: #fff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #2c28281c;\n  transition: all 300ms;\n\n  ", "\n  &::after {\n    content: '';\n    width: 1em;\n    height: 1em;\n    position: absolute;\n    box-shadow: 1px 2px 2px -1px #2c28281c;\n    background: #fff 0% 0%;\n    ", "\n  }\n"]);

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

var ContextDialogMenu = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 1 : 0;
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 1 : -100;
}, function (_ref3) {
  var direction = _ref3.direction;

  if (direction === 'left') {
    return "\n      right: calc(100% + 24px);\n      top: -50%;\n    ";
  }

  if (direction === 'right') {
    return "\n      left: calc(100% + 24px);\n      top: -50%;\n    ";
  }

  if (direction === 'top') {
    return "\n      left: 50%;\n      transform: translateX(-50%);\n      bottom: calc(100% + 1.5em);\n    ";
  }

  if (direction === 'bottom') {
    return "\n      transform: translateX(-50%);\n      left: 50%;\n      top: calc(100% + 1.5em);\n    ";
  }
}, function (_ref4) {
  var direction = _ref4.direction;

  if (direction === 'left') {
    return "\n      right: -0.5em;\n      top: 1.6em;\n      transform: rotateZ(-45deg);\n    ";
  }

  if (direction === 'right') {
    return "\n      left: -0.5em;\n      top: 1.6em;\n      transform: rotateZ(135deg);\n    ";
  }

  if (direction === 'top') {
    return "\n      top: calc(100% - 0.5em);\n      transform: rotateZ(45deg);\n      left: 0;\n      right: 0;\n      margin: auto;\n    ";
  }

  if (direction === 'bottom') {
    return "\n      bottom: calc(100% - 0.5em);\n      transform: rotateZ(-135deg);\n      left: 0;\n      right: 0;\n      margin: auto;\n    ";
  }
});

var Divider = _styledComponents["default"].hr(_templateObject4());

var Icon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.darkGrey;
});

var ContextMenu = function ContextMenu(_ref6) {
  var children = _ref6.children,
      direction = _ref6.direction,
      contextMenuActions = _ref6.contextMenuActions,
      rest = _objectWithoutPropertiesLoose(_ref6, ["children", "direction", "contextMenuActions"]);

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var wrapperRef = (0, _react.useRef)(null);

  var useOutsideAlerter = function useOutsideAlerter(ref) {
    (0, _react.useEffect)(function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
  return /*#__PURE__*/_react["default"].createElement(StyledContextMenu, _extends({
    ref: wrapperRef
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(ContextMenuToogleButton, {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: _freeSolidSvgIcons.faEllipsisH,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react["default"].createElement(ContextDialogMenu, {
    isOpen: isOpen,
    direction: direction,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, (contextMenuActions || []).map(function (action, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      linkButton: true,
      color: 'primary',
      onClick: function onClick() {
        return action.buttonFunction();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }, action.text), index + 1 !== contextMenuActions.length ? /*#__PURE__*/_react["default"].createElement(Divider, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
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