import { useState } from 'react'
import Logo from './Logo.jsx'
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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:smcreatorstudio@outlook.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <footer id="contact" className="bg-taupe-900 py-24 md:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {/* Left: intro + contact details */}
          <Reveal direction="right">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-brass-light">
              Get in touch
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
              Let's build your
              <br />
              brand, on purpose.
            </h2>

            <a
              href="mailto:smcreatorstudio@outlook.com"
              className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-white/90 transition-colors hover:text-brass-light"
            >
              <MailIcon className="h-5 w-5 text-brass" />
              smcreatorstudio@outlook.com
            </a>

            <div className="mt-6">
              <a
                href="https://instagram.com/sphesihle.mchunu"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-brass-light"
              >
                <InstagramIcon className="h-5 w-5" />
                @sphesihle.mchunu
              </a>
            </div>
          </Reveal>

          {/* Right: minimal enquiry form */}
          <Reveal as="form" direction="left" delay="120ms" onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-white/50">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange('name')}
                className="mt-2 w-full border-b border-white/25 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-white/30 focus:border-brass"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-widest2 text-white/50">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange('email')}
                className="mt-2 w-full border-b border-white/25 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-white/30 focus:border-brass"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-white/50">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={3}
                value={form.message}
                onChange={handleChange('message')}
                className="mt-2 w-full resize-none border-b border-white/25 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-white/30 focus:border-brass"
                placeholder="Tell us about your page and your goals"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-brass px-8 py-3.5 text-sm font-semibold uppercase tracking-widest2 text-taupe-900 transition-colors hover:bg-brass-light"
            >
              Send enquiry
            </button>
            {sent && (
              <p className="text-sm text-brass-light" role="status">
                Opening your email client — send when ready.
              </p>
            )}
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <Logo tone="light" className="text-xl" />
          <p className="text-xs uppercase tracking-widest2 text-white/40">
            © 2025 SM Creator Studio. For the Creators.
          </p>
        </div>
      </div>
    </footer>
  )
}
