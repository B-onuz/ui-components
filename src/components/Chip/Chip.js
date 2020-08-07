import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { color } from './variants'

const StyledChip = styled.div`
  ${space}
`

const StyledText = styled.span`
  ${color}
  background: ${({ theme, color }) => `${theme.colors[color]}`};
  padding: 2px 10px;
  border-radius: 25px
`

const Chip = ({ color, text, ...rest }) => {
  return (
    <StyledChip {...rest}>
      <StyledText color={color}>{text}</StyledText>
    </StyledChip>
  )
}

export default Chip
