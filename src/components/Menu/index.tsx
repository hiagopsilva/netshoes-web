import React from 'react'
import { Container, Text, UserIcon } from './styles'

import PopoverElement from '@mui/material/Popover'

const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
      return
    }

    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Container onClick={handleClick}>
      <UserIcon />

      <PopoverElement
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Text>Entrar</Text>
        <Text>Minha Conta</Text>
        <Text>Endereços</Text>
        <Text>Minhas Netshoes</Text>
      </PopoverElement>
    </Container>
  )
}

export default Menu
