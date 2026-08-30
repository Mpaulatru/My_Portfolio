import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-display text-lg text-ink-950 italic tracking-tight"
        >
          {profile.firstName.split(' ')[0]}
          <span className="text-burgundy-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide text-ink-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-burgundy-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              profile.available ? 'bg-burgundy-500' : 'bg-ink-200'
            }`}
          />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-ink-400">
            {profile.available ? 'Disponible' : 'No disponible'}
          </span>
        </div>

        <button
          className="md:hidden text-ink-950"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-b border-line px-6 pb-6">
          <ul className="flex flex-col gap-4 font-body text-sm text-ink-700 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-burgundy-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
