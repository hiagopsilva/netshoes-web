'use client'

import { Inter } from 'next/font/google'

import { GlobalStyles, theme } from '@/styles'

import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { productStore } from '@/store/product.store'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider store={productStore}>
      <ThemeProvider theme={theme}>
        <html lang="pt-BR">
          <head>
            <meta name="theme-color" content="#5c2c84" />
          </head>
          <body className={inter.className}>{children}</body>

          <GlobalStyles />
        </html>
      </ThemeProvider>
    </Provider>
  )
}
