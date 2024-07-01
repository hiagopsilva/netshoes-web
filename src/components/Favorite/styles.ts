import styled from 'styled-components'

import { CiHeart } from 'react-icons/ci'
import { getTheme, pxToRem } from '@/styles'

const baseWhite = getTheme('baseWhite')
const favorite = getTheme('favorite')
const noFavorite = getTheme('noFavorite')

type Props = {
  isFavorite: boolean
}

export const Container = styled.button<Props>`
  background-color: ${(props) =>
    props.isFavorite ? favorite(props) : noFavorite(props)};
  right: ${pxToRem(8)};
  top: ${pxToRem(8)};
  position: absolute;
  border-radius: 50%;
  border: none;

  width: ${pxToRem(30)};
  height: ${pxToRem(30)};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const FavoriteIcon = styled(CiHeart).attrs((props) => ({
  size: 26,
  color: baseWhite(props),
}))``
