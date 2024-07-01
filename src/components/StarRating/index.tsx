import * as React from 'react'
import Rating from '@mui/material/Rating'

type Props = {
  value: number
}
const StarRating: React.FC<Props> = ({ value }) => {
  return <Rating name="read-only" value={value} readOnly />
}

export default StarRating
