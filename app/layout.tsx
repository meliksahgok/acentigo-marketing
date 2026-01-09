import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AcentiGo - Acente Tur Satış Sistemi',
  description: 'Profesyonel tur yönetimi, rezervasyon takibi, ödeme entegrasyonu ve muhasebe sistemi. Acenteniz için kapsamlı tur satış çözümü.',
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

