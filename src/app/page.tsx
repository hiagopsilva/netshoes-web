'use client'

import Header from '@/components/Header'
import { Container, Content } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'
import CardProduct from '@/components/CardProduct'

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

        {/* <h1>Hello Netshoes</h1> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',

            padding: '0 24px',
            marginTop: '24px',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <CardProduct key={item} />
          ))}
        </div>
      </Content>
    </Container>
  )
}
