import { pxToRem } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;

  flex-direction: column;
  padding: ${pxToRem(24)} ${pxToRem(64)};
`
