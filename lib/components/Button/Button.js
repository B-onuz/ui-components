"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  appearance: none;\n  font-family: inherit;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n  padding: .5rem 1rem;\n  ", "\n  ", "\n  ", "\n  border: 1px solid ", ";\n  &:focus {\n    box-shadow: 0 0 8px ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return (0, _styledSystem.variant)({
    variants: {
      primary: {
        color: new _color["default"](props.theme.colors.lightRed).isDark() ? '#fff' : '#000',
        bg: "lightRed",
        fontSize: 2
      },
      secondary: {
        color: new _color["default"](props.theme.colors.fullDarkRed).isDark() ? '#fff' : '#000',
        bg: "fullDarkRed",
        fontSize: 2
      },
      "default": {
        color: new _color["default"](props.theme.colors[props.bg] || '#e0e1e2').isDark() ? '#fff' : '#000',
        bg: "#e0e1e2",
        fontSize: 2
      }
    }
  });
}, _styledSystem.color, _styledSystem.space, function (_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      bg = _ref.bg;
  return bg ? theme.colors[bg] : theme.colors[variant];
}, function (_ref2) {
  var theme = _ref2.theme,
      variant = _ref2.variant,
      bg = _ref2.bg;
  return bg ? theme.colors[bg] : theme.colors[variant] || "rgba(0,0,0,.3)";
}, function (_ref3) {
  var theme = _ref3.theme,
      variant = _ref3.variant,
      bg = _ref3.bg;
  return bg ? new _color["default"](theme.colors[bg]).lighten(0.2).string() : new _color["default"](theme.colors[variant] || "#ddd").lighten(0.15).string();
}, function (_ref4) {
  var theme = _ref4.theme,
      variant = _ref4.variant,
      bg = _ref4.bg;
  return bg ? new _color["default"](theme.colors[bg]).darken(0.2).string() : new _color["default"](theme.colors[variant] || "#ddd").darken(0.15).string();
});

var _default = Button;
exports["default"] = _default;
module.exports = exports.default;