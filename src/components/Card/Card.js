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
  flex-direction: ${({ clickableCard }) => (!!clickableCard ? 'row' : 'column')};
  justify-content: space-between;
  position: relative;
  box-shadow: 3px 3px 6px #00000029;
  border: 3px solid;
  border-radius: 12px;
  padding: ${({ clickableCard }) => (!!clickableCard ? 0 : '20px 32px')};
  overflow: ${({ clickableCard }) => (!!clickableCard ? 'visible' : 'hidden')};
  @media only screen and (max-width: 500px) {
    max-width: none;
    min-height: 84px;
    padding: ${({ clickableCard }) => (!!clickableCard ? 0 : '8px 12px')};
    justify-content: center;
    text-align: center;
  }

  .icon {
    margin-right: ${({ clickableCard }) => (!!clickableCard ? 0 : '24px')};
    font-size: 40px;
    @media only screen and (max-width: 500px) {
      font-size: 30px;
      margin: 0;
      margin-bottom: 6px;
    }
  }
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
  @media only screen and (max-width: 500px) {
    font-size: 13px;
  }
`

const StyledInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme, iconColor }) => (theme.colors[iconColor] ? theme.colors[iconColor] : iconColor)};
  box-shadow: none;
  margin-bottom: 8px;
  font-size: 40px;
  @media only screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 6px;
    flex-direction: column;
    align-items: center;
  }
`

const Counter = styled.span`
  margin: 0;
  color: ${({ theme, counterColor }) => (theme.colors[counterColor] ? theme.colors[counterColor] : counterColor)};
  font-weight: 600;
  box-shadow: none;
`

const StyledIcon = styled.img`
  max-width: 50px;
  padding: 4px;
  background-color: ${({ theme, imgBackground }) => (theme.colors[imgBackground] ? theme.colors[imgBackground] : imgBackground)};
  margin-right: ${({ clickableCard }) => (!!clickableCard ? 0 : '24px')};
  @media only screen and (max-width: 500px) {
    margin-right: 0;
  }
`

const StyledHelper = styled.small`
  display: ${({ disclaimer }) => (!!disclaimer ? 'inline-block' : 'none')};
  color: ${({ theme, disclaimerColor }) => (theme.colors[disclaimerColor] ? theme.colors[disclaimerColor] : disclaimerColor)};
  @media only screen and (max-width: 500px) {
    margin-top: 8px;
  }
`

const ClickableCard = styled.button`
  width: 100%;
  display: flex;
  flex-direction: ${({ reverseOrder }) => (!!reverseOrder ? 'column-reverse' : 'column')};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, cardBackground }) => (theme.colors[cardBackground] ? theme.colors[cardBackground] : cardBackground)};
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    box-shadow: 0px 0px 12px 4px ${({ theme, cardBackground }) => theme.colors[cardBackground]};
  }
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
  clickableCard,
  cardBackground,
  reverseOrder,
  ...rest
}) => {
  return (
    <StyledCard {...rest} clickableCard={clickableCard}>
      {!!clickableCard ? (
        <ClickableCard cardBackground={cardBackground} reverseOrder={reverseOrder}>
          <StyledTitle textColor={textColor} cancel={cancel}>
            {title}
          </StyledTitle>
          {icon && <FontAwesomeIcon icon={icon} className="icon" />}
          {customIcon && <StyledIcon src={customIcon} alt={customIconAlt} imgBackground={imgBackground} clickableCard={clickableCard} />}
        </ClickableCard>
      ) : (
        <>
          <StyledTitle textColor={textColor} cancel={cancel}>
            {title}
          </StyledTitle>
          <StyledInfo iconColor={iconColor}>
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
            {customIcon && <StyledIcon src={customIcon} alt={customIconAlt} imgBackground={imgBackground} clickableCard={clickableCard} />}
            <Counter counterColor={counterColor}>{count}</Counter>
          </StyledInfo>
          <StyledHelper disclaimerColor={disclaimerColor} disclaimer={disclaimer}>
            {disclaimer}
          </StyledHelper>
        </>
      )}
    </StyledCard>
  )
}

Card.defaultProps = {
  textColor: 'black',
  disclaimerColor: 'black',
  clickableCard: false,
  reverseOrder: false,
}

export default Card
