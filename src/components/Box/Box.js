import React from 'react'
import styled from 'styled-components'
import { space, layout, compose } from 'styled-system'

const StyledBox = styled.div`
  ${compose(space, layout)}
  box-shadow: 0px 3px 6px #2c282846;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 10px;
  border-radius: 10px;
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
`

const Box = ({ display, justifyContent, flexDirection, alignItems, ...rest }) => {
  return <StyledBox display={display} justifyContent={justifyContent} flexDirection={flexDirection} alignItems={alignItems} {...rest} />
}

export default Box
