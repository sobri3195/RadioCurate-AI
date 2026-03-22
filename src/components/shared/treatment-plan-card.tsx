import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const planMetrics = [
  { label: 'PTV D95 coverage', value: '98.4%', progress: 98 },
  { label: 'Conformity index', value: '1.08', progress: 88 },
  { label: 'Gradient index', value: '3.9', progress: 79 },
  { label: 'OAR constraint pass rate', value: '93%', progress: 93 },
]

export function TreatmentPlanCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Current Treatment Plan</CardTitle>
          <CardDescription>Real-time plan quality snapshot against cohort medians.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {planMetrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>{metric.label}</span>
              <span className="font-medium">{metric.value}</span>
            </div>
            <Progress value={metric.progress} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
