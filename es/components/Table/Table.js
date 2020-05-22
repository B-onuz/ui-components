"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _PaceLoading = _interopRequireDefault(require("./PaceLoading"));

var _this = void 0,
    _jsxFileName = "/Users/rogeralbino/projects/Kazap/B-onuz/ui-components/src/components/Table/Table.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: table-row-group;\n  & > ", " {\n    background-color: #f8fafc;\n    &:nth-child(odd) {\n      background-color: #fff;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  background: blue;\n  border: 1px solid #efefef;\n  display: flex;\n  flex-direction: column;\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  overflow-x: auto;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  padding: 13px 40px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: inherit;\n  justify-content: flex-start;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  /* padding: 13px 40px; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-left: 4px;\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #838383;\n  font-weight: 400;\n  padding: 1em;\n  position: relative;\n  position: sticky;\n  top: 0;\n  background: #f1f3f8;\n  padding: 13px 40px;\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #f1f3f8;\n  display: table-header-group;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-spacing: 0;\n  position: relative;\n  border-collapse: collapse;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledTable = _styledComponents["default"].table(_templateObject());

var TableHead = _styledComponents["default"].thead(_templateObject2());

var TableHeader = _styledComponents["default"].th(_templateObject3(), function (_ref) {
  var order = _ref.order;
  return order && "\n    cursor: pointer;\n  ";
}, function (_ref2) {
  var align = _ref2.align;
  return align && "\n    text-align: " + align + ";\n  ";
});

var OrderArrow = _styledComponents["default"].span(_templateObject4(), function (_ref3) {
  var isCurrent = _ref3.isCurrent;
  return !!isCurrent ? "\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 8px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    background-color: #000;\n    transition: transform 0.25s ease-in-out 0s;\n  }" : "\n    &::before,\n    &::after {\n      content: '';\n      display: block;\n      border: solid #838383;\n      border-width: 0 1px 1px 0;\n      display: inline-block;\n      padding: 3px;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: auto;\n      width: 0px;\n      height: 0px;\n    }\n    &::after {\n      top: 4px;\n      transform: rotate(-135deg);\n    }\n\n    &::before {\n      bottom: 4px;\n      transform: rotate(45deg);\n    }\n  \n  ";
}, function (_ref4) {
  var order = _ref4.order,
      isCurrent = _ref4.isCurrent;

  if (!!isCurrent) {
    return order === 'asc' ? "\n      &::before {\n        transform: translate3d(-2px, 0px, 0px) rotate(45deg);\n      }\n      &::after {\n        transform: translate3d(3px, 0px, 0px) rotate(-45deg);\n      }\n    " : "\n      &::before {\n        transform: translate3d(3px, 0px, 0px) rotate(45deg);\n      }\n      &::after {\n        transform: translate3d(-2px, 0px, 0px) rotate(-45deg);\n      }\n    \n    ";
  } else {
    return '';
  }
});

var TableRow = _styledComponents["default"].tr(_templateObject5());

var TableHeaderSpan = _styledComponents["default"].span(_templateObject6());

var TableData = _styledComponents["default"].td(_templateObject7(), function (_ref5) {
  var align = _ref5.align;
  return align && "\n    text-align: " + align + ";\n  ";
});

var WrapperTable = _styledComponents["default"].div(_templateObject8());

var Wrapper = _styledComponents["default"].div(_templateObject9(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));

var TableBody = _styledComponents["default"].tbody(_templateObject10(), TableRow);

var Table = function Table(_ref6) {
  var children = _ref6.children,
      headers = _ref6.headers,
      pagination = _ref6.pagination,
      onChangeOrder = _ref6.onChangeOrder,
      data = _ref6.data,
      loading = _ref6.loading,
      rest = _objectWithoutPropertiesLoose(_ref6, ["children", "headers", "pagination", "onChangeOrder", "data", "loading"]);

  var handleChangeOrder = function handleChangeOrder(item) {
    if (onChangeOrder) {
      onChangeOrder(item);
    }
  };

  var getDataByKey = function getDataByKey(_ref7) {
    var item = _ref7.item,
        key = _ref7.key;
    var keys = key.split('.');
    return keys.reduce(function (acc, item) {
      return acc[item] || '';
    }, item);
  };

  return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }), !!loading && /*#__PURE__*/_react["default"].createElement(_PaceLoading["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }), /*#__PURE__*/_react["default"].createElement(WrapperTable, {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledTable, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(TableHead, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(TableRow, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, (headers || []).map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(TableHeader, {
      key: index,
      order: item.sort,
      align: item.align,
      onClick: function onClick() {
        return handleChangeOrder(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }, /*#__PURE__*/_react["default"].createElement(TableHeaderSpan, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 19
      }
    }, item.title, " ", item.sort && /*#__PURE__*/_react["default"].createElement(OrderArrow, {
      isCurrent: !!(pagination.sort === item.key),
      order: pagination.order,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 48
      }
    })));
  }))), /*#__PURE__*/_react["default"].createElement(TableBody, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, !(data || []).length && /*#__PURE__*/_react["default"].createElement(TableRow, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }, /*#__PURE__*/_react["default"].createElement(TableData, {
    style: {
      textAlign: 'center'
    },
    colSpan: (headers || []).length,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, !!loading ? 'Carregando...' : 'Nenhum registro encontrado')), (data || []).map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 15
      }
    }, headers.map(function (header) {
      return /*#__PURE__*/_react["default"].createElement(TableData, {
        align: header.align,
        key: header.key + "-" + index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 19
        }
      }, getDataByKey({
        key: header.key,
        item: row
      }));
    }));
  })))));
};

Table.defaultProps = {};
Table.propTypes = process.env.NODE_ENV !== "production" ? {
  headers: _propTypes["default"].arrayOf(_propTypes["default"].object)
} : {};
var _default = Table;
exports["default"] = _default;