import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import { space, compose, layout } from 'styled-system'
import { color } from './variants'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

const StyledAlert = styled.div`
  ${compose(space, layout)}
  ${(props) => (props.fullWidth && 'width: 100%') || ''}
  border: 1px solid;
  border-radius: 4px;
  padding: 16px 24px 24px;
  ${color};
`

const StyledTitle = styled.h3`
  margin: 0 0 8px;
`

const StyledMessage = styled.p`
  margin: 0;
`

const Alert = ({ children, title, message, type = {}, ...rest }) => {
  return (
    <StyledAlert {...rest}>
      <StyledTitle>{title}</StyledTitle>
      <StyledMessage>{message}</StyledMessage>
    </StyledAlert>
  )
}

export default Alert
