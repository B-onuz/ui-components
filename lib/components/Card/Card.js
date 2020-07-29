"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _variants = require("./variants");

var _this = void 0,
    _jsxFileName = "/home/gabriel/Documentos/Projetos/Bonuz/ui-components/src/components/Card/Card.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-left: 32px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: 40px;\n  font-weight: 600;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0 0 8px;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0px 0px 24px;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: 25%;\n  border: 3px solid;\n  border-radius: 12px;\n  padding: 24px 24px 32px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledCard = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout), _variants.color);

var StyledTitle = _styledComponents["default"].p(_templateObject2());

var StyledMessage = _styledComponents["default"].p(_templateObject3());

var StyledInfo = _styledComponents["default"].div(_templateObject4());

var Card = function Card(_ref) {
  var children = _ref.children,
      title = _ref.title,
      count = _ref.count,
      icon = _ref.icon,
      cancel = _ref.cancel,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "title", "count", "icon", "cancel"]);

  return /*#__PURE__*/_react["default"].createElement(StyledCard, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), !cancel ? /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 18
    }
  }, title) : /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    style: {
      opacity: '60%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 55
    }
  }, title), /*#__PURE__*/_react["default"].createElement(StyledInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    style: {
      fontSize: '50px',
      marginRight: '24px'
    },
    icon: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react["default"].createElement(StyledMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, count)));
};

var _default = Card;
exports["default"] = _default;
module.exports = exports.default;