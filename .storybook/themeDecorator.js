import React from "react"
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../src/theme'
import 'typeface-roboto'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily};
  }
`

const ThemeDecorator = storyFn => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
)

export default ThemeDecorator