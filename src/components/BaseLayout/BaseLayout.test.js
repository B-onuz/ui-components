import React from 'react'
import BaseLayout from './BaseLayout.js'
import renderer from 'react-test-renderer'

test('should render BaseLayout without sidebar', () => {
  const component = renderer.create(<BaseLayout />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
