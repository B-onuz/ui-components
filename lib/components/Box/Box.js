"use strict";

exports.__esModule = true;
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
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  box-shadow: 0px 3px 6px #2c282846;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  padding: 10px;\n  border-radius: 10px;\n  display: ", ";\n  flex: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  align-items: ", ";\n"]);

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
  var flex = _ref2.flex;
  return flex;
}, function (_ref3) {
  var justifyContent = _ref3.justifyContent;
  return justifyContent;
}, function (_ref4) {
  var flexDirection = _ref4.flexDirection;
  return flexDirection;
}, function (_ref5) {
  var alignItems = _ref5.alignItems;
  return alignItems;
});

var Box = function Box(_ref6) {
  var display = _ref6.display,
      justifyContent = _ref6.justifyContent,
      flexDirection = _ref6.flexDirection,
      alignItems = _ref6.alignItems,
      flex = _ref6.flex,
      rest = _objectWithoutPropertiesLoose(_ref6, ["display", "justifyContent", "flexDirection", "alignItems", "flex"]);

  return /*#__PURE__*/_react["default"].createElement(StyledBox, _extends({
    display: display,
    justifyContent: justifyContent,
    flexDirection: flexDirection,
    alignItems: alignItems,
    flex: flex
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }));
};

var _default = Box;
exports["default"] = _default;
module.exports = exports.default;