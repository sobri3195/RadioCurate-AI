import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Line, LineChart } from 'recharts'

import { AppShell } from '@/components/layout/app-shell'
import { FilterPanel } from '@/components/shared/filter-panel'
import { ChartCard } from '@/components/ui/chart-card'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { distributionHeatmap, globalTrends } from '@/data/mock-data'

const colors = ['#c9ddff', '#73a8ff', '#0d6efd']

export function GlobalInsightsPage() {
  return (
    <AppShell title="Global Case Insights" subtitle="Explore cohort trends, outcome patterns, and similarity search signals across registries.">
      <FilterPanel />
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ChartCard title="Technique adoption trends" description="Global utilization of planning approaches across matched case libraries.">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={globalTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d7e2ef" />
                <XAxis dataKey="month" stroke="#5d7288" />
                <YAxis stroke="#5d7288" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="vmAT" name="VMAT" stroke="#0d6efd" strokeWidth={3} />
                <Line type="monotone" dataKey="imrt" name="IMRT" stroke="#5aa7a3" strokeWidth={3} />
                <Line type="monotone" dataKey="proton" name="Proton" stroke="#7a60ff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Similarity search panel</CardTitle>
              <CardDescription>Prototype search controls for drilling into cohort subsets.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              'Anatomical proximity weighting: 0.82',
              'Fractionation similarity: 0.91',
              'Technique alignment: 0.96',
              'Outcome signal strength: 0.88',
            ].map((item) => (
              <div key={item} className="rounded-lg bg-secondary/60 p-4 text-sm">{item}</div>
            ))}
          </CardContent>
        </Card>
      </div>
      <ChartCard title="Distribution heatmap" description="Illustrative distribution of case counts by age bucket and disease region.">
        <div className="h-[26rem]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distributionHeatmap} layout="vertical" stackOffset="expand">
              <CartesianGrid strokeDasharray="3 3" stroke="#d7e2ef" />
              <XAxis type="number" hide />
              <YAxis dataKey="bucket" type="category" stroke="#5d7288" />
              <Tooltip />
              <Legend />
              {(['headNeck', 'thoracic', 'pelvic'] as const).map((key, index) => (
                <Bar key={key} dataKey={key} stackId="a" radius={[0, 8, 8, 0]}>
                  {distributionHeatmap.map((entry) => (
                    <Cell key={`${entry.bucket}-${key}`} fill={colors[index]} />
                  ))}
                </Bar>
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </AppShell>
  )
}
