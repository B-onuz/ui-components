import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
};

export const ButtonVariants = () => (
  <div>
    <Button m={2} variant={'default'}>{'Default'}</Button>
    <Button m={2} variant={'primary'}>{'Primary'}</Button>
    <Button m={2} variant={'secondary'}>{'Secondary'}</Button>
  </div>
);

export const ButtonColors = () => (
  <div>
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
  </div>
);
