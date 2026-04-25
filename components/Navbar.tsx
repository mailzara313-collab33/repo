'use client'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-gold/60 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 0L14 7L7 14L0 7L7 0Z" fill="#c8992a" />
            </svg>
          </div>
          <div>
            <span className="text-white font-semibold text-sm tracking-wide">SEFIR</span>
            <span className="text-gold text-xs font-medium ml-1.5 tracking-widest uppercase">
              Yapı & Proje
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/55 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#iletisim" className="btn-primary text-xs px-5 py-2.5">
            Teklif Al
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-px w-4 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-dark-800/95 backdrop-blur-xl border-b border-white/5`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-base font-medium tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#iletisim" className="btn-primary mt-2 text-sm justify-center" onClick={() => setMenuOpen(false)}>
            Teklif Al
          </a>
        </nav>
      </div>
    </header>
  )
}
