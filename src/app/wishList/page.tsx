'use client'

import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import { Content } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'
import { WrapperProducts } from '../styles'
import { request } from '@/services/request'
import CardProduct from '@/components/CardProduct'
import { useSelector } from 'react-redux'
import WrapperContainer from '@/components/WrapperContainer'

export default function wishList() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const goBack = () => {
    router.push('/wishList')
  }

  const handleProducts = async () => {
    try {
      const response = await request.get('/product/')

      if (response) {
        setProducts(response.data)
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

  const values = useSelector((state: { list: [] }) => state.list)

  useEffect(() => {
    setLoading(true)
    setProducts(
      values.filter((product: { isFavorite: boolean }) => product.isFavorite),
    )
    setLoading(false)
  }, [values])

  return (
    <WrapperContainer loading={loading}>
      <Header goBack={goBack}></Header>

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
    </WrapperContainer>
  )
}
