import { pxToRem } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;

  flex-direction: column;
  padding: ${pxToRem(24)} ${pxToRem(64)};

  @media (max-width: 768px) {
    padding: ${pxToRem(24)} ${pxToRem(24)};
  }
`

export const WrapperHistoricPage = styled.div``

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 ${pxToRem(24)};
  margin-top: ${pxToRem(24)};
`
