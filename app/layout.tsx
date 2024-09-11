// components
import LayoutClient from './layoutClient'

// Utilities
import type { Metadata } from 'next'
import { inter } from './fonts'
import './globals.css'

// Sanity
import { client } from '@/sanity/lib/client'
import { LAYOUT_QUERY } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const layoutData = await client.fetch(LAYOUT_QUERY)

  console.log(layoutData)

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LayoutClient sanityData={layoutData}>{children}</LayoutClient>
      </body>
    </html>
  )
}
