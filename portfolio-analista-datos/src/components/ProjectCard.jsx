import { ExternalLink, Github, TrendingUp } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="group relative rounded-xl border border-line bg-paper overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_-15px_rgba(27,21,18,0.25)] transition-all duration-300">
      {project.image ? (
        <div className="aspect-video w-full overflow-hidden border-b border-line bg-ink-950">
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-1 w-full bg-burgundy-500" />
      )}

      <div className="p-6">
        <h3 className="font-display text-xl text-ink-950 font-semibold">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-ink-400 leading-relaxed">
          {project.description}
        </p>

        {project.impact && (
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-burgundy-500/25 bg-burgundy-500/5 px-3 py-1">
            <TrendingUp size={13} className="text-burgundy-500" />
            <span className="font-mono text-xs text-burgundy-500">
              {project.impact}
            </span>
          </div>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="font-mono text-[11px] text-ink-700 border border-line rounded px-2 py-1"
            >
              {tool}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-6 flex items-center gap-4 text-sm">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-700 hover:text-burgundy-500 transition-colors"
              >
                <Github size={16} />
                Repositorio
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-700 hover:text-burgundy-500 transition-colors"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
