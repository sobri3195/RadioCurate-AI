import { Award } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function QualityScoreCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Plan Quality Score</CardTitle>
          <CardDescription>Aggregate of target coverage, conformity, and organ-at-risk sparing.</CardDescription>
        </div>
        <Badge variant="success" className="gap-1"><Award className="h-3.5 w-3.5" />Clinically favorable</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-4">
          <div>
            <p className="text-sm text-muted-foreground">Composite score</p>
            <p className="text-4xl font-semibold">8.9 / 10</p>
          </div>
          <p className="max-w-40 text-sm text-muted-foreground">Ranks above 82% of matched plans.</p>
        </div>
        <Progress value={89} className="h-3" />
      </CardContent>
    </Card>
  )
}
