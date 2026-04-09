'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactForm() {
  const t = useTranslations('contactPage')
  const tf = useTranslations('contactPage.fields')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setErrorMessage(data.error ?? t('errorGeneric'))
        setStatus('error')
        return
      }
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch {
      setErrorMessage(t('errorNetwork'))
      setStatus('error')
    }
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-8">{t('formTitle')}</h2>

      {status === 'success' ? (
        <div className="rounded-xl border border-green-500/30 bg-green-500/10 text-green-200 px-4 py-4 mb-6">{t('success')}</div>
      ) : null}
      {status === 'error' && errorMessage ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-4 mb-6">{errorMessage}</div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              {tf('name')} *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder={tf('namePh')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              {tf('email')} *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder={tf('emailPh')}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
              {tf('phone')}
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder={tf('phonePh')}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
              {tf('company')}
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder={tf('companyPh')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            {tf('message')} *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
            placeholder={tf('messagePh')}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(229,61,21,0.4)] transition-all duration-300 disabled:opacity-50"
        >
          {status === 'loading' ? t('submitting') : t('submit')}
        </button>
      </form>
    </div>
  )
}
