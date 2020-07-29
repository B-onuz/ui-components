import React from 'react'
import styled from 'styled-components'
import { space, compose, layout, margin } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from './variants'

const StyledCard = styled.div`
  ${compose(space, layout)}
  width: 25%;
  border: 3px solid;
  border-radius: 12px;
  padding: 24px 24px 32px;
  ${color}
`

const StyledTitle = styled.p`
  margin: 0 0 8px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  padding: 0px 0px 24px;
  display: flex;
  justify-content: center;
`

const StyledMessage = styled.p`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
`

const StyledInfo = styled.div`
  display: flex;
  margin-left: 32px;
`

const Card = ({ children, title, count, icon, cancel, ...rest }) => {
  return (
    <StyledCard {...rest}>
      {!cancel ? <StyledTitle>{title}</StyledTitle> : <StyledTitle style={{ opacity: '60%' }}>{title}</StyledTitle>}
      <StyledInfo>
        <FontAwesomeIcon style={{ fontSize: '50px', marginRight: '24px' }} icon={icon}></FontAwesomeIcon>
        <StyledMessage>{count}</StyledMessage>
      </StyledInfo>
    </StyledCard>
  )
}

export default Card
