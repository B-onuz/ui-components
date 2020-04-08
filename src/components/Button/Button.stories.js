import React from 'react'
import Button from './Button'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const ButtonExample = () => (
  <Button disabled={boolean("Disabled", false)} bg={text('bg', 'red')}>{text('children', 'Hello Button')} {number('numero', 0)}</Button>
);
