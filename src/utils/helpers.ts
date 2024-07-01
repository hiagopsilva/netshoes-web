export const handleCurrentPage = (pathName: string) => {
  const pathList = ['Home']

  if (pathName === '/wishList') {
    pathList.push('Wishlist')
  }

  return pathList
}
