import React from 'react'
import TextField from './TextField'
import { Box, Flex } from 'reflexbox'

export default {
  title: 'TextField',
  component: TextField,
}

export const TextFieldExample = () => (
  <Flex flexWrap={'wrap'}>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="name" name={'name'} required label={'Nome'} m={2} placeholder={'Nome'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="email" type="email" name={'email'} label={'Email'} m={2} placeholder={'Email'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="telefone" type="phone" name={'fullname'} label={'Telefone'} m={2} placeholder={'Telefone'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
    </Box>
  </Flex>
)
