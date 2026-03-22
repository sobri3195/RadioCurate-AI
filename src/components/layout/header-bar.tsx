import { Bell, Search, ShieldCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export function HeaderBar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex flex-col gap-4 border-b border-border/60 bg-white/60 px-4 py-4 backdrop-blur md:px-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative min-w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search patient, case, or cohort" />
        </div>
        <Badge variant="success" className="gap-2 px-3 py-2">
          <ShieldCheck className="h-4 w-4" />
          Validation required
        </Badge>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/70">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
