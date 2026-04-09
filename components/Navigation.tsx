'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default function Navigation() {
  const t = useTranslations('nav')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/features', label: t('features') },
    { href: '/technology', label: t('technology') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ] as const

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/acentigo-white-v2.png"
                alt="Acentigo"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <LocaleSwitcher />
            <Link
              href="/contact"
              className="relative overflow-hidden bg-primary px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(229,61,21,0.4)] group"
            >
              <span className="relative z-10">{t('demoCta')}</span>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LocaleSwitcher />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/5"
              aria-label={t('menu')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-primary text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
            >
              {t('demoCta')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
