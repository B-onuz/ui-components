"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var colors = {
  fullDarkRed: "#550e33",
  darkRed: "#9c2543",
  lightRed: "#ef4d5a",
  red: "#db2828",
  orange: "#f2711c",
  yellow: "#fbbd08",
  olive: "#b5cc18",
  green: "#21BA45",
  teal: "#00b5ad",
  blue: "#2185d0",
  violet: "#6435c9",
  purple: "#a333c8",
  pink: "#e03997",
  brown: "#a5673f",
  grey: "#767676",
  black: "#1b1c1d"
};
colors.primary = colors.lightRed;
colors.secondary = colors.fullDarkRed;
colors["default"] = '#e0e1e2';
var fontSizes = [12, 14, 16, 20, 24, 32];
var _default = {
  fontFamily: "'Lato', sans-serif",
  colors: colors,
  fontSizes: fontSizes
};
exports["default"] = _default;