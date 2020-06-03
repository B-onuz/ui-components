import React from 'react'
import ContextMenu from './ContextMenu'
import { Flex, Box } from 'reflexbox/styled-components'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ContextMenu',
  component: ContextMenu,
}

const functionA = action('Função A')

const functionB = action('Função B')

const functionC = action('Função C')

const exampleObj = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

export const ContextMenuExample = () => (
  <Flex style={{ height: '100vh' }} width={[1]} justifyContent={'space-evenly'} alignItems={'center'}>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'right'} />
    </Box>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'top'} />
    </Box>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'left'} />
    </Box>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'bottom'} />
    </Box>
  </Flex>
)
