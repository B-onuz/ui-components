import React from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import LogoSVG from '../../assets/logo_white.svg'

const LogoImg = styled.img`
  display: block;
  margin: auto;
  ${space}
  ${layout}
`

const Logo = ({ children, src, ...rest }) => {
  return <LogoImg src={LogoSVG} {...rest} />
}

export default Logo
