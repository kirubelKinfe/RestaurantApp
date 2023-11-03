import type { Metadata } from 'next'

import '@styles/globals.css'
import { Navbar } from '@components'


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
          {children}
        </main>
      </body>
    </html>
  )
}
