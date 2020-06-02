"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Example
 * const { isOpen, openModal, closeModal, toggleModal } = useModal(false)
 */
var useTableOrder = function useTableOrder(defaultIsOpen) {
  if (defaultIsOpen === void 0) {
    defaultIsOpen = false;
  }

  var _useState = (0, _react.useState)(defaultIsOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var openModal = (0, _react.useCallback)(function () {
    setIsOpen(true);
  }, []);
  var closeModal = (0, _react.useCallback)(function () {
    setIsOpen(false);
  }, []);
  var toggleModal = (0, _react.useCallback)(function () {
    setIsOpen(isOpen);
  }, [isOpen]);
  return {
    isOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal,
    toggleModal: toggleModal
  };
};

var _default = useTableOrder;
exports["default"] = _default;
module.exports = exports.default;