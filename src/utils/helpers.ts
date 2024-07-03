export const handleCurrentPage = (pathName: string) => {
  const pathList = ['Home']

  if (pathName === '/wishList') {
    pathList.push('Wishlist')
  }

  return pathList
}

export const formatCurrencyBR = (value: string) => {
  let price = 0

  if (typeof value !== 'number') {
    price = parseFloat(value)

    if (isNaN(price)) return 'Valor inválido'
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
