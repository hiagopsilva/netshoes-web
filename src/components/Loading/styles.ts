import styled from 'styled-components'

import ReactLoading from 'react-loading'
import { getTheme } from '@/styles'

const shadowWrapperLoading = getTheme('shadowWrapperLoading')
const primary = getTheme('primary')

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${shadowWrapperLoading};

  width: 100%;
  height: 100%;

  position: absolute;
`

export const ReactLoadingStyled = styled(ReactLoading).attrs((props) => ({
  height: 40,
  width: 40,
  color: primary(props),
  type: 'spin',
}))``
