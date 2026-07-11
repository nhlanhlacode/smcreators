import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    title: 'Consultation Call',
    desc: 'A focused conversation on your goals, challenges, and where you want to take your page.',
  },
  {
    title: 'Page Review / Audit',
    desc: 'Honest, professional feedback on your profile, content, engagement, and overall presentation.',
  },
  {
    title: 'Brand Development',
    desc: 'Your niche, content pillars, positioning, and visual direction, clarified and defined.',
  },
  {
    title: 'Content Strategy',
    desc: 'A clear plan and posting direction so every piece of content has a purpose.',
  },
  {
    title: 'Content Creation',
    desc: 'Hands-on support shaping content that reflects your brand, consistently.',
  },
  {
    title: 'Content Calendar Creation',
    desc: 'A full month of content ideas, mapped out and ready to post.',
  },
  {
    title: 'Media Kit Review / Creation',
    desc: 'A professional media kit built to send straight to brands.',
  },
  {
    title: 'Brand Pitch Support',
    desc: 'Guidance and templates for pitching yourself to brands with confidence.',
  },
]

function CheckMark() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0 text-brass"
      aria-hidden="true"
    >
      <path
        d="M4 10.5L8 14.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mb-16 max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-taupe-700">
            What we do
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-tightest text-taupe-900 sm:text-5xl">
            Services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-taupe-900/70">
            Eight core pillars, mixed and matched into a package that meets
            you exactly where you are as a creator.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="li"
              delay={`${(i % 4) * 90}ms`}
              className="group flex gap-4 border-t border-taupe-900/10 pt-6 transition-colors duration-300"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-taupe-900/15 transition-colors duration-300 group-hover:border-brass group-hover:bg-brass/10">
                <CheckMark />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-taupe-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-taupe-900/65">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
