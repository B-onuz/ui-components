import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
  background-color: #f4f4f4;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const NavBar = ({ ...rest }) => {
  return <StyledNavBar {...rest} />
}

export default NavBar
