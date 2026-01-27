'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Anasayfa' },
    { href: '/ozellikler', label: 'Özellikler' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-2'
        : 'bg-transparent border-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/acentigo-white-v2.png"
                alt="Acentigo Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            <Link
              href="/iletisim"
              className="relative overflow-hidden bg-primary px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(229,61,21,0.4)] group"
            >
              <span className="relative z-10">Demo Talep Et</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
            aria-label="Menu"
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

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-4 space-y-2">
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
              href="/iletisim"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-primary text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
            >
              Demo Talep Et
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
