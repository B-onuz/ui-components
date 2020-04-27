'use strict'

exports.__esModule = true
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _styledSystem = require('styled-system')

var _this = void 0,
  _jsxFileName = '/Users/rogeralbino/projects/Kazap/B-onuz/ui-components/src/components/Label/Label.js'

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
  var data = _taggedTemplateLiteralLoose(['\n  color: #555;\n  font-size: 0.9em;\n  font-weight: 600;\n  ', '\n'])

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

var StyledLabel = _styledComponents['default'].label(_templateObject(), function (_ref) {
  var required = _ref.required
  return (!!required && "\n    &::before {\n      content: '* ';\n    }\n  ") || ''
})

var Label = function Label(_ref2) {
  var children = _ref2.children,
    rest = _objectWithoutPropertiesLoose(_ref2, ['children'])

  return /*#__PURE__*/ _react['default'].createElement(
    StyledLabel,
    _extends({}, rest, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10,
      },
    }),
    children
  )
}

var _default = Label
exports['default'] = _default
module.exports = exports.default
