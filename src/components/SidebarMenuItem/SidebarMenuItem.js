import React, { memo } from 'react'
import styled from 'styled-components'
const StyledListItem = styled.li`
  margin-top: 2px;
  margin-bottom: 2px;
`

const WrapperIcon = styled.span`
  margin-right: 8px;
`

const MenuItem = memo(({ children, component = 'a', icon, ...rest }) => {
  const MenuLink = styled(component)`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 16px 20px;
    color: #fff;
    display: block;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `

  return (
    <StyledListItem role="none">
      <MenuLink {...rest} role="menuitem" tabindex="-1">
        {!!icon && <WrapperIcon>{icon}</WrapperIcon>} {children}
      </MenuLink>
    </StyledListItem>
  )
})

export default MenuItem
