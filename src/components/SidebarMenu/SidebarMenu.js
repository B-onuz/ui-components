import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { layout } from 'styled-system'
import { Box } from 'reflexbox'
import MenuList from './MenuList'

const Backdrop = styled.div`
  visibility: hidden;
  background: rgba(0, 0, 0, 0);
  transition: 0.2s;
  cursor: pointer;
`

const styleOnlyMobile = (onlyMobile, styleCSS) =>
  onlyMobile
    ? styleCSS
    : `
    @media only screen and (max-width: 767px) {
      ${styleCSS}
    }
  `

const WrapperSidebarMenu = styled.nav`
  height: 100%;
  z-index: 9999;
  ${({ open, onlyMobile }) =>
    !!open &&
    styleOnlyMobile(
      onlyMobile,
      `
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
  `
    )}
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

const useRootSidebar = () => {
  const [$rootModal, setRootModal] = useState()

  useEffect(() => {
    const rootModal = document.getElementById('root-sidebar')
    if (rootModal) {
      setRootModal(rootModal)
    } else {
      const rootEl = document.createElement('div')
      rootEl.id = 'root-sidebar'
      setRootModal(rootEl)
      document.body.appendChild(rootEl)
    }
  })

  return { $rootModal }
}

const SidebarMenuRoot = ({ children, open = false, onlyMobile = false, onClose, logo = 'Logo', items = [], ...rest }) => (
  <WrapperSidebarMenu onlyMobile={onlyMobile} open={!!open} role="menubar" aria-label="menu" aria-expanded={!!open}>
    <StyledSidebarMenu role="none" open={!!open} {...rest}>
      {logo}
      <MenuList role="menu" isOpen={!!open}>
        {children}
      </MenuList>
    </StyledSidebarMenu>
    <Backdrop onClick={onClose} aria-role="button" aria-label="Fechar menu" />
  </WrapperSidebarMenu>
)

const SidebarMenuMobile = (props) => {
  const { $rootModal } = useRootSidebar()
  if (!$rootModal) return null

  return ReactDOM.createPortal(<SidebarMenuRoot {...props} />, $rootModal)
}

const SidebarMenu = (props) => {
  const SidebarComponent = props.onlyMobile ? SidebarMenuMobile : SidebarMenuRoot

  return <SidebarComponent {...props} />
}

SidebarMenu.defaultProps = {
  width: '248px',
}

export default SidebarMenu
