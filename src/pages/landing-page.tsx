import { ArrowRight, BrainCircuit, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: BrainCircuit,
    title: 'Real-time plan benchmarking',
    description: 'Compare a current radiotherapy plan against thousands of globally similar successful cases.',
  },
  {
    icon: Stethoscope,
    title: 'Clinician-first explainability',
    description: 'Surface why cases match, where quality stands out, and which cautions require human review.',
  },
  {
    icon: Sparkles,
    title: 'Patient-friendly hope visualization',
    description: 'Translate cohort patterns into empathetic communication support without implying certainty.',
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6">
        <div>
          <p className="text-lg font-semibold">RadioCurate AI</p>
          <p className="text-sm text-muted-foreground">Radiation therapy planning support</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" to="/global-insights" className="hidden md:inline-flex">Explore insights</Button>
          <Button to="/dashboard">Open dashboard</Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Supportive AI insights for radiation oncology teams
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Benchmark every treatment plan against global evidence in real time.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            RadioCurate AI helps clinicians evaluate whether a radiotherapy plan is optimal, understand the reasoning behind recommendations, and communicate encouraging context to patients using matched successful treatment journeys.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" to="/dashboard">Launch workspace <ArrowRight className="h-4 w-4" /></Button>
            <Button size="lg" variant="outline" to="/case-comparison">View case comparison</Button>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Clinical decision-support only.</strong> This interface is not a final diagnosis system and must be validated by licensed medical professionals before any care decision.
          </div>
        </div>

        <Card className="overflow-hidden border-primary/10 bg-white/80 p-0">
          <div className="border-b border-border/60 bg-linear-to-r from-primary/10 via-white to-emerald-50 px-6 py-5">
            <p className="text-sm font-medium text-primary">Live plan summary</p>
            <h2 className="mt-2 text-2xl font-semibold">Matched to 3,240 thoracic treatment journeys</h2>
          </div>
          <CardContent className="grid gap-4 p-6">
            {[
              ['Benchmark confidence', '94%'],
              ['Plan quality score', '8.9 / 10'],
              ['Comparable local control', '88%'],
              ['Critical review items', '2'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-xl bg-secondary/60 p-4">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className="text-lg font-semibold">{value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardContent className="space-y-4 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold">How it works</h3>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <p>1. Ingest patient anatomy, target volumes, fractionation, and organ-at-risk constraints.</p>
                <p>2. Match the active plan with statistically similar successful treatment cases across institutions.</p>
                <p>3. Present explainable confidence, comparative outcomes, and caution signals for clinician review.</p>
                <p>4. Generate a patient-friendly narrative that supports informed conversations without replacing physician judgment.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 bg-emerald-50/80">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
                <h3 className="text-2xl font-semibold text-emerald-900">Trust & safety</h3>
              </div>
              <ul className="mt-6 space-y-4 text-sm text-emerald-900/80">
                <li>Every AI insight is labeled as supportive only and requires professional validation.</li>
                <li>Explainability and audit views disclose the variables driving similarity and confidence.</li>
                <li>Designed for multidisciplinary teams with transparency, caution notes, and quality benchmarking.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-medium text-foreground">RadioCurate AI</p>
            <p>AI-powered radiation therapy planning support for clinician review.</p>
          </div>
          <p>Disclaimer: Not a replacement for physician judgment or institutional protocols.</p>
        </div>
      </footer>
    </div>
  )
}
