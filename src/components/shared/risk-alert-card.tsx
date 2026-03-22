import { AlertTriangle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const alerts = [
  'Esophagus V35 is 3 points above the cohort median; verify swallowing risk mitigation.',
  'Heart mean dose remains acceptable but trends toward upper quartile for this cohort.',
  'AI recommendation requires physician review before communicating to patient or family.',
]

export function RiskAlertCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-500" />Risk & caution notes</CardTitle>
          <CardDescription>Supportive flags surfaced by the benchmarking engine.</CardDescription>
        </div>
        <Badge variant="warning">Review required</Badge>
      </CardHeader>
      <CardContent>
        {alerts.map((alert) => (
          <div key={alert} className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            {alert}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
