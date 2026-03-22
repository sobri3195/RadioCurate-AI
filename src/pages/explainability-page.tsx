import { AppShell } from '@/components/layout/app-shell'
import { ExplainabilityCard } from '@/components/shared/explainability-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ExplainabilityPage() {
  return (
    <AppShell title="Explainability & Audit" subtitle="Understand why a case matched, how confidence was calibrated, and where validation is mandatory.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ExplainabilityCard />
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Confidence explanation</CardTitle>
              <CardDescription>Calibrated confidence should inform review depth, not replace approval workflows.</CardDescription>
            </div>
            <Badge variant="warning">Human validation required</Badge>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Confidence combines anatomical similarity, delivered dose geometry, treatment intent, and historical outcome stability.</p>
            <p>Lower confidence may reflect sparse cohort coverage, institutional variation, or missing follow-up data.</p>
            <p>High confidence does not imply certainty of outcome and should never be interpreted as a final diagnosis or prescription.</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          ['Why this case matched', 'Dominant features were stage, nodal map, dose pattern, and pulmonary reserve.'],
          ['Model transparency notes', 'Prototype UI exposes influential variables, benchmark gaps, and caution thresholds.'],
          ['Validation disclaimer', 'Use only as supportive guidance within physician-led, protocol-based review.'],
        ].map(([title, description]) => (
          <Card key={title}>
            <CardHeader>
              <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </AppShell>
  )
}
