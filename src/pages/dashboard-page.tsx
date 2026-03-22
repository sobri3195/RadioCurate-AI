import { ArrowRight, FolderClock, Siren, WandSparkles } from 'lucide-react'

import { AppShell } from '@/components/layout/app-shell'
import { StatCard } from '@/components/shared/stat-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { overviewStats, quickActions, recentComparisons } from '@/data/mock-data'

export function DashboardPage() {
  return (
    <AppShell title="Clinical Operations Dashboard" subtitle="Monitor current plan reviews, benchmark activity, and supportive AI recommendations.">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} change={stat.change} tone={stat.tone} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Recent patient plan comparisons</CardTitle>
              <CardDescription>Cases with active benchmark reviews and supporting recommendations.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {recentComparisons.map((comparison) => (
              <div key={comparison.patient} className="grid gap-3 rounded-xl border border-border/70 bg-white/70 p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-medium">{comparison.patient}</p>
                    <Badge variant="success">{comparison.score} confidence</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{comparison.diagnosis}</p>
                  <p className="mt-3 text-sm">{comparison.recommendation}</p>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Open review <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Alerts & recommendations</CardTitle>
                <CardDescription>Critical caution signals surfaced by the AI benchmarking engine.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {[
                ['Esophagus hot spot', 'Review before final approval', Siren],
                ['Dataset sync complete', '14 new thoracic cases available', FolderClock],
                ['Optimization candidate', 'Parotid sparing opportunity identified', WandSparkles],
              ].map(([title, detail, Icon]) => {
                const ItemIcon = Icon as typeof Siren
                return (
                  <div key={title} className="flex gap-3 rounded-xl bg-secondary/60 p-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-sm text-muted-foreground">{detail}</p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Quick access</CardTitle>
                <CardDescription>Shortcuts to common clinical review actions.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {quickActions.map((action) => (
                  <button key={action} className="rounded-xl border border-border/70 bg-white/80 p-4 text-left text-sm font-medium hover:bg-secondary/70">
                    {action}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AppShell>
  )
}
