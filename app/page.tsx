import Header from '@/components/Header'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}

