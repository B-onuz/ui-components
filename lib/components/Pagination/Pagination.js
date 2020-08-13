"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Button = _interopRequireDefault(require("../Button"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Pagination/Pagination.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  border-radius: 32px;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 0.3em;\n  background: none;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n  ", ";\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    ", ";\n    transform: translateY(-100%);\n    transition: 0.2s ease-in-out;\n  }\n  &:active {\n    background-color: transparent;\n  }\n  &:hover,\n  &:active {\n    background-color: transparent;\n    &::before {\n      transform: translateY(0);\n      z-index: 1;\n    }\n    color: #fff;\n  }\n  ", ";\n  & > span {\n    position: relative;\n    z-index: 2;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledPagination = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.layout, _styledSystem.space));

var PageItem = (0, _styledComponents["default"])(_Button["default"])(_templateObject2(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return "color: " + theme.colors[color];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return "background-color: " + theme.colors[color];
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color,
      active = _ref3.active;
  return !!active && "\n    color: #fff;\n    background-color: " + theme.colors[color] + ";\n  ";
});
var Pagination = (0, _react.memo)(function (_ref4) {
  var children = _ref4.children,
      color = _ref4.color,
      onChangePage = _ref4.onChangePage,
      onNextPage = _ref4.onNextPage,
      onPrevPage = _ref4.onPrevPage,
      total = _ref4.total,
      page = _ref4.page,
      onLazyChangePage = _ref4.onLazyChangePage,
      _ref4$lazyTimeout = _ref4.lazyTimeout,
      lazyTimeout = _ref4$lazyTimeout === void 0 ? 300 : _ref4$lazyTimeout,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children", "color", "onChangePage", "onNextPage", "onPrevPage", "total", "page", "onLazyChangePage", "lazyTimeout"]);

  var _useState = (0, _react.useState)(),
      lazyKey = _useState[0],
      setLazyKey = _useState[1];

  var getRange = function getRange(x) {
    return (x % 5 ? Math.trunc(x / 5) + 1 : x / 5) * 5;
  };

  var range = getRange(page);
  var pageItems = [range - 4, range - 3, range - 2, range - 1, range].filter(function (item) {
    return item <= total;
  });
  (0, _react.useEffect)(function () {
    if (!onLazyChangePage) return;
    window.clearTimeout(lazyKey);
    setLazyKey(setTimeout(function () {
      onLazyChangePage(page);
    }, lazyTimeout));
  }, [page]);
  return /*#__PURE__*/_react["default"].createElement(StyledPagination, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(PageItem, {
    color: color,
    m: 1,
    onClick: function onClick() {
      return onPrevPage();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, '<')), [].concat(pageItems).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(PageItem, {
      key: item,
      color: color,
      m: 1,
      active: page === item,
      onClick: function onClick() {
        return onChangePage(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, item));
  }), /*#__PURE__*/_react["default"].createElement(PageItem, {
    color: color,
    m: 1,
    onClick: function onClick() {
      return onNextPage();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, '>')));
});
var _default = Pagination;
exports["default"] = _default;
module.exports = exports.default;