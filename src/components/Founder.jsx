import { useState } from 'react'
import Reveal from './Reveal.jsx'

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

          <a
            href="https://instagram.com/sphesihle.mchunu"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest2 text-taupe-900 underline decoration-brass underline-offset-4 transition-colors hover:text-taupe-700"
          >
            @sphesihle.mchunu on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  )
}
