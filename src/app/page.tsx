/* eslint-disable  */
'use client'

import Header from '@/components/Header'
import { Container, Content, WrapperProducts } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'
import CardProduct from '@/components/CardProduct'
import { useEffect, useState } from 'react'
import { request } from '@/services/request'
import { productActions } from '@/store/product.store'
import { useDispatch } from 'react-redux'

export default function Home() {
  const [products, setProducts] = useState([])

  const dispatch = useDispatch()

  const router = useRouter()

  const handleWishList = () => {
    router.push('/wishList')
  }

  const handleProducts = async () => {
    try {
      const response = await request.get('/product')

      if (response) {
        setProducts(response.data)
        dispatch(productActions.addListProducts(response.data))
      }
    } catch (error) {
      console.log('Error to get products ')
    }
  }

  const handleFavorite = async (productId: string, isFavorite: boolean) => {
    try {
      const response = await request.post('/product/favorite', {
        productId,
        isFavorite: !isFavorite,
      })

      if (response) {
        await handleProducts()
      }
    } catch (error) {
      console.log('Error to get products')
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
            <CardProduct
              key={item}
              data={item}
              handleFavorite={handleFavorite}
            />
          ))}
        </WrapperProducts>
      </Content>
    </Container>
  )
}
