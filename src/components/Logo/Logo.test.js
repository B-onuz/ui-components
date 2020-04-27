import React from 'react'
import Logo from './Logo.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Logo changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Logo />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
