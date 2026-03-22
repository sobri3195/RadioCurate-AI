import {
  Activity,
  BadgeHelp,
  DatabaseZap,
  GitCompareArrows,
  Globe2,
  Home,
  LayoutDashboard,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { navigation, type NavItem } from '@/data/mock-data'
import { cn } from '@/lib/utils'

const iconMap: Record<NavItem['icon'], any> = {
  home: Home,
  'layout-dashboard': LayoutDashboard,
  'git-compare-arrows': GitCompareArrows,
  activity: Activity,
  'globe-2': Globe2,
  'badge-help': BadgeHelp,
  'database-zap': DatabaseZap,
} as const

export function SidebarNav() {
  return (
    <aside className="hidden min-h-screen w-72 flex-col border-r border-border/60 bg-white/70 px-5 py-6 backdrop-blur xl:flex">
      <div className="mb-8">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Activity className="h-5 w-5" />
        </div>
        <h1 className="mt-4 text-xl font-semibold">RadioCurate AI</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Clinical decision-support for radiation therapy benchmarking and explainability.
        </p>
      </div>
      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
                  isActive && 'bg-primary text-primary-foreground shadow-sm hover:text-primary-foreground',
                )
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
      <div className="mt-auto rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
        Supportive insights only. Final decisions require licensed clinician review.
      </div>
    </aside>
  )
}
