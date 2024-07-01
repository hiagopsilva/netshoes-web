import React from 'react'
import {
  Container,
  ContentRight,
  Logo,
  TextWishList,
  UserIcon,
  WishListIcon,
  WrapperWishList,
} from './styles'

type Props = {
  onClickWishList: () => void
}

const Header: React.FC<Props> = ({ onClickWishList }) => {
  return (
    <Container>
      <Logo />

      <ContentRight>
        <WrapperWishList onClick={onClickWishList}>
          <WishListIcon />
          <TextWishList>Wishlist</TextWishList>
        </WrapperWishList>

        <UserIcon />
      </ContentRight>
    </Container>
  )
}

export default Header
