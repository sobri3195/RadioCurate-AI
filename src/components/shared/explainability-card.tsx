import { explainabilityFactors } from '@/data/mock-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ExplainabilityCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Explainability Summary</CardTitle>
          <CardDescription>Transparent match logic for clinician verification and audit review.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {explainabilityFactors.map((factor) => (
          <div key={factor.variable} className="rounded-xl border border-border/70 bg-white/70 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{factor.variable}</p>
              <Badge variant={factor.impact === 'High' ? 'success' : 'default'}>{factor.impact} impact</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{factor.note}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
