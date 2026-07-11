import { useState } from 'react'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    q: 'Which package should I start with?',
    a: 'If you\'re not sure what\'s working on your page yet, start with Creator Reset — it\'s built to give you clarity before you invest further. If you already know your niche and want to grow it properly, Brand Elevation is the better fit. Booked & Brand Ready is for creators actively pitching or being approached by brands.',
  },
  {
    q: 'How long does each package take?',
    a: 'The consultation call and page review are typically scheduled within a few days of booking. Brand Development and Content Strategy work is delivered after your call, once we understand your goals — timelines are confirmed with you directly.',
  },
  {
    q: 'Is this only for creators with a large following?',
    a: 'No. Creator Reset in particular is designed for new and student creators who want direction before they scale. Package fit is about clarity and consistency, not follower count.',
  },
  {
    q: 'Can I upgrade to a higher package later?',
    a: 'Yes — many creators start with Creator Reset or Brand Elevation and move up once they\'re ready for full brand and content support. Get in touch and we\'ll work out the difference.',
  },
]

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-taupe-900/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-lg font-semibold text-taupe-900">
          {item.q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-taupe-900/20 text-taupe-900 transition-transform duration-300 ${
            open ? 'rotate-45 border-brass text-brass' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        style={{ display: 'grid' }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-2xl text-sm leading-relaxed text-taupe-900/65">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page">
        <Reveal className="mb-14 max-w-lg">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-taupe-700">
            Good to know
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-tightest text-taupe-900 sm:text-5xl">
            Frequently asked
          </h2>
        </Reveal>

        <Reveal delay="120ms" className="max-w-2xl">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
