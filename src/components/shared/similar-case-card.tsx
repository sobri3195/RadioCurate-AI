import { MapPin, SearchCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { SimilarCase } from '@/data/mock-data'

export function SimilarCaseCard({ caseItem }: { caseItem: SimilarCase }) {
  return (
    <Card className="p-4">
      <CardContent className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-medium">{caseItem.patient}</p>
            <p className="text-sm text-muted-foreground">{caseItem.diagnosis}</p>
          </div>
          <Badge variant={caseItem.similarity >= 92 ? 'success' : 'default'}>{caseItem.similarity}% match</Badge>
        </div>
        <div className="grid gap-3 text-sm md:grid-cols-3">
          <div className="rounded-lg bg-secondary/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Outcome</p>
            <p className="mt-1 font-medium">{caseItem.outcome}</p>
          </div>
          <div className="rounded-lg bg-secondary/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technique</p>
            <p className="mt-1 font-medium">{caseItem.technique}</p>
          </div>
          <div className="rounded-lg bg-secondary/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Region</p>
            <p className="mt-1 flex items-center gap-1 font-medium"><MapPin className="h-3.5 w-3.5" />{caseItem.region}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-white/70 p-3 text-sm">
          <span className="inline-flex items-center gap-2 font-medium"><SearchCheck className="h-4 w-4 text-primary" />Benchmark note</span>
          <span className="text-muted-foreground">{caseItem.caution}</span>
        </div>
      </CardContent>
    </Card>
  )
}
