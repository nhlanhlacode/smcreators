import { useState } from 'react'

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)

  const scrollTo = (selector) => (e) => {
    e.preventDefault()
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-taupe-700 pt-28 pb-20"
    >
      {/* Ambient texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 85% 15%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%), radial-gradient(50% 40% at 5% 95%, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0) 60%)',
        }}
      />
      {/* Giant watermark wordmark echoing the logo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-10 select-none font-serif italic font-semibold text-white/[0.05]"
        style={{ fontSize: 'clamp(200px, 32vw, 480px)', lineHeight: 0.8 }}
      >
        sm
      </span>

      <div className="container-page relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Text column */}
        <div>
          <p
            className="mb-6 animate-fadeUp text-xs font-medium uppercase tracking-widest2 text-white/70 opacity-0"
            style={{ animationDelay: '80ms' }}
          >
            Creator Studio &nbsp;·&nbsp; Since 2025
          </p>

          <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.05] tracking-tightest text-white sm:text-6xl lg:text-[4.2rem]">
            <span
              className="block animate-fadeUp opacity-0"
              style={{ animationDelay: '180ms' }}
            >
              Turning scrolls into
            </span>
            <span
              className="block animate-fadeUp italic text-brass-light opacity-0"
              style={{ animationDelay: '320ms' }}
            >
              connections,
            </span>
            <span
              className="block animate-fadeUp opacity-0"
              style={{ animationDelay: '460ms' }}
            >
              one strategy at a time.
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl animate-fadeUp text-lg leading-relaxed text-white/80 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            SM Creator Studio is a brand development and content strategy
            practice for creators who are ready to be taken seriously — by
            their audience, and by the brands they want to work with.
          </p>

          <div
            className="mt-6 flex animate-fadeUp flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium uppercase tracking-widest2 text-brass-light opacity-0"
            style={{ animationDelay: '720ms' }}
          >
            <span>Brand Development</span>
            <span className="text-white/40">•</span>
            <span>Page Reviews</span>
            <span className="text-white/40">•</span>
            <span>Content Strategy</span>
          </div>

          <div
            className="mt-12 flex animate-fadeUp flex-wrap items-center gap-6 opacity-0"
            style={{ animationDelay: '840ms' }}
          >
            <a
              href="#packages"
              onClick={scrollTo('#packages')}
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-cream px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-taupe-900 transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)]"
            >
              <span className="relative z-10">Book a Consultation</span>
              <span className="absolute inset-0 -translate-x-full bg-brass-light transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </a>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="text-sm font-medium text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              See what's included
            </a>
          </div>
        </div>

        {/* Image column */}
        <div
          className="relative mx-auto w-full max-w-sm animate-fadeUp opacity-0 lg:max-w-none"
          style={{ animationDelay: '400ms' }}
        >
          <div className="relative aspect-[4/5] w-full animate-floatY">
            {/* Decorative blob backdrop */}
            <div className="absolute -inset-4 animate-blob bg-gradient-to-br from-brass/40 via-brass-light/20 to-transparent blur-2xl" />

            {/* Frame */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/15 bg-taupe-800 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)]">
              {!imgFailed && (
                <img
                  src="/images/founder.jpg"
                  alt="Sphesihle Mchunu, founder of SM Creator Studio"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgFailed(true)}
                  className={`h-full w-full object-cover transition-opacity duration-700 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}

              {/* Fallback monogram shown until the real photo is added */}
              {(!imgLoaded || imgFailed) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-taupe-800 to-taupe-900">
                  <span className="font-serif text-7xl italic font-semibold text-white/90">
                    sm
                  </span>
                  <span className="text-[11px] uppercase tracking-widest2 text-white/40">
                    Founder photo goes here
                  </span>
                </div>
              )}

              {/* Bottom label overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-6 pt-16">
                <p className="font-serif text-lg italic text-white">
                  Sphesihle Mchunu
                </p>
                <p className="text-xs uppercase tracking-widest2 text-white/70">
                  Founder, SM Creator Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        onClick={scrollTo('#services')}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="h-9 w-px animate-pulse bg-white/40" />
      </a>
    </section>
  )
}
