import React from 'react'
import Button from './Button.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

test('Should render button', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}><Button>Hello Button</Button></ThemeProvider>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

test('Should render button when bg prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button m={2} variant={'default'} bg={'fullDarkRed'} >{'fullDarkRed'}</Button>
      <Button m={2} variant={'default'} bg={'darkRed'} >{'darkRed'}</Button>
      <Button m={2} variant={'default'} bg={'lightRed'} >{'lightRed'}</Button>
      <Button m={2} variant={'default'} bg={'red'} >{'red'}</Button>
      <Button m={2} variant={'default'} bg={'orange'} >{'orange'}</Button>
      <Button m={2} variant={'default'} bg={'yellow'} >{'yellow'}</Button>
      <Button m={2} variant={'default'} bg={'olive'} >{'olive'}</Button>
      <Button m={2} variant={'default'} bg={'green'} >{'green'}</Button>
      <Button m={2} variant={'default'} bg={'teal'} >{'teal'}</Button>
      <Button m={2} variant={'default'} bg={'blue'} >{'blue'}</Button>
      <Button m={2} variant={'default'} bg={'violet'} >{'violet'}</Button>
      <Button m={2} variant={'default'} bg={'purple'} >{'purple'}</Button>
      <Button m={2} variant={'default'} bg={'pink'} >{'pink'}</Button>
      <Button m={2} variant={'default'} bg={'brown'} >{'brown'}</Button>
      <Button m={2} variant={'default'} bg={'grey'} >{'grey'}</Button>
      <Button m={2} variant={'default'} bg={'black'} >{'black'}</Button>
    </ThemeProvider>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});

test('Should render button when variant prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button m={2} variant={'default'}>{'Default'}</Button>
      <Button m={2} variant={'primary'}>{'Primary'}</Button>
      <Button m={2} variant={'secondary'}>{'Secondary'}</Button>
    </ThemeProvider>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});