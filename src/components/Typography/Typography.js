import React from 'react'
import styled from 'styled-components'
import { typography, color, space, compose } from 'styled-system'

const StyledTypography = styled.p`
  ${compose(typography, color, space)}
`

const Typography = ({ children, ...rest }) => {
  return <StyledTypography {...rest} children={children} />
}

export default Typography
