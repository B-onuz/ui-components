import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledHamburguerButton = styled.button`
  width: 35px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #333333de, #333333de);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  outline: none;
  cursor: pointer;
  transform: scale(0.6);
  transition: background-size 0.3s 0.2s ease;
  &:before,
  &:after {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #333333de;
    content: '';
    transition: transform 0.3s ease;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  &:before,
  &:after {
    transition: 0.3s ease;
  }
  ${(props) =>
    props.isOpen &&
    `
      // background-size: 0 0;
      &:before,
      &:after {
        transition-delay: 0.3s;
      }
      // &:before {
      //   transform: translateY(200%) rotate(45deg);
      // }
      // &:after {
      //   transform: translateY(-200%) rotate(-45deg);
      // }
    `}
`

const HamburguerButton = ({ isOpen = false, children, ...rest }) => {
  return <StyledHamburguerButton isOpen={isOpen} {...rest} />
}

export default HamburguerButton
