import type { Metadata } from 'next'

import '@styles/globals.css'
import CartProvider from '@components/Providers'
import CartModal from '@components/CartModal'


export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Best Ethiopian Food.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <CartProvider>
            <CartModal />
            {children}
          </CartProvider>
        </main>
      </body>
    </html>
  )
}
