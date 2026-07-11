import Reveal from './Reveal.jsx'

const STEPS = [
  {
    step: '01',
    title: 'Book & tell us where you\'re at',
    desc: 'A short consultation call — your goals, your challenges, and where you want your page to go.',
  },
  {
    step: '02',
    title: 'Get an honest review',
    desc: 'A full audit of your profile, content, and presentation — what\'s working, what isn\'t, and why.',
  },
  {
    step: '03',
    title: 'Walk away with a plan',
    desc: 'Strategy, direction, and — depending on your package — the tools to pitch yourself to brands.',
  },
]

export default function Process() {
  return (
    <section className="bg-taupe-900 py-24 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-brass-light">
            How it works
          </p>
          <h2 className="max-w-md font-serif text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
            Three steps to being brand ready.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={`${i * 140}ms`}>
              <span className="font-serif text-sm italic text-brass-light">
                {s.step}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {s.desc}
              </p>
              {i < STEPS.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-white/20 to-transparent md:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
