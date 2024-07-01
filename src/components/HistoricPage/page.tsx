import React, { useState } from 'react'
import { Bold, Container } from './styles'
import { usePathname } from 'next/navigation'
import { handleCurrentPage } from '@/utils/helpers'

const HistoricPage: React.FC = () => {
  const pathName = usePathname()

  const [pathnameList] = useState(handleCurrentPage(pathName))

  return (
    <Container>
      {pathnameList.map((item: string) => (
        <span key={item}>
          {pathnameList[pathnameList.length - 1] === item ? (
            <>
              {pathnameList.length > 1 && ' / '}
              <Bold>{item}</Bold>
            </>
          ) : (
            <>{item}</>
          )}
        </span>
      ))}
    </Container>
  )
}

export default HistoricPage
