import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'

export default {
  title: 'Logo',
  component: Logo,
}

const Wrapper = styled.div`
  padding: 18px;
  background: ${(props) => props.theme.colors['primary']};
`

export const LogoExample = () => (
  <Wrapper>
    <Logo width="180" />
  </Wrapper>
)
