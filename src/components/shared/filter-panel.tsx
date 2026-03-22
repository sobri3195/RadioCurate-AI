import { Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

export function FilterPanel() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="flex items-center gap-2"><Filter className="h-4 w-4" />Cohort Filters</CardTitle>
          <CardDescription>Refine the global case set by clinical profile and delivery context.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        <Select defaultValue="nsclc"><option value="nsclc">Cancer type: NSCLC</option></Select>
        <Select defaultValue="stage3"><option value="stage3">Stage III</option></Select>
        <Select defaultValue="55-70"><option value="55-70">Age 55-70</option></Select>
        <Select defaultValue="vmat"><option value="vmat">Technique: VMAT</option></Select>
        <Select defaultValue="global"><option value="global">Region: Global</option></Select>
        <Input placeholder="Similarity keyword" />
        <div className="md:col-span-2 xl:col-span-6 flex gap-3">
          <Button>Apply filters</Button>
          <Button variant="outline">Reset</Button>
        </div>
      </CardContent>
    </Card>
  )
}
