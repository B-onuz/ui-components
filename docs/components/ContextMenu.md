# ContextMenu (Component)

[Descrição do componente e onde usar]

## Como utilizar

```js
import ContextMenu from 'ui-components/lib/components/ContextMenu'
```

```jsx
import React from 'react'
import ContextMenu from 'ui-components/lib/components/ContextMenu'
import { Flex, Box } from 'reflexbox/styled-components'

const functionA = () => {
  console.log('Função A')
}

const functionB = () => {
  console.log('Função B')
}

const functionC = () => {
  console.log('Função C')
}

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
```

Escala no tema: `theme.variantScale`

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
