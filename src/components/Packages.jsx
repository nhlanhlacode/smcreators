import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const PACKAGES = [
  {
    numeral: 'I',
    name: 'Creator Reset',
    price: 'R1,000',
    idealFor:
      'New creators, student creators, or anyone who wants clarity before investing in full brand development.',
    walkAway: [
      'Clear feedback on what is and isn\'t working on your page',
      'Specific recommendations on what to improve',
      'Guidance on how to move forward strategically',
      'Confidence in your next steps as a creator',
    ],
    includes: [
      'Consultation Call',
      'Full Page Review / Audit',
      'Written improvement recommendations',
    ],
    featured: false,
  },
  {
    numeral: 'II',
    name: 'Brand Elevation',
    price: 'R2,000',
    savings: 'Save R500 — R2,500 value booked separately',
    idealFor:
      'Creators who want to grow strategically, improve content quality, and start positioning themselves for future collaborations.',
    walkAway: [
      'Clear niche and brand positioning',
      'Defined content pillars',
      'Stronger brand identity and messaging',
      'Direction for consistent, intentional content',
    ],
    includes: [
      'Consultation Call',
      'Full Page Review / Audit',
      'Personal Brand Development — niche, pillars, positioning & visual direction',
    ],
    featured: true,
  },
  {
    numeral: 'III',
    name: 'Booked & Brand Ready',
    price: 'R4,000',
    savings: 'Save R2,200 — R6,200 value booked separately',
    idealFor:
      'Creators who are ready to work with brands, build authority in their niche, and monetise their platform.',
    walkAway: [
      'A strong, clear personal brand identity',
      'A full content strategy and posting direction',
      'A one-month content calendar with content ideas',
      'A professional media kit to send to brands',
      'Confidence to approach collaborations professionally',
    ],
    includes: [
      'Consultation Call',
      'Full Page Review / Audit',
      'Personal Brand Development',
      'Content Strategy',
      '1-Month Content Calendar with content ideas',
      'Media Kit Creation',
      'Brand Pitch Support',
    ],
    featured: false,
  },
]

function PackageCard({ pkg, index }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -4, y: px * 6 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <Reveal delay={`${index * 120}ms`} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className={`flex h-full flex-col rounded-2xl p-8 transition-transform duration-200 ease-out ${
          pkg.featured
            ? 'bg-cream shadow-[0_28px_70px_-24px_rgba(0,0,0,0.5)] ring-1 ring-brass/50'
            : 'bg-cream/95 shadow-[0_18px_44px_-24px_rgba(0,0,0,0.35)]'
        }`}
      >
        <div className="mb-6 flex items-start justify-between">
          <span className="font-serif text-sm italic text-taupe-700">
            {pkg.numeral}
          </span>
          {pkg.featured && (
            <span className="animate-ringPulse rounded-full bg-brass px-3 py-1 text-[11px] font-semibold uppercase tracking-widest2 text-taupe-900">
              Most chosen
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl font-semibold text-taupe-900">
          {pkg.name}
        </h3>
        <p className="mt-2 font-serif text-4xl font-semibold tracking-tightest text-taupe-900">
          {pkg.price}
        </p>
        {pkg.savings && (
          <p className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2 text-brass">
            {pkg.savings}
          </p>
        )}

        <p className="mt-5 text-sm italic leading-relaxed text-taupe-900/65">
          Ideal for: {pkg.idealFor}
        </p>

        <div className="my-6 h-px bg-taupe-900/10" />

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-taupe-900/50">
          You'll walk away with
        </p>
        <ul className="space-y-2.5">
          {pkg.walkAway.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-taupe-900/80">
              <span className="mt-0.5 text-brass">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="my-6 h-px bg-taupe-900/10" />

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-taupe-900/50">
          Includes
        </p>
        <ul className="flex-1 space-y-2.5">
          {pkg.includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-taupe-900/80">
              <span className="mt-0.5 text-brass">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={`group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-widest2 transition-colors ${
            pkg.featured
              ? 'bg-taupe-900 text-white hover:bg-taupe-900/90'
              : 'border border-taupe-900/25 text-taupe-900 hover:border-taupe-900'
          }`}
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
            Enquire about this package →
          </span>
        </a>
      </div>
    </Reveal>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="bg-taupe-800 py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-16 max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-brass-light">
            Investment
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
            Packages
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Three tiers, built to meet you at your stage as a creator — from
            first feedback to being fully brand ready. Move up a tier
            whenever you're ready; the earlier packages carry over.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
