import styled from 'styled-components'
import Color from 'color'
import { space } from 'styled-system'
import { color, size } from './variants'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

const Button = styled.button`
  appearance: none;
  font-family: inherit;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: .5rem 1rem;
  border-style: solid;
  color: #000;
  ${color}
  ${size}
  ${space}
  ${(props) => (props.fullWidth && 'width: 100%;') || ''}
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 8px ${({ theme, color }) => theme.colors[color]};
  }
  &:hover {
    background-color: ${({ theme, color }) => new Color(theme.colors[color]).lighten(0.2).string()};
  }
  &:active {
    background-color: ${({ theme, color }) => new Color(theme.colors[color]).darken(0.2).string()};
  }
`

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
