import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Textura de fondo sutil, un guiño a la cuadrícula de una hoja de datos */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="font-body text-[11px] sm:text-xs tracking-[0.35em] uppercase text-ink-400">
          Análisis de datos · SQL · Python · BI
        </p>

        <h1 className="mt-6 font-display font-semibold text-ink-950 leading-[0.95] tracking-tight">
          <span className="block text-6xl sm:text-8xl md:text-[7.5rem]">
            {profile.firstName}
          </span>
          <span className="block text-6xl sm:text-8xl md:text-[7.5rem] text-burgundy-500 italic -mt-2 sm:-mt-4">
            {profile.lastName.split(' ')[0]}
          </span>
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-ink-200" />
          <span className="text-burgundy-500 text-lg leading-none">✦</span>
          <span className="h-px w-12 bg-ink-200" />
        </div>

        <p className="mt-6 font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-ink-700">
          {profile.role}
        </p>

        <p className="mt-5 max-w-xl mx-auto text-ink-400 text-base sm:text-lg leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 bg-ink-950 text-cream-50 font-medium px-6 py-3 rounded-full hover:bg-burgundy-500 transition-colors"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-ink-950/20 text-ink-950 font-medium px-6 py-3 rounded-full hover:border-burgundy-500 hover:text-burgundy-500 transition-colors"
          >
            Contactar
          </a>
          <div className="flex items-center gap-3 ml-1">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-400 hover:text-burgundy-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-400 hover:text-burgundy-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Tarjetas KPI */}
        <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-line bg-paper px-5 py-4 text-left"
            >
              <dt className="font-body text-[11px] text-ink-400 uppercase tracking-wide">
                {stat.label}
              </dt>
              <dd className="font-mono text-xl text-burgundy-500 mt-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-14 font-body text-[11px] tracking-[0.3em] uppercase text-ink-200">
          {profile.name} · Analista de datos · {profile.location}
        </p>
      </div>
    </section>
  )
}
