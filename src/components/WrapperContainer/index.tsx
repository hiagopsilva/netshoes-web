import React from 'react'
import Loading from '../Loading'

import { Container } from './styles'

type Props = {
  loading: boolean
  children: React.ReactNode
}
const WrapperContainer: React.FC<Props> = ({ loading, children }) => {
  return (
    <Container>
      {loading && <Loading />}
      {children}
    </Container>
  )
}

export default WrapperContainer
