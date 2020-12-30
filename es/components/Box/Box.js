"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Box/Box.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  box-shadow: 0px 3px 6px #2c282846;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  padding: 10px;\n  border-radius: 10px;\n  display: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  align-items: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledBox = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout), function (_ref) {
  var display = _ref.display;
  return display;
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent;
}, function (_ref3) {
  var flexDirection = _ref3.flexDirection;
  return flexDirection;
}, function (_ref4) {
  var alignItems = _ref4.alignItems;
  return alignItems;
});

var Box = function Box(_ref5) {
  var display = _ref5.display,
      justifyContent = _ref5.justifyContent,
      flexDirection = _ref5.flexDirection,
      alignItems = _ref5.alignItems,
      rest = _objectWithoutPropertiesLoose(_ref5, ["display", "justifyContent", "flexDirection", "alignItems"]);

  return /*#__PURE__*/_react["default"].createElement(StyledBox, _extends({
    display: display,
    justifyContent: justifyContent,
    flexDirection: flexDirection,
    alignItems: alignItems
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }));
};

var _default = Box;
exports["default"] = _default;