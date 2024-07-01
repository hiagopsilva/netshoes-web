'use client'

import Header from '@/components/Header'
import React from 'react'
import { Container, Content } from './styles'
import { useRouter } from 'next/navigation'
import HistoricPage from '@/components/HistoricPage/page'

export default function wishList() {
  const router = useRouter()

  const goBack = () => {
    router.push('/wishList')
  }

  return (
    <Container>
      <Header goBack={goBack}></Header>

      <Content>
        <HistoricPage />
        <h1>Hello Netshoes</h1>
      </Content>
    </Container>
  )
}
