import React from 'react'
import {
  Container,
  ContentRight,
  Logo,
  TextWishList,
  WishListIcon,
  WrapperWishList,
} from './styles'
import Menu from '../Menu'

type Props = {
  onClickWishList?: () => void
  goBack?: () => void
}

const Header: React.FC<Props> = ({ onClickWishList, goBack }) => {
  return (
    <Container>
      <Logo onClick={goBack} />

      <ContentRight>
        <WrapperWishList onClick={onClickWishList}>
          <WishListIcon />
          <TextWishList>Wishlist</TextWishList>
        </WrapperWishList>

        <Menu />
      </ContentRight>
    </Container>
  )
}

export default Header
