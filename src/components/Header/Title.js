import styled from 'styled-components'
import { color, space, typography, compose } from 'styled-system'

const Title = styled.h1`
  margin: 0;
  ${compose(color, typography, space)}
  font-size: 1em !important;
`

Title.defaultProps = {
  color: 'darkRed',
}

export default Title
