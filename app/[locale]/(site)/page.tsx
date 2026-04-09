import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/Hero'
import FeaturesGrid from '@/components/FeaturesGrid'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'
import { buildPageMetadata } from '@/lib/buildPageMetadata'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, 'home', 'home')
}

export default async function HomePage({ params }: Props) {
  setRequestLocale(params.locale)

  return (
    <main>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <Benefits />
      <CTA />
    </main>
  )
}
