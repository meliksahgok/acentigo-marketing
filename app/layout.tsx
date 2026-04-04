import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Acentigo - Profesyonel Acente Tur Satış Sistemi',
  description:
    'Tur yönetimi, rezervasyon takibi, ödeme entegrasyonu ve muhasebe sistemi. Acenteniz için kapsamlı tur satış çözümü. Modern, güvenli ve kullanıcı dostu.',
  keywords: 'tur satış sistemi, acente yönetim sistemi, tur rezervasyon, turizm yazılımı',
  icons: {
    icon: '/images/acentigo-favicon.png',
    shortcut: '/images/acentigo-favicon.png',
    apple: '/images/acentigo-favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
