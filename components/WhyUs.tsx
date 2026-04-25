'use client'
import { useReveal } from '@/hooks/useReveal'

const reasons = [
  {
    num: '01',
    title: 'Tek Elden Proje Yönetimi',
    desc: 'İlk görüşmeden anahtar teslime kadar tüm süreç tek bir ekip tarafından koordineli biçimde yürütülür. Müşteri, birden fazla firmayla muhatap olmaz.',
  },
  {
    num: '02',
    title: 'Şeffaf Maliyet Planı',
    desc: 'Keşif cetveli ve iş programı başlangıçta net olarak belirlenir. Gizli ek maliyetler yoktur. Bütçe aşımlarında önceden bilgilendirme yapılır.',
  },
  {
    num: '03',
    title: 'Profesyonel Ekip Koordinasyonu',
    desc: 'Mühendis, mimar, usta ve taşeronlar arasındaki koordinasyonu üstleniyoruz. Kimin ne yapacağı, ne zaman yapacağı önceden belirlenir.',
  },
  {
    num: '04',
    title: 'Zamanında Teslim Hedefi',
    desc: 'Proje başlangıcında onaylanan iş programına sadık kalıyoruz. Kritik aşamalarda gecikmeler analiz edilir, telafi planı devreye alınır.',
  },
  {
    num: '05',
    title: 'Kaliteli Malzeme ve İşçilik',
    desc: 'Tedarikçi seçiminde kalite ve güvenilirlik önceliğimizdir. Uygulama aşamasında standart kontrolleri düzenli olarak yapılır.',
  },
  {
    num: '06',
    title: 'Sürekli Saha Kontrolü',
    desc: 'Şantiyede günlük kontrol ve haftalık raporlama yapılır. Müşteri, projesinin durumunu her aşamada takip edebilir.',
  },
]

export default function WhyUs() {
  const containerRef = useReveal()

  return (
    <section className="py-28 md:py-40 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gold bg-grid-md opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-28 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6" data-reveal>
              <span className="section-label">Neden Sefir?</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white"
              data-reveal
              data-delay="100"
            >
              Tercih Sebebimiz<br />
              <span className="text-gradient-gold">Güven ve Sistemdir</span>
            </h2>
          </div>
          <div data-reveal data-delay="200">
            <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-md lg:ml-auto">
              İnşaat sektöründe en çok şikâyet edilen konular: iletişim eksikliği, bütçe aşımı
              ve geç teslim. Biz bu üçünü sistematik olarak çözmeye odaklandık.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className="bg-dark-800 px-8 py-8 group card-glow border border-transparent cursor-default"
              data-reveal
              data-delay={`${(i % 3) * 100}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-3xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-400">
                  {r.num}
                </span>
                <div className="h-px flex-1 bg-white/6 group-hover:bg-gold/15 transition-colors duration-400" />
              </div>

              <h3 className="text-white font-semibold text-base leading-snug mb-3">
                {r.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>

              {/* Indicator dot */}
              <div className="mt-6 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold/60 transition-all duration-300" />
                <div className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold/30 transition-all duration-500 delay-75" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
