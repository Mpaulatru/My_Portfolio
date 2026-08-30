import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink-900/95 backdrop-blur border-b border-ink-700 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.4)]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-display text-lg text-cream-50 italic tracking-tight"
        >
          {profile.firstName.split(' ')[0]}
          <span className="text-burgundy-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide text-ink-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cream-50 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              profile.available ? 'bg-burgundy-400' : 'bg-ink-400'
            }`}
          />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-ink-200">
            {profile.available ? 'Disponible' : 'No disponible'}
          </span>
        </div>

        <button
          className="md:hidden text-cream-50"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-900 border-b border-ink-700 px-6 pb-6">
          <ul className="flex flex-col gap-4 font-body text-sm text-ink-200 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-cream-50 transition-colors"
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
