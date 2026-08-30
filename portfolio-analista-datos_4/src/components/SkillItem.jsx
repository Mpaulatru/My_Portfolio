import {
  Database,
  Code2,
  Table,
  BarChart3,
  LineChart,
  PieChart,
  Server,
  Workflow,
  GitBranch,
  Circle,
} from 'lucide-react'

// Mapa explícito para permitir tree-shaking (evita importar todo lucide-react).
const ICONS = {
  Database,
  Code2,
  Table,
  BarChart3,
  LineChart,
  PieChart,
  Server,
  Workflow,
  GitBranch,
}

export default function SkillItem({ skill }) {
  const Icon = ICONS[skill.icon] || Circle

  return (
    <div className="rounded-xl border border-line bg-paper p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950/5 text-burgundy-500">
          <Icon size={18} />
        </div>
        <span className="font-body text-sm text-ink-950 font-medium">
          {skill.name}
        </span>
      </div>

      <div className="mt-4 h-1.5 w-full rounded-full bg-ink-950/8 overflow-hidden">
        <div
          className="h-full rounded-full bg-burgundy-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}
