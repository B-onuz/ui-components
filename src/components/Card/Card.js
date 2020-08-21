import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { background } from 'styled-system'

const StyledCard = styled.div`
  color: ${({ theme, color }) => (theme.colors[color] ? theme.colors[color] : color)};
  width: 100%;
  max-width: 192px;
  min-height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 3px 6px #00000029;
  border: 3px solid;
  border-radius: 12px;
  padding: 20px 32px;
`

const StyledTitle = styled.span`
  margin: 0;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme, textColor }) => (theme.colors[textColor] ? theme.colors[textColor] : textColor)};
  opacity: ${({ cancel }) => (cancel ? '60%' : 1)};
  box-shadow: none;
  margin-bottom: 8px;
`

const StyledInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme, iconColor }) => (theme.colors[iconColor] ? theme.colors[iconColor] : iconColor)};
  box-shadow: none;
  margin-bottom: 8px;
  .icon {
    font-size: 40px;
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

const StyledIcon = styled.img`
  max-width: 50px;
  padding: 4px;
  background-color: ${({ theme, imgBackground }) => (theme.colors[imgBackground] ? theme.colors[imgBackground] : imgBackground)};
  margin-right: 24px;
`

const StyledHelper = styled.small`
  color: ${({ theme, disclaimerColor }) => (theme.colors[disclaimerColor] ? theme.colors[disclaimerColor] : disclaimerColor)};
`

const Card = ({
  title,
  count,
  icon,
  customIcon,
  customIconAlt,
  imgBackground,
  cancel,
  counterColor,
  iconColor,
  textColor,
  disclaimer,
  disclaimerColor,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      <StyledTitle textColor={textColor} cancel={cancel}>
        {title}
      </StyledTitle>
      <StyledInfo iconColor={iconColor}>
        {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        {customIcon && <StyledIcon src={customIcon} alt={customIconAlt} imgBackground={imgBackground} />}
        <Counter counterColor={counterColor}>{count}</Counter>
      </StyledInfo>
      <StyledHelper disclaimerColor={disclaimerColor}>{disclaimer}</StyledHelper>
    </StyledCard>
  )
}

Card.defaultProps = {
  textColor: 'black',
  disclaimerColor: 'black',
}

export default Card
