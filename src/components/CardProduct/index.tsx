import React from 'react'
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
import { formatCurrencyBR, getRandomNumber } from '@/utils/helpers'

type Props = {
  data: ProductType.Root
  handleFavorite: (productId: string, isFavorite: boolean) => void
}

const CardProduct: React.FC<Props> = ({ data, handleFavorite }) => {
  return (
    <Container>
      <HeaderImage>
        <ImageProduct src={data.image} alt={data.name} />
        <Favorite
          isFavorite={data.isFavorite}
          handleFavorite={() => handleFavorite(data._id, data.isFavorite)}
        />
      </HeaderImage>

      <Content>
        <Title>{data.name}</Title>

        <WrapperStars>
          <StarRating value={getRandomNumber()} />
        </WrapperStars>

        <WrapperPrices>
          <OldPrice>{formatCurrencyBR('200.00')}</OldPrice>
          <NewPrice>{formatCurrencyBR('150.00')}</NewPrice>
        </WrapperPrices>
      </Content>
    </Container>
  )
}

export default CardProduct
