import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import theme from '../src/theme'
import 'typeface-lato'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${theme.fontFamily};
  }
  #root {
    height: 100%;
  }
  #root > div {
    height: 100%;
  }
`

const ThemeDecorator = (storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
)

export default ThemeDecorator
