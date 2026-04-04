import Hero from '@/components/Hero'
import FeaturesGrid from '@/components/FeaturesGrid'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'

export default function Home() {
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

