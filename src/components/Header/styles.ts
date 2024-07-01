import styled from 'styled-components'
import { getTheme, pxToRem } from '@/styles'
import Image from 'next/image'

import { CiHeart } from 'react-icons/ci'

const primary = getTheme('primary')
const baseWhite = getTheme('baseWhite')

export const Container = styled.div`
  background-color: ${primary};

  width: 100%;
  padding: ${pxToRem(4)} ${pxToRem(64)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Image).attrs({
  src: require('../../assets/logo.png'),
  alt: 'Netshoes',
  width: 260,
  height: 80,
})``

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
`

export const WrapperWishList = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-right: ${pxToRem(48)};
`

export const WishListIcon = styled(CiHeart).attrs({
  size: 24,
  color: '#fff',
})`
  margin-right: ${pxToRem(4)};
`

export const TextWishList = styled.div`
  color: ${baseWhite};
  font-size: ${pxToRem(14)};
`
