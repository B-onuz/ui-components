'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _color = _interopRequireDefault(require('color'))

var _styledSystem = require('styled-system')

var _variants = require('./variants')

var _propTypes = _interopRequireDefault(require('prop-types'))

var _propTypes2 = _interopRequireDefault(require('@styled-system/prop-types'))

var _Spinner = _interopRequireDefault(require('../Spinner'))

var _this = void 0,
  _jsxFileName = '/Users/rogeralbino/projects/Kazap/B-onuz/ui-components/src/components/Button/Button.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([
    '\n  appearance: none;\n  font-family: inherit;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n  padding: .5rem 1rem;\n  border-style: solid;\n  color: #000;\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  box-sizing: border-box;\n  &:focus {\n    box-shadow: 0 0 8px ',
    ';\n  }\n  \n  &:active:not(:disabled) {\n    box-shadow: inset 0px 0px 5px #c1c1c1;\n  }\n  &:active,\n  &:hover {\n    background-color: ',
    ';\n  }\n  &:disabled {\n    background-color: ',
    ';\n  }\n  ',
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

var Button = _styledComponents['default'].button(
  _templateObject(),
  _variants.color,
  _variants.size,
  _styledSystem.space,
  function (props) {
    return (props.fullWidth && 'width: 100%;') || ''
  },
  function (_ref) {
    var theme = _ref.theme,
      color = _ref.color
    return theme.colors[color]
  },
  function (_ref2) {
    var theme = _ref2.theme,
      color = _ref2.color
    return new _color['default'](theme.colors[color]).saturate(0.1).darken(0.2).string()
  },
  function (_ref3) {
    var theme = _ref3.theme,
      color = _ref3.color
    return new _color['default'](theme.colors[color]).desaturate(0.4).lighten(0.1).opaquer(0.7).string()
  },
  function (_ref4) {
    var loading = _ref4.loading
    return !!loading && '\n    cursor: progress;\n  '
  }
)

Button.displayName = 'Button'
Button.propTypes = _extends(
  {
    size: _propTypes['default'].oneOf(['small', 'medium', 'big', 'huge']),
    color: _propTypes['default'].string,
  },
  _propTypes2['default'].space
)
Button.defaultProps = {
  size: 'medium',
  color: 'default',
  type: 'button',
}

var _default = function _default(_ref5) {
  var children = _ref5.children,
    loading = _ref5.loading,
    disabled = _ref5.disabled,
    rest = _objectWithoutPropertiesLoose(_ref5, ['children', 'loading', 'disabled'])

  return /*#__PURE__*/ _react['default'].createElement(
    Button,
    _extends({}, rest, {
      disabled: !!disabled || !!loading,
      loading: loading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 3,
      },
    }),
    !!loading ? 'carregando...' : children
  )
}

exports['default'] = _default
