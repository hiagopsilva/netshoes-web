'use client'

import Header from '@/components/Header'
import { Container, Content, WrapperProducts } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'
import CardProduct from '@/components/CardProduct'
import { useEffect, useState } from 'react'
import { request } from '@/services/request'

export default function Home() {
  const [products, setProducts] = useState([])
  const router = useRouter()

  const handleWishList = () => {
    router.push('/wishList')
  }

  const handleProducts = async () => {
    try {
      const response = await request.get('/product')

      if (response) {
        setProducts(response.data)
      }
    } catch (error) {
      console.log('Error to get products ')
    }
  }

  useEffect(() => {
    handleProducts()
  }, [])

  return (
    <Container>
      <Header onClickWishList={handleWishList} />

      <Content>
        <HistoricPage />

        <WrapperProducts>
          {products.map((item) => (
            <CardProduct key={item} data={item} />
          ))}
        </WrapperProducts>
      </Content>
    </Container>
  )
}
