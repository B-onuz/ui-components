'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _styledSystem = require('styled-system')

var _this = void 0,
  _jsxFileName = '/Users/rogeralbino/projects/Kazap/B-onuz/ui-components/src/components/HamburguerButton/HamburguerButton.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([
    "\n  width: 35px;\n  height: 26px;\n  border: none;\n  position: relative;\n  background: linear-gradient(to bottom, #333333de, #333333de);\n  background-size: 100% 20%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  transition: background-size 0.2s 0.25s ease;\n  outline: none;\n  cursor: pointer;\n  transform: scale(0.6);\n  transition: background-size 0.3s 0.2s ease;\n  &:before,\n  &:after {\n    height: 20%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    background-color: #333333de;\n    content: '';\n    transition: transform 0.3s ease;\n  }\n  &:before {\n    top: 0;\n  }\n  &:after {\n    bottom: 0;\n  }\n  &:before,\n  &:after {\n    transition: 0.3s ease;\n  }\n  ",
    '\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  strings.raw = raw
  return strings
}

var StyledHamburguerButton = _styledComponents['default'].button(_templateObject(), function (props) {
  return (
    props.isOpen &&
    '\n      // background-size: 0 0;\n      &:before,\n      &:after {\n        transition-delay: 0.3s;\n      }\n      // &:before {\n      //   transform: translateY(200%) rotate(45deg);\n      // }\n      // &:after {\n      //   transform: translateY(-200%) rotate(-45deg);\n      // }\n    '
  )
})

var HamburguerButton = function HamburguerButton(_ref) {
  var _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    children = _ref.children,
    rest = _objectWithoutPropertiesLoose(_ref, ['isOpen', 'children'])

  return /*#__PURE__*/ _react['default'].createElement(
    StyledHamburguerButton,
    _extends(
      {
        isOpen: isOpen,
      },
      rest,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 10,
        },
      }
    )
  )
}

var _default = HamburguerButton
exports['default'] = _default
