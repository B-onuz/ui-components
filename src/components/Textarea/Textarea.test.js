import React from 'react'
import Textarea from './Textarea.js'
import renderer from 'react-test-renderer'

test('Textarea changes the class when hovered', () => {
  const component = renderer.create(<Textarea />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
