import React from 'react'
import {
  ButtonLogo,
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
      <ButtonLogo onClick={goBack}>
        <Logo />
      </ButtonLogo>

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
