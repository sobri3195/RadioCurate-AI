import { datasetStatus } from '@/data/mock-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function DatasetStatusCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Data Operations Status</CardTitle>
          <CardDescription>Registry health, ingestion pipelines, and model release visibility.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {datasetStatus.map((item) => (
          <div key={item.title} className="rounded-xl bg-secondary/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{item.title}</p>
              <Badge variant={item.tone === 'positive' ? 'success' : item.tone === 'caution' ? 'warning' : 'default'}>{item.value}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
