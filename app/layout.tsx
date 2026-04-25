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

const siteUrl = 'https://sefiryapi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sefir Yapı & Proje — Anahtar Teslim İnşaat Çözümleri',
    template: '%s | Sefir Yapı & Proje',
  },
  description:
    'Özel projeler, anahtar teslim uygulamalar ve profesyonel şantiye yönetimiyle yapınızı baştan sona planlıyor, yönetiyor ve teslim ediyoruz. İstanbul genelinde villa, konut ve ticari yapı projeleri.',
  keywords: [
    'anahtar teslim inşaat',
    'villa inşaat',
    'konut projesi',
    'ticari yapı',
    'mimari uygulama',
    'şantiye yönetimi',
    'tadilat',
    'İstanbul inşaat firması',
    'inşaat şirketi İstanbul',
    'kaba inşaat',
    'ince işler',
  ],
  authors: [{ name: 'Sefir Yapı & Proje', url: siteUrl }],
  creator: 'Sefir Yapı & Proje',
  publisher: 'Sefir Yapı & Proje',
  category: 'construction',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Sefir Yapı & Proje — Anahtar Teslim İnşaat Çözümleri',
    description:
      'Fikirden Teslime Güvenilir İnşaat Çözümleri. Villa, konut ve ticari yapı projeleriniz için uzman ekip.',
    url: siteUrl,
    siteName: 'Sefir Yapı & Proje',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sefir Yapı & Proje — Anahtar Teslim İnşaat Çözümleri',
    description:
      'Fikirden Teslime Güvenilir İnşaat Çözümleri. Villa, konut ve ticari yapı projeleriniz için uzman ekip.',
    creator: '@sefiryapi',
  },
  alternates: {
    canonical: siteUrl,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Sefir Yapı & Proje',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    'Özel projeler, anahtar teslim uygulamalar ve profesyonel şantiye yönetimiyle yapınızı baştan sona planlıyor, yönetiyor ve teslim ediyoruz.',
  telephone: '+905001234567',
  email: 'info@sefiryapi.com',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR',
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul',
  },
  serviceType: [
    'Anahtar Teslim İnşaat',
    'Villa & Konut Projeleri',
    'Ticari Yapılar',
    'Tadilat & Yenileme',
    'Kaba İnşaat',
    'İnce İşler',
    'Mimari Uygulama',
    'Şantiye Yönetimi',
  ],
  sameAs: [
    'https://www.instagram.com/sefiryapi',
    'https://www.linkedin.com/company/sefiryapi',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
