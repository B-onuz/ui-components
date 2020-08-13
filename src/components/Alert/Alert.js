import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import { space, compose, layout } from 'styled-system'
import { color } from './variants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledAlert = styled.div`
  ${compose(space, layout)}
  ${(props) => (props.fullWidth && 'width: 100%') || ''}
  border: 1px solid;
  border-radius: 4px;
  padding: 12px 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: ${({ noShadow }) => (noShadow ? 'none !important' : '')};
  ${color};
`

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  @keyframes slide_bottom {
    from {
      transform: translateY(100%);
      opacity: 0.5;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide_top {
    from {
      transform: translateY(-100%);
      opacity: 0.5;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  ${({ animate }) => `
    animation-name: slide_${animate};
    animation-duration: .3s;
  `}
`

const StyledIcon = styled.div`
  width: ${({ imgSize }) => imgSize};
  height: ${({ imgSize }) => imgSize};
  margin-right: 16px;
  background: ${({ imgBackground }) => `url(${imgBackground}) no-repeat center center`};
  background-color: ${({ bgColor }) => bgColor};
  background-size: cover;
`

const StyledFaIcon = styled.div`
  display: flex;
  margin-right: 16px;
  font-size: ${({ iconSize }) => (iconSize ? iconSize : '32px')};
  justify-content: center;
  align-items: center;
  opacity: 1;
`

const StyledTitle = styled.h3`
  margin: 0 0 8px;
`

const StyledMessage = styled.p`
  margin: 0;
`

const Alert = ({ children, animate, title, message, icon, iconSize, customIcon, imgSize, imgBackground, bgColor, noShadow, type = {}, ...rest }) => {
  return (
    <Wrapper animate={animate}>
      <StyledAlert {...rest} noShadow={noShadow}>
        {icon && (
          <StyledFaIcon iconSize={iconSize}>
            <FontAwesomeIcon icon={icon} />
          </StyledFaIcon>
        )}
        {imgBackground && <StyledIcon imgBackground={imgBackground} imgSize={imgSize} bgColor={bgColor} />}
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledMessage>{message}</StyledMessage>
        </div>
      </StyledAlert>
    </Wrapper>
  )
}

export default Alert
