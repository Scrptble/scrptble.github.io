import './globals.css'
import '@shopify/polaris/build/esm/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scrptble - Modern Shopify App Development Agency',
  description: 'Modern Shopify app development services. We build powerful, scalable apps using Remix, Gadget, and cutting-edge technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 