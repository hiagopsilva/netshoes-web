'use client'

import Header from '@/components/Header'
import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Header onClickWishList={() => {}} />
      <h1>Hello Netshoes</h1>
    </Container>
  )
}
