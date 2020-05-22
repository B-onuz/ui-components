import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { layout, space, compose } from 'styled-system'
import Button from '../Button'

const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${compose(layout, space)}
`

const PageItem = styled(Button)`
  position: relative;
  border-radius: 32px;
  min-width: 32px;
  height: 32px;
  padding: 0 0.3em;
  background: none;
  overflow: hidden;
  ${({ theme, color }) => `color: ${theme.colors[color]}`};
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${({ theme, color }) => `background-color: ${theme.colors[color]}`};
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }
  &:active {
    background-color: transparent;
  }
  &:hover,
  &:active {
    background-color: transparent;
    &::before {
      transform: translateY(0);
      z-index: 1;
    }
    color: #fff;
  }
  ${({ theme, color, active }) =>
    !!active &&
    `
    color: #fff;
    background-color: ${theme.colors[color]};
  `};
  & > span {
    position: relative;
    z-index: 2;
  }
`

const Pagination = memo(({ children, color, onChangePage, onNextPage, onPrevPage, total, page, onLazyChangePage, lazyTimeout = 300, ...rest }) => {
  const [lazyKey, setLazyKey] = useState()
  const getRange = (x) => {
    return (x % 5 ? Math.trunc(x / 5) + 1 : x / 5) * 5
  }
  const range = getRange(page)
  const pageItems = [range - 4, range - 3, range - 2, range - 1, range].filter((item) => item <= total)

  useEffect(() => {
    if (!onLazyChangePage) return
    window.clearTimeout(lazyKey)
    setLazyKey(
      setTimeout(() => {
        onLazyChangePage(page)
      }, lazyTimeout)
    )
  }, [page])

  return (
    <StyledPagination {...rest}>
      <PageItem color={color} m={1} onClick={() => onPrevPage()}>
        <span>{'<'}</span>
      </PageItem>
      {[...pageItems].map((item) => {
        return (
          <PageItem key={item} color={color} m={1} active={page === item} onClick={() => onChangePage(item)}>
            <span>{item}</span>
          </PageItem>
        )
      })}
      <PageItem color={color} m={1} onClick={() => onNextPage()}>
        <span>{'>'}</span>
      </PageItem>
    </StyledPagination>
  )
})

export default Pagination
