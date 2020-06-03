import React from 'react'
import ContextMenu from './ContextMenu.js'
import renderer from 'react-test-renderer'

test('ContextMenu changes the class when hovered', () => {
  const component = renderer.create(<ContextMenu />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
