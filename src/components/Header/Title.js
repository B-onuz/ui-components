import styled from 'styled-components'
import { color, space, typography, compose } from 'styled-system'

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  ${compose(color, space, typography)}
`

Title.defaultProps = {
  color: 'darkRed',
}

export default Title
