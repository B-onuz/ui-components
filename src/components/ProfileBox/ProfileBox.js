import React from 'react'
import styled from 'styled-components'

import { color } from 'styled-system'
import Button from '../Button'
import Typography from '../Typography'

const StyledProfileBox = styled.div`
  ${color}
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
  }
`

const BnzBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
  }
`

const StyledButton = styled(Button)`
  font-weight: bold;
  font-size: 20px;
  color: #000;
  text-decoration: none !important;
  :hover {
    color: #ef4d5a;
  }
`

const ProfileIcon = styled.img`
  height: ${({ iconHeight }) => (iconHeight ? iconHeight : '100%')};
  margin-right: 7px;
  @media only screen and (max-width: 500px) {
    max-height: 20px;
    margin-right: 0;
    margin-bottom: 7px;
  }
`

const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ProfileBox = ({ children, userName, balanceValue, src, iconHeight, bnzOnClick, userOnClick, ...rest }) => {
  return (
    <StyledProfileBox {...rest}>
      {!!userName && (
        <Typography color="gray" m={0} mr={2} onClick={userOnClick}>
          {userName} |
        </Typography>
      )}
      <BnzBox onClick={bnzOnClick}>
        <ProfileIcon alt="bnz_icon" iconHeight={iconHeight} src={src} />
        <TextBox>
          <StyledButton linkButton p={0}>{`${balanceValue} BNZ`}</StyledButton>
        </TextBox>
      </BnzBox>
    </StyledProfileBox>
  )
}

export default ProfileBox
