import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledButton = styled.div`
  ${color}
`

const Button = ({ children, ...rest }) => {
return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button