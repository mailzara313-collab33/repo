'use client'
import { useReveal } from '@/hooks/useReveal'

const projectTypes = [
  {
    code: 'VL',
    title: 'Villa & Özel Konut',
    desc: 'Müşteriye özel tasarım, yüksek standart malzeme ve özenli işçilikle hayalinizdeki yaşam alanı.',
    area: '200–600 m²',
    duration: '12–24 ay',
    accent: 'from-gold/10 to-transparent',
  },
  {
    code: 'RZ',
    title: 'Rezidans & Konut',
    desc: 'Toplu konut projelerinden butik sitelere kadar, konforlu ve fonksiyonel yaşam alanları.',
    area: '80–180 m²',
    duration: '18–36 ay',
    accent: 'from-copper/10 to-transparent',
  },
  {
    code: 'OF',
    title: 'Ofis & İş Merkezi',
    desc: 'Kurumsal kimliğinizi yansıtan, ergonomik ve teknoloji entegreli ofis ve iş merkezi yapıları.',
    area: '150–2000 m²',
    duration: '8–18 ay',
    accent: 'from-gold/8 to-transparent',
  },
  {
    code: 'MG',
    title: 'Mağaza & Showroom',
    desc: 'Markanızın değerini artıran, özgün mekânsal deneyim sunan ticari perakende alanları.',
    area: '50–500 m²',
    duration: '2–6 ay',
    accent: 'from-white/5 to-transparent',
  },
  {
    code: 'OT',
    title: 'Otel & Konaklama',
    desc: 'Misafir deneyimini ön planda tutan, işlevsel tasarım ve kaliteli inşaatla otelcilik yapıları.',
    area: '500–5000 m²',
    duration: '18–48 ay',
    accent: 'from-copper/8 to-transparent',
  },
  {
    code: 'EG',
    title: 'Eğitim Yapıları',
    desc: 'Okul, dershane, kurs merkezleri — yönetmeliğe uygun, sağlıklı ve ilham veren öğrenme mekanları.',
    area: '300–3000 m²',
    duration: '12–24 ay',
    accent: 'from-gold/10 to-transparent',
  },
  {
    code: 'EN',
    title: 'Endüstriyel Yapılar',
    desc: 'Fabrika, depo, atölye — üretim sürecini optimize eden fonksiyonel endüstriyel yapı çözümleri.',
    area: '500–10000 m²',
    duration: '8–20 ay',
    accent: 'from-white/4 to-transparent',
  },
  {
    code: 'TD',
    title: 'Tadilat & Dönüşüm',
    desc: 'Mevcut yapıyı yeniden yorumluyoruz. Mekânın potansiyelini, modern standartlarla hayata geçiriyoruz.',
    area: 'Her ölçek',
    duration: '1–12 ay',
    accent: 'from-copper/10 to-transparent',
  },
]

export default function ProjectTypes() {
  const containerRef = useReveal()

  return (
    <section id="projeler" className="py-28 md:py-40 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white bg-grid-md" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6" data-reveal>
              <span className="section-label">Proje Tipleri</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white"
              data-reveal
              data-delay="100"
            >
              Özel Projeler,<br />
              <span className="text-gradient-gold">Kişisel Yaklaşım</span>
            </h2>
          </div>
          <p
            className="text-white/45 text-sm md:text-base leading-relaxed max-w-sm md:text-right"
            data-reveal
            data-delay="200"
          >
            Her proje tipi kendi dinamiklerine sahiptir. Biz her birini bağımsız olarak ele alıyor,
            o yapıya özgü çözümler üretiyoruz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/4">
          {projectTypes.map((pt, i) => (
            <div
              key={pt.code}
              className="relative bg-dark-950 p-7 group cursor-default overflow-hidden card-glow border border-transparent"
              data-reveal
              data-delay={`${(i % 4) * 100}`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${pt.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Code badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono tracking-widest text-gold/50 border border-gold/15 px-2 py-0.5">
                    {pt.code}
                  </span>
                  <div className="h-px flex-1 mx-3 bg-white/5" />
                </div>

                <h3 className="text-white font-semibold text-base leading-snug mb-3">
                  {pt.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{pt.desc}</p>

                {/* Meta info */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/25 font-mono">Alan</span>
                    <span className="text-xs text-white/50">{pt.area}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/25 font-mono">Süre</span>
                    <span className="text-xs text-white/50">{pt.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
