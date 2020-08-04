"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _styledSystem = require("styled-system");

var _variants = require("./variants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Alert/Alert.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0 0 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #fff;\n  border-radius: 4px;\n  @keyframes slide_bottom {\n    from {\n      transform: translateY(100%);\n      opacity: 0.5;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slide_top {\n    from {\n      transform: translateY(-100%);\n      opacity: 0.5;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  border: 1px solid;\n  border-radius: 4px;\n  padding: 16px 24px 24px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledAlert = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout), function (props) {
  return props.fullWidth && 'width: 100%' || '';
}, _variants.color);

var Wrapper = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var animate = _ref.animate;
  return "\n    animation-name: slide_" + animate + ";\n    animation-duration: .3s;\n  ";
});

var StyledTitle = _styledComponents["default"].h3(_templateObject3());

var StyledMessage = _styledComponents["default"].p(_templateObject4());

var Alert = function Alert(_ref2) {
  var children = _ref2.children,
      animate = _ref2.animate,
      title = _ref2.title,
      message = _ref2.message,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? {} : _ref2$type,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "animate", "title", "message", "type"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    animate: animate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledAlert, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/_react["default"].createElement(StyledMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, message)));
};

var _default = Alert;
exports["default"] = _default;
module.exports = exports.default;