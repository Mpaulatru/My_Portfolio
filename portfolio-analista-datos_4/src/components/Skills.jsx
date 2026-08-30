import { skillGroups } from '../data/portfolio'
import SkillItem from './SkillItem'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="habilidades" className="py-24 border-t border-line bg-paper/60">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={visible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-burgundy-500">
            03 · Habilidades
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink-950 font-semibold mt-3">
            Caja de herramientas
          </h2>
          <p className="mt-3 text-ink-400 max-w-2xl">
            Del dato crudo al reporte final: consultas, modelado, visualización
            y control de versiones.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-body text-xs tracking-[0.25em] uppercase text-ink-400 mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
