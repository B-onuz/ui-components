import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import { space } from 'styled-system'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Color from 'color'

const StyledBreadCrumb = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme, color }) => `${theme.colors[color]}`};
  ${space}
`

const ActiveRoute = styled.span`
  color: ${({ theme, color }) => `${theme.colors[color]}`};
  padding: 8px 16px;
  font-size: 14px;
`

const IconColor = ({ theme, color }) => {
  const newColor = theme.colors[color]
  const darkColor = new Color(newColor)
  const navIconColor = darkColor.darken(0.5).toString()
  return `
    color: ${navIconColor}
  `
}

const Icon = styled(FontAwesomeIcon)`
  ${IconColor}
`

const BreadCrumb = ({ children, navigationLinks, color, ...rest }) => {
  console.log(Button)
  return (
    <StyledBreadCrumb {...rest}>
      {(navigationLinks || []).map((item, index) =>
        index !== navigationLinks.length - 1 ? (
          <React.Fragment key={index}>
            <Button linkButton size="small" color={color} onClick={() => item.action()}>
              {item.label}
            </Button>
            <Icon icon={faAngleRight} color={color} />
          </React.Fragment>
        ) : (
          <ActiveRoute key={index} color={'black'}>
            {item.label}
          </ActiveRoute>
        )
      )}
    </StyledBreadCrumb>
  )
}

BreadCrumb.defaultProps = {
  color: 'primary',
}

export default BreadCrumb
