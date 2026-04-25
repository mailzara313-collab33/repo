import type { Metadata } from 'next'
import { Space_Grotesk, DM_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sefir Yapı & Proje — Anahtar Teslim İnşaat Çözümleri',
  description:
    'Özel projeler, anahtar teslim uygulamalar ve profesyonel şantiye yönetimiyle yapınızı baştan sona planlıyor, yönetiyor ve teslim ediyoruz.',
  keywords:
    'anahtar teslim inşaat, villa inşaat, konut projesi, ticari yapı, mimari uygulama, şantiye yönetimi, tadilat',
  openGraph: {
    title: 'Sefir Yapı & Proje',
    description: 'Fikirden Teslime Güvenilir İnşaat Çözümleri',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
