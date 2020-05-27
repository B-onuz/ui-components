const colors = {
  fullDarkRed: '#550e33',
  darkRed: '#9c2543',
  lightRed: '#ef4d5a',
  red: '#db2828',
  orange: '#f2711c',
  yellow: '#fbbd08',
  olive: '#b5cc18',
  green: '#21BA45',
  teal: '#00b5ad',
  blue: '#2185d0',
  violet: '#6435c9',
  purple: '#a333c8',
  pink: '#e03997',
  brown: '#a5673f',
  grey: '#767676',
  darkGrey: '#9A9A9A',
  black: '#1b1c1d',
  warning: '#7A4D05',
  success: '#1E561F',
  info: '#0E566C',
  danger: '#973937',
}

colors.primary = colors.lightRed
colors.secondary = colors.fullDarkRed
colors.default = '#e0e1e2'

const breakpoints = ['40em', '52em', '64em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fontSizes = [12, 14, 16, 20, 24, 32]

export default {
  fontFamily: `'Lato', sans-serif`,
  colors,
  fontSizes,
  breakpoints,
}
