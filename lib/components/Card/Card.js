"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Card/Card.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 50px;\n  padding: 4px;\n  background-color: ", ";\n  margin-right: 24px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  color: ", ";\n  font-size: 40px;\n  font-weight: 600;\n  box-shadow: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: flex-start;\n  color: ", ";\n  box-shadow: none;\n  .icon {\n    font-size: 50px;\n    margin-right: 24px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 400;\n  color: ", ";\n  opacity: ", ";\n  box-shadow: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  width: 100%;\n  max-width: 190px;\n  min-height: 84px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 3px 3px 6px #00000029;\n  border: 3px solid;\n  border-radius: 12px;\n  padding: 24px 32px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledCard = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme.colors[color] ? theme.colors[color] : color;
});

var StyledTitle = _styledComponents["default"].span(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme,
      textColor = _ref2.textColor;
  return theme.colors[textColor] ? theme.colors[textColor] : textColor;
}, function (_ref3) {
  var cancel = _ref3.cancel;
  return cancel ? '60%' : 1;
});

var StyledInfo = _styledComponents["default"].div(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme,
      iconColor = _ref4.iconColor;
  return theme.colors[iconColor] ? theme.colors[iconColor] : iconColor;
});

var Counter = _styledComponents["default"].span(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme,
      counterColor = _ref5.counterColor;
  return theme.colors[counterColor] ? theme.colors[counterColor] : counterColor;
});

var StyledIcon = _styledComponents["default"].img(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme,
      imgBackground = _ref6.imgBackground;
  return theme.colors[imgBackground] ? theme.colors[imgBackground] : imgBackground;
});

var Card = function Card(_ref7) {
  var title = _ref7.title,
      count = _ref7.count,
      icon = _ref7.icon,
      customIcon = _ref7.customIcon,
      customIconAlt = _ref7.customIconAlt,
      imgBackground = _ref7.imgBackground,
      cancel = _ref7.cancel,
      counterColor = _ref7.counterColor,
      iconColor = _ref7.iconColor,
      textColor = _ref7.textColor,
      rest = _objectWithoutPropertiesLoose(_ref7, ["title", "count", "icon", "customIcon", "customIconAlt", "imgBackground", "cancel", "counterColor", "iconColor", "textColor"]);

  return /*#__PURE__*/_react["default"].createElement(StyledCard, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    textColor: textColor,
    cancel: cancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, title), /*#__PURE__*/_react["default"].createElement(StyledInfo, {
    iconColor: iconColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, icon && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "icon",
    icon: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 18
    }
  }), customIcon && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
    src: customIcon,
    alt: customIconAlt,
    imgBackground: imgBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 24
    }
  }), /*#__PURE__*/_react["default"].createElement(Counter, {
    counterColor: counterColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, count)));
};

Card.defaultProps = {
  textColor: 'black'
};
var _default = Card;
exports["default"] = _default;
module.exports = exports.default;