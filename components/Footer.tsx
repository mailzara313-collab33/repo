const footerLinks = {
  Hizmetler: [
    'Anahtar Teslim İnşaat',
    'Villa & Konut Projeleri',
    'Ticari Yapılar',
    'Tadilat & Yenileme',
    'Kaba İnşaat',
    'İnce İşler',
    'Mimari Uygulama',
    'Şantiye Yönetimi',
  ],
  Proje: [
    'Villa',
    'Rezidans',
    'Ofis & İş Merkezi',
    'Mağaza & Showroom',
    'Otel & Konaklama',
    'Eğitim Yapıları',
    'Endüstriyel Yapılar',
  ],
  Kurumsal: ['Hakkımızda', 'Süreç', 'Referanslar', 'İletişim'],
}

const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="13.2" cy="4.8" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5.5 8V13M5.5 5.5V6M8 13V10c0-1.1.9-2 2-2s2 .9 2 2v3M8 8V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1C4.58 1 1 4.58 1 9c0 1.5.38 2.9 1.05 4.13L1 17l4.05-.99A8 8 0 0 0 9 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M6 7c.5 1 1.2 2 2.2 2.8.8 1 1.8 1.7 2.8 2.2.4 0 .7-.1 1-.4l.5-.8c.1-.3 0-.5-.2-.7l-1-.6c-.2-.1-.5-.1-.6.1l-.3.4c-.8-.4-1.5-1.1-2-2l.4-.3c.2-.2.2-.4.1-.6L8 6.4c-.2-.2-.5-.3-.7-.2l-.8.4C6.1 6.3 6 6.6 6 7z" fill="currentColor" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/6 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-white bg-grid-lg opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 lg:grid-cols-5 gap-12 border-b border-white/5">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-gold/50 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 0L14 7L7 14L0 7L7 0Z" fill="#c8992a" />
                </svg>
              </div>
              <div>
                <span className="text-white font-semibold text-sm tracking-wide">SEFIR</span>
                <span className="text-gold text-xs font-medium ml-1.5 tracking-widest">
                  Yapı & Proje
                </span>
              </div>
            </div>

            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-8">
              Özel projeler, anahtar teslim uygulamalar ve profesyonel şantiye yönetimiyle
              yapınızı baştan sona planlıyor ve teslim ediyoruz.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a
                href="tel:+905001234567"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 1h3l1 3-1.5 1.5C5.5 7.5 6.5 8.5 8.5 9.5L10 8l3 1v3a1 1 0 0 1-1 1C5 13 1 9 1 2a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1" />
                </svg>
                +90 500 123 45 67
              </a>
              <a
                href="mailto:info@sefiryapi.com"
                className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="2" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
                  <path d="M1 4L7 8.5L13 4" stroke="currentColor" strokeWidth="1" />
                </svg>
                info@sefiryapi.com
              </a>
              <div className="flex items-center gap-2.5 text-white/30 text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.24 1 2 3.24 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
                İstanbul, Türkiye
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-white text-sm transition-colors duration-200 hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono">
            © 2025 Sefir Yapı & Proje. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-gold/20" />
            <span className="text-gold/30 text-xs font-mono tracking-widest">
              GÜVENLE İNŞA EDİYORUZ
            </span>
            <div className="h-px w-6 bg-gold/20" />
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">
              Gizlilik
            </a>
            <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
