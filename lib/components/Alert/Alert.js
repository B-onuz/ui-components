"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _styledSystem = require("styled-system");

var _variants = require("./variants");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Alert/Alert.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0 0 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-right: 16px;\n  font-size: ", ";\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n  margin-right: 16px;\n  background: ", ";\n  background-color: ", ";\n  background-size: cover;\n"]);

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
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  border: 1px solid;\n  border-radius: 4px;\n  padding: 12px 24px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  box-shadow: ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledAlert = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout), function (props) {
  return props.fullWidth && 'width: 100%' || '';
}, function (_ref) {
  var noShadow = _ref.noShadow;
  return noShadow ? 'none !important' : '';
}, _variants.color);

var Wrapper = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var animate = _ref2.animate;
  return "\n    animation-name: slide_" + animate + ";\n    animation-duration: .3s;\n  ";
});

var StyledIcon = _styledComponents["default"].div(_templateObject3(), function (_ref3) {
  var imgSize = _ref3.imgSize;
  return imgSize;
}, function (_ref4) {
  var imgSize = _ref4.imgSize;
  return imgSize;
}, function (_ref5) {
  var imgBackground = _ref5.imgBackground;
  return "url(" + imgBackground + ") no-repeat center center";
}, function (_ref6) {
  var bgColor = _ref6.bgColor;
  return bgColor;
});

var StyledFaIcon = _styledComponents["default"].div(_templateObject4(), function (_ref7) {
  var iconSize = _ref7.iconSize;
  return iconSize ? iconSize : '32px';
});

var StyledTitle = _styledComponents["default"].h3(_templateObject5());

var StyledMessage = _styledComponents["default"].p(_templateObject6());

var Alert = function Alert(_ref8) {
  var children = _ref8.children,
      animate = _ref8.animate,
      title = _ref8.title,
      message = _ref8.message,
      icon = _ref8.icon,
      iconSize = _ref8.iconSize,
      customIcon = _ref8.customIcon,
      imgSize = _ref8.imgSize,
      imgBackground = _ref8.imgBackground,
      bgColor = _ref8.bgColor,
      noShadow = _ref8.noShadow,
      _ref8$type = _ref8.type,
      type = _ref8$type === void 0 ? {} : _ref8$type,
      rest = _objectWithoutPropertiesLoose(_ref8, ["children", "animate", "title", "message", "icon", "iconSize", "customIcon", "imgSize", "imgBackground", "bgColor", "noShadow", "type"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    animate: animate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledAlert, _extends({}, rest, {
    noShadow: noShadow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), icon && /*#__PURE__*/_react["default"].createElement(StyledFaIcon, {
    iconSize: iconSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })), imgBackground && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
    imgBackground: imgBackground,
    imgSize: imgSize,
    bgColor: bgColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 27
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, title), /*#__PURE__*/_react["default"].createElement(StyledMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, message))));
};

var _default = Alert;
exports["default"] = _default;
module.exports = exports.default;