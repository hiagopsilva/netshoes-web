import React from 'react'

import { Container, FavoriteIcon } from './styles'

type Props = {
  isFavorite: boolean
  handleFavorite: () => void
}

const Favorite: React.FC<Props> = ({ isFavorite, handleFavorite }) => {
  return (
    <Container isFavorite={isFavorite} onClick={handleFavorite}>
      <FavoriteIcon />
    </Container>
  )
}

export default Favorite
