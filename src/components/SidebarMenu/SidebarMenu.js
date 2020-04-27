import React from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'
import { Box } from 'reflexbox'
import MenuList from './MenuList'
import SidebarMenuItem from '../SidebarMenuItem'
import Logo from '../Logo'
import logo from '../../assets/logo_white.svg'

const Backdrop = styled.div`
  visibility: hidden;
  background: rgba(0, 0, 0, 0);
  transition: 0.2s;
  cursor: pointer;
`

const WrapperSidebarMenu = styled.div`
  height: 100%;
  z-index: 999;
  ${({ open }) =>
    !!open &&
    `
    @media only screen and (max-width: 767px) {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      ${Backdrop} {
        visibility: visible;
        background: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
      }
    }
  `}
`

const StyledSidebarMenu = styled(Box)`
  ${layout}
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background: #550e33 linear-gradient(89deg, #550e33 0%, #ff4f5d 100%) 0% 0% no-repeat padding-box;
  transition: 0.2s linear;
  z-index: 1002;
  overflow: auto;
  ${({ open }) =>
    open
      ? `
    transform: translateX(0);
  `
      : `
    transform: translateX(-100%);
  `}
`

const SidebarMenu = ({ children, open = false, onClose, items = [], ...rest }) => {
  return (
    <WrapperSidebarMenu open={open}>
      <StyledSidebarMenu open={open} {...rest}>
        <Logo width="180" py={3} src={logo} />
        <MenuList isOpen={open}>{children}</MenuList>
      </StyledSidebarMenu>
      <Backdrop onClick={onClose} aria-ole="button" aria-label="Abrir menu" />
    </WrapperSidebarMenu>
  )
}

SidebarMenu.defaultProps = {
  width: '248px',
}

export default SidebarMenu