"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _reactSpring = require("react-spring");

var _this = void 0,
    _jsxFileName = "/Users/rogeralbino/projects/Kazap/B-onuz/ui-components/src/components/Modal/Modal.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: auto;\n  max-width: 90%;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ContentModal = (0, _styledComponents["default"])(_reactSpring.animated.div)(_templateObject());

var Wrapper = _styledComponents["default"].div(_templateObject2());

var Shadow = _styledComponents["default"].button(_templateObject3());

var useRootModal = function useRootModal() {
  var _useState = (0, _react.useState)(),
      $rootModal = _useState[0],
      setRootModal = _useState[1];

  (0, _react.useEffect)(function () {
    var rootModal = document.getElementById('modal-root');

    if (rootModal) {
      setRootModal(rootModal);
    } else {
      var rootEl = document.createElement('div');
      rootEl.id = 'modal-root';
      setRootModal(rootEl);
      document.body.appendChild(rootEl);
    }
  });
  return {
    $rootModal: $rootModal
  };
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      open = _ref.open,
      onClose = _ref.onClose,
      boxProps = _ref.boxProps,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "open", "onClose", "boxProps"]);

  var _useRootModal = useRootModal(),
      $rootModal = _useRootModal.$rootModal;

  var transitions = (0, _reactSpring.useTransition)(open, null, {
    from: {
      transform: 'translate3d(0,-80px,0)',
      opacity: 0
    },
    enter: {
      transform: 'translate3d(0,0px,0)',
      opacity: 1
    },
    leave: {
      transform: 'translate3d(0,-80px,0)',
      opacity: 0
    }
  });
  var opacityTransitions = (0, _reactSpring.useTransition)(open, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  if (!$rootModal) return null;
  return _reactDom["default"].createPortal(opacityTransitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key;
    return item && /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({}, rest, {
      key: key,
      role: "dialog",
      "aria-modal": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }), transitions.map(function (_ref3) {
      var _React$createElement;

      var item = _ref3.item,
          key = _ref3.key,
          props = _ref3.props;
      return item && /*#__PURE__*/_react["default"].createElement(ContentModal, (_React$createElement = {
        key: key,
        style: props
      }, _React$createElement["key"] = key, _React$createElement["style"] = props, _React$createElement.__self = _this, _React$createElement.__source = {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }, _React$createElement), /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
        children: children
      }, boxProps, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      })));
    }), opacityTransitions.map(function (_ref4) {
      var item = _ref4.item,
          key = _ref4.key,
          props = _ref4.props;
      return item && /*#__PURE__*/_react["default"].createElement(Shadow, {
        key: key,
        style: props,
        onClick: onClose,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 71
        }
      });
    }));
  }), $rootModal);
};

var _default = Modal;
exports["default"] = _default;
module.exports = exports.default;