import React, { useState } from 'react'
import Switch from './Switch.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Switch', () => {
  const ControlledSwitch = () => {
    const [checked, setChecked] = useState(false)
    return <Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />
  }
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ControlledSwitch />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
