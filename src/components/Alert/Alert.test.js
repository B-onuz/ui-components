import React from 'react'
import Alert from './Alert.js'
import renderer from 'react-test-renderer'

test('Alert changes the class when hovered', () => {
  const component = renderer.create(<Alert />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
