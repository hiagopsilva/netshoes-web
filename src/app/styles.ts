import { getTheme } from '@/styles'
import styled from 'styled-components'

const primary = getTheme('primary')

export const Container = styled.div`
  background-color: ${primary};
`
