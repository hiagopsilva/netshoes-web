import React, { useState } from 'react'
import {
  Container,
  HeaderImage,
  ImageProduct,
  Content,
  Title,
  WrapperStars,
  WrapperPrices,
  OldPrice,
  NewPrice,
} from './styles'
import StarRating from '../StarRating'
import Favorite from '../Favorite'

const CardProduct: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <Container>
      <HeaderImage>
        <ImageProduct
          src="https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/28/NQQ-4378-028/NQQ-4378-028_zoom1.jpg?ts=1697561389&ims=544x"
          alt="Meia Olympikus"
        />
        <Favorite isFavorite={isFavorite} handleFavorite={handleFavorite} />
      </HeaderImage>

      <Content>
        <Title>Tênis Adidas Breaknet Masculino</Title>

        <WrapperStars>
          <StarRating value={2.5} />
        </WrapperStars>

        <WrapperPrices>
          <OldPrice>R$ 200,00</OldPrice>
          <NewPrice>R$ 150,00</NewPrice>
        </WrapperPrices>
      </Content>
    </Container>
  )
}

export default CardProduct
