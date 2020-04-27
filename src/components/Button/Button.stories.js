import React from 'react'
import Button from './Button'
import { Flex, Box } from 'reflexbox'

export default {
  title: 'Button',
  component: Button,
}

export const Colors = () => (
  <div>
    <Button m={2}>{'Default'}</Button>
    <Button m={2} color={'default'}>
      {'Default'}
    </Button>
    <Button m={2} color={'primary'}>
      {'Primary'}
    </Button>
    <Button m={2} color={'secondary'}>
      {'Secondary'}
    </Button>
    <Button m={2} color={'fullDarkRed'}>
      {'fullDarkRed'}
    </Button>
    <Button m={2} color={'darkRed'}>
      {'darkRed'}
    </Button>
    <Button m={2} color={'lightRed'}>
      {'lightRed'}
    </Button>
    <Button m={2} color={'red'}>
      {'red'}
    </Button>
    <Button m={2} color={'orange'}>
      {'orange'}
    </Button>
    <Button m={2} color={'yellow'}>
      {'yellow'}
    </Button>
    <Button m={2} color={'olive'}>
      {'olive'}
    </Button>
    <Button m={2} color={'green'}>
      {'green'}
    </Button>
    <Button m={2} color={'teal'}>
      {'teal'}
    </Button>
    <Button m={2} color={'blue'}>
      {'blue'}
    </Button>
    <Button m={2} color={'violet'}>
      {'violet'}
    </Button>
    <Button m={2} color={'purple'}>
      {'purple'}
    </Button>
    <Button m={2} color={'pink'}>
      {'pink'}
    </Button>
    <Button m={2} color={'brown'}>
      {'brown'}
    </Button>
    <Button m={2} color={'grey'}>
      {'grey'}
    </Button>
    <Button m={2} color={'black'}>
      {'black'}
    </Button>
  </div>
)

export const Sizes = () => (
  <div>
    <Button m={2} size={'small'} color={'primary'}>
      {'Small'}
    </Button>
    <Button m={2} size={'medium'} color={'primary'}>
      {'Medium'}
    </Button>
    <Button m={2} size={'big'} color={'primary'}>
      {'Big'}
    </Button>
    <Button m={2} size={'huge'} color={'primary'}>
      {'huge'}
    </Button>
  </div>
)

export const Fullwidth = () => (
  <Flex flexWrap={'wrap'}>
    <Box width={[1]} m={2}>
      <Button color="primary" fullWidth>
        {'Full Width'}
      </Button>
    </Box>
  </Flex>
)
