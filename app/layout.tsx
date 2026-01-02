import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AcentiGo - Turizm Yönetim Platformu',
  description: 'Modern, güvenli ve ölçeklenebilir SaaS çözümü ile turizm işletmenizi dijitalleştirin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}

