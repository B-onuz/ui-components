import React from 'react';
import { addDecorator } from '@storybook/react'
import themeDecorator from './themeDecorator'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo())
addDecorator(themeDecorator)