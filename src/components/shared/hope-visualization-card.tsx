import { Sparkles } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const hopePoints = [
  { label: 'Comparable patients completed treatment', value: 92 },
  { label: 'Matched plans achieved strong local control', value: 88 },
  { label: 'Serious toxicity remained uncommon', value: 79 },
]

export function HopeVisualizationCard() {
  return (
    <Card className="bg-linear-to-br from-white to-emerald-50/70">
      <CardHeader>
        <div>
          <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-emerald-600" />Hope Visualization</CardTitle>
          <CardDescription>Patient-friendly framing that emphasizes encouraging similarities without overpromising outcomes.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {hopePoints.map((point) => (
          <div key={point.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>{point.label}</span>
              <span className="font-medium">{point.value}%</span>
            </div>
            <Progress value={point.value} className="h-3" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
