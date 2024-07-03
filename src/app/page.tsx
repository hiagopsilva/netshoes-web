/* eslint-disable  */
'use client'

import Header from '@/components/Header'
import {  WrapperProducts } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'
import CardProduct from '@/components/CardProduct'
import { useEffect, useState } from 'react'
import { request } from '@/services/request'
import { productActions } from '@/store/product.store'
import { useDispatch } from 'react-redux'
import WrapperContainer from '@/components/WrapperContainer'
import ContentPage from '@/components/ContentPage'

export default function Home() {
  const [products, setProducts] = useState<ProductType.Root[]>([])
  const [loading, setLoading] = useState(false);

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
      setLoading(true)
      const response = await request.post('/product/favorite', {
        productId,
        isFavorite: !isFavorite,
      })

      if (response) {
        await handleProducts()
      }
    } catch (error) {
      console.log('Error to get products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    handleProducts()
    setLoading(false)
  }, [])

  return (
    <WrapperContainer loading={loading}>

      <Header onClickWishList={handleWishList} />

      <ContentPage>
        <HistoricPage />

        <WrapperProducts>
          {products.map((item: ProductType.Root) => (
            <CardProduct
              key={item._id}
              data={item}
              handleFavorite={handleFavorite}
            />
          ))}
        </WrapperProducts>
      </ContentPage>
    </WrapperContainer>
  )
}
