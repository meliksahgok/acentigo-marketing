import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim - Acentigo',
  description: 'Acentigo ile iletişime geçin. Demo talep edin veya sorularınızı bize iletin.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
