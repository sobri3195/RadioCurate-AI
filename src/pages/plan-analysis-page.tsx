import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { AppShell } from '@/components/layout/app-shell'
import { QualityScoreCard } from '@/components/shared/quality-score-card'
import { RiskAlertCard } from '@/components/shared/risk-alert-card'
import { ChartCard } from '@/components/ui/chart-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { doseDistribution, organMetrics } from '@/data/mock-data'

export function PlanAnalysisPage() {
  return (
    <AppShell title="Treatment Plan Analysis" subtitle="Assess dose distribution, organ-at-risk metrics, and optimization opportunities.">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <QualityScoreCard />
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Suggested optimization areas</CardTitle>
              <CardDescription>Priority refinement opportunities before approval.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {[
              ['Esophagus sparing', 'Moderate priority'],
              ['Heart mean dose', 'Low priority'],
              ['Setup robustness', 'Moderate priority'],
            ].map(([title, priority]) => (
              <div key={title} className="rounded-xl bg-secondary/60 p-4">
                <p className="font-medium">{title}</p>
                <Badge className="mt-2 w-fit" variant={priority.includes('Low') ? 'default' : 'warning'}>{priority}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Dose distribution summary" description="Delivered dose coverage compared with matched plan medians.">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={doseDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d7e2ef" />
                <XAxis dataKey="structure" stroke="#5d7288" />
                <YAxis stroke="#5d7288" />
                <Tooltip />
                <Legend />
                <Bar dataKey="delivered" fill="#0d6efd" radius={[8, 8, 0, 0]} />
                <Bar dataKey="benchmark" fill="#9fc4ff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Organ-at-risk metrics</CardTitle>
              <CardDescription>Current measurements against benchmark medians and protocol limits.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {organMetrics.map((metric) => (
              <div key={metric.organ} className="grid gap-3 rounded-xl border border-border/70 bg-white/70 p-4 md:grid-cols-4 md:items-center">
                <p className="font-medium">{metric.organ}</p>
                <p className="text-sm text-muted-foreground">Current: {metric.current}</p>
                <p className="text-sm text-muted-foreground">Benchmark: {metric.benchmark}</p>
                <Badge variant={metric.current > metric.benchmark ? 'warning' : 'success'} className="w-fit">Limit: {metric.limit}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <RiskAlertCard />
    </AppShell>
  )
}
