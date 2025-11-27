import { CheckCircle, XCircle, HelpCircle } from 'lucide-react'

type VerdictType = 'true' | 'false' | 'complex'

interface ScientificVerdictProps {
  verdict: string
  type: VerdictType
}

const verdictConfig: Record<VerdictType, {
  borderColor: string
  bgColor: string
  icon: typeof CheckCircle
  iconColor: string
  label: string
}> = {
  true: {
    borderColor: 'border-l-primary',
    bgColor: 'bg-primary/5',
    icon: CheckCircle,
    iconColor: 'text-primary',
    label: 'Scientifically Supported',
  },
  false: {
    borderColor: 'border-l-destructive',
    bgColor: 'bg-destructive/5',
    icon: XCircle,
    iconColor: 'text-destructive',
    label: 'Debunked',
  },
  complex: {
    borderColor: 'border-l-muted-foreground',
    bgColor: 'bg-muted',
    icon: HelpCircle,
    iconColor: 'text-muted-foreground',
    label: 'It\'s Complicated',
  },
}

export function ScientificVerdict({ verdict, type }: ScientificVerdictProps) {
  const config = verdictConfig[type]
  const Icon = config.icon

  return (
    <div className={`mt-12 rounded-lg border-l-4 ${config.borderColor} ${config.bgColor} p-6`}>
      <div className="mb-3 flex items-center gap-2">
        <Icon className={`size-5 ${config.iconColor}`} />
        <span className={`text-sm font-semibold uppercase tracking-wide ${config.iconColor}`}>
          {config.label}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-bold">The Verdict</h3>
      <p className="text-lg leading-relaxed text-foreground/90">
        {verdict}
      </p>
    </div>
  )
}
