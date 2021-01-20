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
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    padding: 2vh;
    position: fixed;
    width: 100%;
    z-index: 1000;
    flex-wrap: wrap;
    & > header > h1 {
      text-align: center;
    }
    & > button {
      position: absolute;
      right: 8px;
      top: 33.33%;
    }
  }
`

const NavBar = ({ ...rest }) => {
  return <StyledNavBar {...rest} />
}

export default NavBar
