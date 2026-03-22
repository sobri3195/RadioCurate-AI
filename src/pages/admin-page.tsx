import { AppShell } from '@/components/layout/app-shell'
import { DatasetStatusCard } from '@/components/shared/dataset-status-card'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AdminPage() {
  return (
    <AppShell title="Admin & Data Management" subtitle="Track registry ingestion, data quality, model versioning, and operational placeholders.">
      <DatasetStatusCard />
      <div className="grid gap-6 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Import / update status</CardTitle>
              <CardDescription>Current ingestion workflow placeholder states.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Data pipeline indicators</CardTitle>
              <CardDescription>Representative health checks for ETL, validation, and indexing.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {['DICOM parser healthy', 'De-identification complete', 'Cohort indexing in sync'].map((item) => (
              <div key={item} className="rounded-xl bg-secondary/60 p-4 text-sm font-medium">{item}</div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Access control</CardTitle>
              <CardDescription>Placeholder cards for future RBAC and audit log expansion.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {['Physician role', 'Dosimetrist role', 'Research admin role'].map((item) => (
              <div key={item} className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">{item}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
