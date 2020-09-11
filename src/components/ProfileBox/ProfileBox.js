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
  align-items: flex-end;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
  }
`

const ProfileIcon = styled.img`
  height: 100%;
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
`

const ProfileBox = ({ children, userName, balanceValue, src, ...rest }) => {
  return (
    <StyledProfileBox {...rest}>
      <ProfileIcon alt="bnz_icon" src={src} />
      <TextBox>
        {!!userName && (
          <Typography color="black" m={0} mr={2}>
            {userName}
          </Typography>
        )}
        <Button linkButton color="primary" p={0}>{`${balanceValue} BNZ`}</Button>
      </TextBox>
    </StyledProfileBox>
  )
}

export default ProfileBox
