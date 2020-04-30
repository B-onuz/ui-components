import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import PropTypes from 'prop-types'
import { Flex, Box } from 'reflexbox/styled-components'
import HamburguerButton from '../HamburguerButton'
import Navbar from '../NavBar'
import Header from '../Header'

const StyledBaseLayout = styled(Flex)`
  ${color}
  height: 100%;
`

const ChildrenWrapper = styled.div`
  flex: 1;
  padding: 42px;
  overflow: auto;
`

const LayoutContainer = styled(Box)`
  transition: margin-left 0.2s linear;
  ${({ menuIsOpen, menuWidth }) =>
    !menuIsOpen
      ? `
    margin-left: 0;
  `
      : `
    @media only screen and (min-width: 768px) {
      margin-left: ${menuWidth}px;
    }
  `}
`

const BaseLayout = ({ children, menuIsOpen = false, sidebar = null, menuWidth = 248, handleChangeMenuIsOpen, title, ...rest }) => {
  return (
    <StyledBaseLayout {...rest}>
      {sidebar}
      <LayoutContainer display={'flex'} flexDirection={'column'} flex={1} menuWidth={menuWidth} menuIsOpen={menuIsOpen}>
        <Navbar>
          {!!sidebar && (
            <HamburguerButton isOpen={!!sidebar ? menuIsOpen : false} onClick={handleChangeMenuIsOpen} color={'primary'}>
              {!open ? 'Abrir menu' : 'Fechar menu'}
            </HamburguerButton>
          )}
          <Header title={title || ''} />
        </Navbar>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LayoutContainer>
    </StyledBaseLayout>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

BaseLayout.defaultProps = {
  /*todo: defaultProps*/
}

export default BaseLayout
