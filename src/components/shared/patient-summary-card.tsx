import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const summary = [
  ['Patient ID', 'RC-2084'],
  ['Diagnosis', 'Stage III NSCLC'],
  ['Age / ECOG', '63 / 1'],
  ['Technique', 'VMAT + SIB'],
  ['Intent', 'Curative'],
  ['Region', 'United States'],
]

export function PatientSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Patient Summary</CardTitle>
          <CardDescription>Structured clinical snapshot for benchmark comparison.</CardDescription>
        </div>
        <Badge variant="outline">Multidisciplinary review pending</Badge>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summary.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-secondary/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
            <p className="mt-1 font-medium">{value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
