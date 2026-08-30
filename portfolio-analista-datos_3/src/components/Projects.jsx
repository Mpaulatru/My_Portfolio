import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import { useReveal } from '../hooks/useReveal'

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="proyectos" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={visible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-burgundy-500">
            02 · Proyectos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink-950 font-semibold mt-3">
            Trabajo que resuelve preguntas reales de negocio
          </h2>
          <p className="mt-3 text-ink-400 max-w-2xl">
            Cada proyecto parte de una pregunta concreta: qué está pasando,
            por qué, y qué deberíamos hacer al respecto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
