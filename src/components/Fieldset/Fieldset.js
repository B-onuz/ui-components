import React from 'react'
import styled from 'styled-components'
import { layout, space, compose } from 'styled-system'
import Legend from '../Legend'

const StyledFieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  ${compose(space, layout)}
`

const Fieldset = ({ children, legend, ...rest }) => {
  return (
    <StyledFieldset {...rest}>
      {!!legend && <Legend>{legend}</Legend>}
      {children}
    </StyledFieldset>
  )
}

export default Fieldset
