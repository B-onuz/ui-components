import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const Dialog = styled.div`
  position: absolute;
  border-radius: 12px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? 1 : -100)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  background: #fff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #2c28281c;

  ${({ direction, top, right, left, bottom }) => {
    if (direction === 'left') {
      return `
      top: ${top};
      left: ${left};
      transform: translateX(calc(-100% - 32px * 2  - 5px));
    `
    }
    if (direction === 'right') {
      return `
      top: ${top};
      left: ${left};
    `
    }
    if (direction === 'top') {
      return `
      top: ${top};
      left: ${left};
      transform: translateX(calc(-50% - 32px / 2)) translateY(calc(-100% - 24px));
    `
    }
    if (direction === 'bottom') {
      return `
      top: ${top};
      left: ${left};
      transform: translateX(calc(-50% - 32px / 2));
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

  @media only screen and (max-width: 500px) {
    position: fixed;
    margin: 0;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;

    &::after {
      display: none;
    }
  }
`

const useRootDialog = () => {
  const [$rootDialog, setRootDialog] = useState()
  const IdName = 'contextMenu-root'

  useEffect(() => {
    const rootModal = document.getElementById(IdName)
    if (rootModal) {
      setRootDialog(rootModal)
    } else {
      const rootEl = document.createElement('div')
      rootEl.id = IdName
      setRootDialog(rootEl)
      document.body.appendChild(rootEl)
    }
  })

  return { $rootDialog }
}

const Wrapper = styled.div`
  z-index: 99999999999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const ContextMenuDialog = ({ isOpen, buttonRef, onClose, direction, contextFunctions, ...rest }) => {
  const { $rootDialog } = useRootDialog()
  const [positions, setPositions] = useState({ top: 0, right: 0, bottom: 0, left: 0 })
  const $currentButtonRef = (buttonRef || {}).current
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)

  const updatePositions = () => {
    if (!$currentButtonRef) return null
    const offset = $currentButtonRef.getBoundingClientRect()

    if (direction === 'top') {
      setTop(`${offset.top + offset.height - 24}px`)
      setLeft(`${offset.left + offset.width}px`)
    }

    if (direction === 'right') {
      setTop(`${offset.top - offset.height / 2}px`)
      setLeft(`${offset.left + offset.width + 20}px`)
    }

    if (direction === 'left') {
      setTop(`${offset.top - offset.height / 2}px`)
      setLeft(`${offset.left + offset.width + 20}px`)
    }

    if (direction === 'bottom') {
      setTop(`${offset.top + offset.height + 24}px`)
      setLeft(`${offset.left + offset.width}px`)
    }
  }

  useEffect(() => {
    updatePositions()
    window.addEventListener('resize', updatePositions)
    return () => {
      window.removeEventListener('resize', updatePositions)
    }
  })

  if (!$rootDialog) return null

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <Wrapper onClick={onClose}>
      <Dialog direction={direction} isOpen={isOpen} top={top} left={left} {...rest} contextFunctions={contextFunctions} />
    </Wrapper>,
    $rootDialog
  )
}

export default ContextMenuDialog
