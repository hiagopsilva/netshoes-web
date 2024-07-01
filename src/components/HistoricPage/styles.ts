import { getTheme, pxToRem } from '@/styles'
import styled from 'styled-components'

const info = getTheme('info')

export const Container = styled.div`
  padding-bottom: ${pxToRem(16)};
  border-bottom: 1px solid ${info};
`

export const Bold = styled.span`
  font-weight: bold;
`
