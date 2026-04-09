import { getTranslations } from 'next-intl/server'

export default async function HowItWorks() {
  const t = await getTranslations('howItWorks')
  const steps = t.raw('steps') as { n: string; title: string; description: string }[]

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('heading')} <span className="text-primary">{t('headingAccent')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t('sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:bg-zinc-800/80 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
