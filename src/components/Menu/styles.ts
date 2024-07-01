import styled from 'styled-components'

import { FaUserCircle } from 'react-icons/fa'
import { pxToRem } from '@/styles'
import { Typography } from '@mui/material'

export const Container = styled.button`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  border: none;
  border-radius: 50%;
  background-color: transparent;
`

export const UserIcon = styled(FaUserCircle).attrs({
  size: 24,
  color: '#fff',
})``

export const Text = styled(Typography).attrs({
  sx: {
    p: 2,
  },
})`
  cursor: pointer;
`
