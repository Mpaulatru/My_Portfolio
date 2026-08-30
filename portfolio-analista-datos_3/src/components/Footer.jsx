import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="border-t border-line py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-burgundy-500">
              04 · Contacto
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink-950 font-semibold mt-3">
              ¿Hablamos de tus datos?
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-flex items-center gap-2 text-ink-400 hover:text-burgundy-500 transition-colors"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 hover:text-burgundy-500 hover:border-burgundy-500/40 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 hover:text-burgundy-500 hover:border-burgundy-500/40 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-400 font-body tracking-wide">
          <span>
            © {year} {profile.name}
          </span>
          <span>Hecho con React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
