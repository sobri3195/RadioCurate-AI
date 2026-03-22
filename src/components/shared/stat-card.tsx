import { TrendingDown, TrendingUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Stat } from '@/data/mock-data'

export function StatCard({ label, value, change, tone }: Stat) {
  const positive = tone === 'positive'
  const caution = tone === 'caution'

  return (
    <Card>
      <CardHeader>
        <div>
          <CardDescription>{label}</CardDescription>
          <CardTitle className="mt-2 text-3xl">{value}</CardTitle>
        </div>
        <Badge variant={positive ? 'success' : caution ? 'warning' : 'default'} className="gap-1">
          {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
          {change}
        </Badge>
      </CardHeader>
    </Card>
  )
}
