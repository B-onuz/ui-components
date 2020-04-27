import React, { useState } from 'react'
import BaseLayout from './BaseLayout'
import Fieldset from '../Fieldset'
import TextField from '../TextField'
import { Box, Flex } from 'reflexbox'
import SidebarMenu from '../SidebarMenu'
import SidebarMenuItem from '../SidebarMenuItem'
import CheckBox from '../CheckBox'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDice, faCodeBranch, faAdjust, faKey, faKissBeam, faKissWinkHeart } from '@fortawesome/free-solid-svg-icons'

const menuItems = [
  { icon: faHome, text: 'Home' },
  { icon: faDice, text: 'Dados' },
  { icon: faCodeBranch, text: 'Branch' },
  { icon: faAdjust, text: 'Adjusts Darkmode' },
  { icon: faKey, text: 'Chaves de acesso' },
]

const DashboardSidebar = ({ ...rest }) => {
  return (
    <SidebarMenu {...rest}>
      {menuItems.map((item) => {
        return <SidebarMenuItem component={'header'} icon={<FontAwesomeIcon icon={item.icon} />} children={item.text} />
      })}
    </SidebarMenu>
  )
}

export default {
  title: 'BaseLayout',
  component: BaseLayout,
}

export const BaseLayoutExample = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }
  return (
    <BaseLayout
      menuIsOpen={menuIsOpen}
      handleChangeMenuIsOpen={toggleMenu}
      sidebar={<DashboardSidebar open={menuIsOpen} onClose={closeMenu} width={248} />}
    >
      <form noValidate>
        <Fieldset legend={'Informações pessoais'}>
          <Flex flexWrap={'wrap'} mx={-2}>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
          </Flex>
        </Fieldset>
        <Fieldset mt={4} legend={'Informações Profissionais'}>
          <Flex flexWrap={'wrap'} mx={-2}>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>

            <Box width={[1, 1, 2 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
          </Flex>
        </Fieldset>
        <Fieldset mt={4} legend={'Seleciona especialidades do advogado'}>
          <Flex m={-2} flexWrap={'wrap'} flexDirection={['column', 'column', 'row']}>
            <Box m={2}>
              <CheckBox id="societario" label={'Societário'} />
            </Box>
            <Box m={2}>
              <CheckBox id="propriedade-intelectual" label={'Propriedade Intelectual'} />
            </Box>
            <Box m={2}>
              <CheckBox id="tributario" label={'Tributário'} />
            </Box>
            <Box m={2}>
              <CheckBox id="contratos" label={'Contratos'} />
            </Box>
            <Box m={2}>
              <CheckBox id="investimentos" label={'Investimentos'} />
            </Box>
            <Box m={2}>
              <CheckBox id="contencioso" label={'Contencioso'} />
            </Box>
          </Flex>
        </Fieldset>
        <Fieldset mt={4} legend={'Administração da plataforma B-onuz'}>
          <CheckBox id="admin" label={'Adicionar esse advogado ao grupo de Administradores da Plataforma'} />
        </Fieldset>
        <Flex justifyContent={'flex-end'}>
          <Button m={2}>Cancelar</Button>
          <Button type="submit" color={'primary'} m={2}>
            Adicionar
          </Button>
        </Flex>
      </form>
    </BaseLayout>
  )
}