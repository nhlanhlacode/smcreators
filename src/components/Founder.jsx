import { useState } from 'react'
import Reveal from './Reveal.jsx'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 3h-3.5A4 4 0 0 0 13 7v9a4 4 0 0 1-4 4 4 4 0 0 1-4-4V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 8v9a4 4 0 0 0 4 4 4 4 0 0 0 4-4V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 10v8M13 10v8M9 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 10.5l6 3.5-6 3.5v-7z" fill="currentColor" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    label: '@sphesihle.mchunu on Instagram',
    href: 'https://instagram.com/sphesihle.mchunu',
    Icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@shemakescontent_sa?is_from_webapp=1&sender_device=pc',
    Icon: TikTokIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sphesihle.mchunu.50309/about',
    Icon: FacebookIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@sphesihle.mchunu',
    Icon: YouTubeIcon,
  },
]

export default function Founder() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal direction="right">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border border-taupe-900/10 bg-taupe-700 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)] lg:max-w-sm">
            {!imgFailed ? (
              <img
                src="/sphesihle.jpg"
                alt="Sphesihle Mchunu, founder of SM Creator Studio"
                loading="lazy"
                decoding="async"
                onError={() => setImgFailed(true)}
                className="h-full w-full object-cover object-[center_30%]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-taupe-600 to-taupe-800">
                <span className="font-serif text-6xl italic font-semibold text-white/90">
                  SM
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal direction="left" delay="120ms">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-taupe-700">
            Meet the founder
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-tightest text-taupe-900 sm:text-5xl">
            Sphesihle Mchunu
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-taupe-900/70">
            SM Creator Studio was founded in 2025 by content creator
            Sphesihle Mchunu, built on a simple belief: a page doesn't grow
            by accident. It grows when the person behind it knows exactly
            who they're speaking to, what they stand for, and how to present
            that clearly, both to an audience and to the brands watching.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-taupe-900/70">
            Every package is built from lived, hands-on experience creating
            content, working with brands, and building a page from the
            ground up — not theory borrowed from a marketing textbook.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-widest2 text-taupe-900 transition-colors hover:text-taupe-700"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="underline decoration-brass underline-offset-4">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
