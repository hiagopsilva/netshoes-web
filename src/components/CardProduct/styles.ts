import Image from 'next/image'
import styled from 'styled-components'

import { CiHeart } from 'react-icons/ci'
import { getTheme, pxToRem } from '@/styles'

const baseWhite = getTheme('baseWhite')
const shadowCard = getTheme('shadowCard')
const tertiary = getTheme('tertiary')
const info = getTheme('info')
const primary = getTheme('primary')

export const Container = styled.div`
  width: ${pxToRem(280)};

  margin: 0 1% ${pxToRem(24)};

  box-shadow: 4px 4px 8px ${shadowCard};
`

export const HeaderImage = styled.div`
  width: ${pxToRem(280)};

  position: relative;
`

export const ImageProduct = styled(Image).attrs({
  width: 280,
  height: 280,
})``

export const FavoriteIcon = styled(CiHeart).attrs((props) => ({
  size: 30,
  color: baseWhite(props),
}))`
  background-color: red;
  border-radius: 50%;

  position: absolute;
  right: ${pxToRem(8)};
  top: ${pxToRem(8)};
`

export const Content = styled.div`
  flex: 1;
  padding: ${pxToRem(12)};
`

export const Title = styled.h2`
  color: ${tertiary};
  font-weight: 500;
  font-size: ${pxToRem(18)};
`

export const WrapperStars = styled.div`
  width: 100%;
  height: ${pxToRem(32)};
  margin-top: ${pxToRem(4)};
`

export const WrapperPrices = styled.div`
  display: flex;
  flex-direction: column;
`

export const OldPrice = styled.span`
  color: ${info};
  font-size: ${pxToRem(14)};
  text-decoration: line-through;
  margin-right: ${pxToRem(8)};
`

export const NewPrice = styled.span`
  color: ${primary};
  font-size: ${pxToRem(20)};
  font-weight: 700;
  margin-top: ${pxToRem(2)};
`
