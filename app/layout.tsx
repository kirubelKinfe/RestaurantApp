import type { Metadata } from 'next'

import '@styles/globals.css'
import CartProvider from '@components/Providers'
import CartModal from '@components/CartModal'


export const metadata: Metadata = {
  title: 'Mulu Ethiopian Restaurant',
  description: 'Ethiopian restaurant of Malden ,MA favorite for both vegans & meat lovers with its authentic Ethiopian food all are food are prepared fresh vegetables and fresh meat.the frendliy staff and warm decor makes Ethiopian restaurant the perfect place to relax with family and friends.',
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
