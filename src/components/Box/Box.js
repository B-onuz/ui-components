import React from 'react'
import styled from 'styled-components'
import { space, layout, compose } from 'styled-system'

const StyledBox = styled.div`
  box-shadow: 0px 3px 6px #2c282846;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 10px;
  border-radius: 10px;
  ${compose(space, layout)}
`

const Box = ({ ...rest }) => {
  return <StyledBox {...rest} />
}

export default Box
