'use client'

import { Inter } from 'next/font/google'

import { GlobalStyles, theme } from '@/styles'

import { ThemeProvider } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
        <GlobalStyles />
      </html>
    </ThemeProvider>
  )
}
