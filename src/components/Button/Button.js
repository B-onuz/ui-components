import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import { space } from 'styled-system'
import { color, size } from './variants'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import Spinner from '../Spinner'

const StyledButton = styled.button`
  appearance: none;
  font-family: inherit;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: .5rem 1rem;
  border-style: solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${color}
  ${size}
  ${space}
  ${(props) => (props.fullWidth && 'width: 100%;') || ''}
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 8px ${({ theme, color }) => theme.colors[color]};
  }
  
  &:active:not(:disabled) {
    box-shadow: inset 0px 0px 5px #c1c1c1;
  }
  &:active,
  &:hover {
    background-color: ${({ theme, color }) => new Color(theme.colors[color]).saturate(0.1).darken(0.2).string()};
  }
  &:disabled {
    background-color: ${({ theme, color }) => new Color(theme.colors[color]).desaturate(0.4).lighten(0.1).opaquer(0.7).string()};
  }
  ${({ loading }) =>
    !!loading &&
    `
    cursor: progress;
  `}
  
  ${({ outline, theme, color }) =>
    !!outline &&
    `
    background-color: #fff;
    color: ${theme.colors[color]} !important;
    border-color: ${theme.colors[color]};
    &:hover {
      background-color: ${theme.colors[color]};
      color: ${new Color(theme.colors[color]).isDark() ? '#fff' : '#000'} !important;
    }
    `}

  ${({ underline }) =>
    !!underline
      ? `
      text-decoration: underline;
    `
      : `text-decoration: none;`} 

  ${({ linkButton, theme, color }) =>
    !!linkButton
      ? `
    color: ${theme.colors[color]};
    border: none;
    background-color: transparent !important;
    box-shadow: none !important;
    outline: none;
    &:hover {
      text-decoration: underline;
      background-color: transparent;
    }
    `
      : `
     text-decoration: none;
    `} 
`

const Button = ({ children, loading, disabled, ...rest }) => (
  <StyledButton {...rest} disabled={!!disabled || !!loading} loading={loading}>
    {!!loading ? 'carregando...' : children}
  </StyledButton>
)

Button.displayName = 'Button'

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  color: PropTypes.string,
  ...propTypes.space,
}

Button.defaultProps = {
  size: 'medium',
  color: 'default',
  type: 'button',
}

export default Button
