import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function MatchConfidenceCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Match Confidence</CardTitle>
          <CardDescription>Composite score based on anatomy, dose geometry, stage, and outcomes.</CardDescription>
        </div>
        <Badge variant="success">High reliability</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 rounded-xl bg-secondary/60 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Overall confidence</p>
              <p className="text-4xl font-semibold">94%</p>
            </div>
            <p className="text-sm text-emerald-700">Top decile among thoracic benchmarks</p>
          </div>
          <Progress value={94} className="h-3" />
        </div>
      </CardContent>
    </Card>
  )
}
