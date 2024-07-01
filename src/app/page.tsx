'use client'

import Header from '@/components/Header'
import { Container, Content } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'

export default function Home() {
  const router = useRouter()

  const handleWishList = () => {
    router.push('/wishList')
  }

  return (
    <Container>
      <Header onClickWishList={handleWishList} />

      <Content>
        <HistoricPage />

        <h1>Hello Netshoes</h1>
      </Content>
    </Container>
  )
}
