// components
import LayoutClient from '@app/layoutClient'

// Utilities
import type { Metadata } from 'next'
import { inter } from '@fonts/index'
import '@app/globals.css'

// Sanity
import { sanityClient } from '@sanityData/client'
import { LAYOUT_QUERY } from '@sanityData/queries'

export const metadata: Metadata = {
  title: 'Tailscale · Best VPN Service for Secure Networks',
  description: 'Securely connect to anything on the internet with Tailscale. Built on WireGuard®️, Tailscale enables you to make finely configurable connections, secured end-to-end according to zero trust principles, between any resources on any infrastructure.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const layoutData = await sanityClient.fetch(LAYOUT_QUERY)

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LayoutClient sanityData={layoutData}>{children}</LayoutClient>
      </body>
    </html>
  )
}
