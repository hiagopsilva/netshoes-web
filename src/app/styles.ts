import { pxToRem } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  flex-direction: column;
`

export const WrapperHistoricPage = styled.div``

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 ${pxToRem(24)};
  margin-top: ${pxToRem(24)};
`
