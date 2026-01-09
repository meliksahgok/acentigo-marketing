import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AcentiGo - Profesyonel Acente Tur Satış Sistemi',
  description: 'Tur yönetimi, rezervasyon takibi, ödeme entegrasyonu ve muhasebe sistemi. Acenteniz için kapsamlı tur satış çözümü. Modern, güvenli ve kullanıcı dostu.',
  keywords: 'tur satış sistemi, acente yönetim sistemi, tur rezervasyon, turizm yazılımı',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

