import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

const StyledContextMenu = styled.div`
  ${color}
  ${space}
  position: relative;
  display: flex;
`

const ContextMenuToogleButton = styled.button`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  box-shadow: 0px 2px 3px #2c282848;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

const ContextDialogMenu = styled.div`
  position: absolute;
  border-radius: 12px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? 1 : -100)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background: #fff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #2c28281c;
  transition: all 300ms;

  ${({ direction }) => {
    if (direction === 'left') {
      return `
      right: calc(100% + 24px);
      top: -50%;
    `
    }
    if (direction === 'right') {
      return `
      left: calc(100% + 24px);
      top: -50%;
    `
    }
    if (direction === 'top') {
      return `
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(100% + 1.5em);
    `
    }
    if (direction === 'bottom') {
      return `
      transform: translateX(-50%);
      left: 50%;
      top: calc(100% + 1.5em);
    `
    }
  }}
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    box-shadow: 1px 2px 2px -1px #2c28281c;
    background: #fff 0% 0%;
    ${({ direction }) => {
      if (direction === 'left') {
        return `
      right: -0.5em;
      top: 1.6em;
      transform: rotateZ(-45deg);
    `
      }
      if (direction === 'right') {
        return `
      left: -0.5em;
      top: 1.6em;
      transform: rotateZ(135deg);
    `
      }
      if (direction === 'top') {
        return `
      top: calc(100% - 0.5em);
      transform: rotateZ(45deg);
      left: 0;
      right: 0;
      margin: auto;
    `
      }
      if (direction === 'bottom') {
        return `
      bottom: calc(100% - 0.5em);
      transform: rotateZ(-135deg);
      left: 0;
      right: 0;
      margin: auto;
    `
      }
    }}
  }
`

const Divider = styled.hr`
  width: 100%;
  margin: 8px 0;
  border: 1px solid #f1f1f3;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.darkGrey};
`

const ContextMenu = ({ children, direction, contextMenuActions, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideAlerter(wrapperRef)

  return (
    <StyledContextMenu ref={wrapperRef} {...rest}>
      <ContextMenuToogleButton onClick={() => setIsOpen(!isOpen)}>
        <Icon icon={faEllipsisH} />
      </ContextMenuToogleButton>
      <ContextDialogMenu isOpen={isOpen} direction={direction}>
        {(contextMenuActions || []).map((action, index) => (
          <>
            <Button linkButton color={'primary'} onClick={() => action.buttonFunction()}>
              {action.text}
            </Button>
            {index + 1 !== contextMenuActions.length ? <Divider /> : null}
          </>
        ))}
      </ContextDialogMenu>
    </StyledContextMenu>
  )
}

ContextMenu.defaultProps = {
  direction: 'left',
}

export default ContextMenu
