import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledCard = styled.div`
  color: ${({ theme, color }) => (theme.colors[color] ? theme.colors[color] : color)};
  width: 100%;
  max-width: 190px;
  min-height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 3px 6px #00000029;
  border: 3px solid;
  border-radius: 12px;
  padding: 24px 32px;
`

const StyledTitle = styled.span`
  margin: 0;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme, textColor }) => (theme.colors[textColor] ? theme.colors[textColor] : textColor)};
  opacity: ${({ cancel }) => (cancel ? '60%' : 1)};
  box-shadow: none;
`

const StyledInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme, iconColor }) => (theme.colors[iconColor] ? theme.colors[iconColor] : iconColor)};
  box-shadow: none;
  .StyledIcon {
    font-size: 50px;
    margin-right: 24px;
  }
`

const Counter = styled.span`
  margin: 0;
  color: ${({ theme, counterColor }) => (theme.colors[counterColor] ? theme.colors[counterColor] : counterColor)};
  font-size: 40px;
  font-weight: 600;
  box-shadow: none;
`

const Card = ({ title, count, icon, cancel, counterColor, iconColor, textColor, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <StyledTitle textColor={textColor} cancel={cancel}>
        {title}
      </StyledTitle>
      <StyledInfo iconColor={iconColor}>
        {icon && <FontAwesomeIcon className="StyledIcon" icon={icon}></FontAwesomeIcon>}
        <Counter counterColor={counterColor}>{count}</Counter>
      </StyledInfo>
    </StyledCard>
  )
}

Card.defaultProps = {
  textColor: 'black',
}

export default Card
