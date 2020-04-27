import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import Title from './Title'
import SubTitle from './SubTitle'

const StyledHeader = styled.header`
  ${color}
  flex: 1;
  font-family: inherit;
`

const Header = ({ children, title, subTitle, textAlign = 'center', ...rest }) => {
  return (
    <StyledHeader {...rest}>
      {!!title && <Title textAlign={textAlign}>{title}</Title>}
      {!!subTitle && (
        <SubTitle textAlign={textAlign} mt={1}>
          {subTitle}
        </SubTitle>
      )}
    </StyledHeader>
  )
}

export default Header
