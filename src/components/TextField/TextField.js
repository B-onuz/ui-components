import React from 'react'
import styled from 'styled-components'
import Label from '../Label'
import Input from '../Input'
import { space, layout, compose, flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const StyledTextField = styled.div`
  display: block;
  font-family: inherit;
  ${compose(space, layout)}
  label {
    display: block;
    margin-bottom: 0.4em;
  }
`

const TextField = ({ children, label, placeholder, name, id, value, onChange, required, error, ...rest }) => {
  return (
    <StyledTextField {...rest}>
      <Label htmlFor={id} required={!!required}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        /* controlled props */
        value={value}
        onChange={onChange}
        /* validation props */
        required={!!required}
        aria-required={!!required}
        aria-invalid={!!error}
      />
    </StyledTextField>
  )
}

TextField.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
}

TextField.defaultProps = {
  required: false,
  error: false,
}

export default TextField
