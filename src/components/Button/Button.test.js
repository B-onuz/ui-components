import React from 'react'
import Button from './Button.js'
import renderer from 'react-test-renderer'

test('Button changes the class when hovered', () => {
  const component = renderer.create(
    <Button>Hello Button</Button>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});