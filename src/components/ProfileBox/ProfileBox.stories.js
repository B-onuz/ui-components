import React from 'react'
import ProfileBox from './ProfileBox'
import Button from '../Button'
import NavBar from '../NavBar'
import bnz_icon from '../../assets/bnz_icon.png'

export default {
  title: 'ProfileBox',
  component: ProfileBox,
}

export const ProfileBoxExample = () => (
  <>
    <NavBar style={{ marginBottom: 30 }}>
      <ProfileBox src={bnz_icon} userName="John Doe" balanceValue="2.300" />
    </NavBar>
    <NavBar>
      <ProfileBox src={bnz_icon} balanceValue="2.300" />
    </NavBar>
  </>
)