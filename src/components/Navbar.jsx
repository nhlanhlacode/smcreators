import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-taupe-900/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          onClick={handleLinkClick('#top')}
          aria-label="SM Creator Studio home"
          className="text-2xl leading-none"
        >
          <Logo tone="light" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="group relative text-sm font-medium uppercase tracking-widest2 text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#packages"
              onClick={handleLinkClick('#packages')}
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-brass hover:text-brass-light"
            >
              Book a Consultation
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-taupe-900 transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-6 py-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="text-lg font-medium text-white/90"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#packages"
              onClick={handleLinkClick('#packages')}
              className="inline-block rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-taupe-900"
            >
              Book a Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
