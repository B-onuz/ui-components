import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledLabel = styled.label`
  color: #555;
  font-size: 0.9em;
  font-weight: 600;
  ${({ required }) =>
    (!!required &&
      `
    &::before {
      content: '* ';
    }
  `) ||
    ''}
`

const Label = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}

export default Label
