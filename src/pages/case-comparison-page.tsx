import { useMemo, useState, type ChangeEvent } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { AppShell } from '@/components/layout/app-shell'
import { ExplainabilityCard } from '@/components/shared/explainability-card'
import { HopeVisualizationCard } from '@/components/shared/hope-visualization-card'
import { MatchConfidenceCard } from '@/components/shared/match-confidence-card'
import { PatientSummaryCard } from '@/components/shared/patient-summary-card'
import { RiskAlertCard } from '@/components/shared/risk-alert-card'
import { SimilarCaseCard } from '@/components/shared/similar-case-card'
import { TreatmentPlanCard } from '@/components/shared/treatment-plan-card'
import { ChartCard } from '@/components/ui/chart-card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { outcomeTrend, planJourney, similarCases } from '@/data/mock-data'

export function CaseComparisonPage() {
  const [query, setQuery] = useState('')

  const filteredCases = useMemo(
    () => similarCases.filter((item) => item.patient.toLowerCase().includes(query.toLowerCase()) || item.technique.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <AppShell title="Patient Case Comparison" subtitle="Review a current radiotherapy plan against similar successful cases and explain the benchmark logic.">
      <PatientSummaryCard />
      <Tabs defaultValue="patient">
        <TabsList>
          <TabsTrigger value="patient">Patient</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="explainability">Explainability</TabsTrigger>
        </TabsList>
        <TabsContent value="patient">
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <TreatmentPlanCard />
            <MatchConfidenceCard />
          </div>
        </TabsContent>
        <TabsContent value="plan">
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <ChartCard title="Treatment pathway" description="Milestones from simulation through final board review.">
              <div className="space-y-4">
                {planJourney.map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-4 w-4 rounded-full ${item.state === 'done' ? 'bg-emerald-500' : item.state === 'active' ? 'bg-primary' : 'bg-slate-300'}`} />
                      {index < planJourney.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
                    </div>
                    <div className="pb-4">
                      <p className="font-medium">{item.step}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>
            <RiskAlertCard />
          </div>
        </TabsContent>
        <TabsContent value="outcomes">
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <ChartCard title="Outcome comparison" description="Current plan outlook compared with the matched thoracic cohort.">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={outcomeTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d7e2ef" />
                    <XAxis dataKey="label" stroke="#5d7288" />
                    <YAxis stroke="#5d7288" />
                    <Tooltip />
                    <Line type="monotone" dataKey="cohort" stroke="#7c9cc8" strokeWidth={3} name="Matched cohort" />
                    <Line type="monotone" dataKey="current" stroke="#0d6efd" strokeWidth={3} name="Current plan" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
            <HopeVisualizationCard />
          </div>
        </TabsContent>
        <TabsContent value="explainability">
          <ExplainabilityCard />
        </TabsContent>
      </Tabs>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Similar cases</h3>
            <p className="text-sm text-muted-foreground">Searchable comparison set with outcome and technique context.</p>
          </div>
          <Input value={query} onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Search similar cases" className="max-w-sm" />
        </div>
        {filteredCases.length > 0 ? (
          <div className="grid gap-4">{filteredCases.map((item) => <SimilarCaseCard key={item.id} caseItem={item} />)}</div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-white/60 p-8 text-center text-sm text-muted-foreground">
            No similar cases match your current search. Adjust the term or reset the filter.
          </div>
        )}
      </section>
    </AppShell>
  )
}
