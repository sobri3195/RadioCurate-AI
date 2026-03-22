export type NavItem = {
  label: string
  href: string
  icon: string
}

export type Stat = {
  label: string
  value: string
  change: string
  tone: 'positive' | 'neutral' | 'caution'
}

export type SimilarCase = {
  id: string
  patient: string
  diagnosis: string
  similarity: number
  outcome: string
  region: string
  technique: string
  caution: string
}

export const navigation = [
  { label: 'Landing', href: '/', icon: 'home' },
  { label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
  { label: 'Case Comparison', href: '/case-comparison', icon: 'git-compare-arrows' },
  { label: 'Plan Analysis', href: '/plan-analysis', icon: 'activity' },
  { label: 'Global Insights', href: '/global-insights', icon: 'globe-2' },
  { label: 'Explainability', href: '/explainability', icon: 'badge-help' },
  { label: 'Admin', href: '/admin', icon: 'database-zap' },
] satisfies NavItem[]

export const overviewStats = [
  { label: 'Validated plan matches', value: '2,418', change: '+12% this week', tone: 'positive' },
  { label: 'Active plan reviews', value: '43', change: '7 flagged for review', tone: 'caution' },
  { label: 'Median confidence', value: '91.4%', change: 'Stable vs. last month', tone: 'neutral' },
  { label: 'Dataset coverage', value: '68 countries', change: '14 new centers synced', tone: 'positive' },
] satisfies Stat[]

export const planJourney = [
  { step: 'Simulation', detail: 'CT + MRI fusion completed within 2 hours', state: 'done' },
  { step: 'Contour QA', detail: 'OAR contour consistency verified against peer cohort', state: 'done' },
  { step: 'Plan benchmark', detail: 'AI comparison against 3,240 similar successful plans', state: 'active' },
  { step: 'Tumor board validation', detail: 'Pending multidisciplinary sign-off', state: 'pending' },
]

export const recentComparisons = [
  { patient: 'RC-2084', diagnosis: 'Stage III NSCLC', score: '94%', recommendation: 'Maintain arc geometry; review esophagus hot spot.' },
  { patient: 'RC-1149', diagnosis: 'HPV+ oropharynx', score: '89%', recommendation: 'Coverage strong; consider lowering parotid mean dose.' },
  { patient: 'RC-8121', diagnosis: 'Localized prostate', score: '92%', recommendation: 'Benchmark favorable; bladder sparing exceeds median.' },
]

export const similarCases = [
  {
    id: 'SIM-448',
    patient: 'Case SIM-448',
    diagnosis: 'Stage III NSCLC',
    similarity: 96,
    outcome: '2-year local control 88%',
    region: 'North America',
    technique: 'VMAT',
    caution: 'Watch esophagus V35',
  },
  {
    id: 'SIM-512',
    patient: 'Case SIM-512',
    diagnosis: 'Stage III NSCLC',
    similarity: 93,
    outcome: 'No grade ≥3 pneumonitis',
    region: 'Western Europe',
    technique: 'IMRT',
    caution: 'Heart mean dose slightly lower',
  },
  {
    id: 'SIM-901',
    patient: 'Case SIM-901',
    diagnosis: 'Stage III NSCLC',
    similarity: 90,
    outcome: 'Progression-free survival 74%',
    region: 'Asia-Pacific',
    technique: 'VMAT',
    caution: 'Target conformity improved after re-optimization',
  },
  {
    id: 'SIM-104',
    patient: 'Case SIM-104',
    diagnosis: 'Stage III NSCLC',
    similarity: 87,
    outcome: 'Acute toxicity remained low',
    region: 'Middle East',
    technique: 'IMPT',
    caution: 'Beam path sensitive to setup shifts',
  },
] satisfies SimilarCase[]

export const outcomeTrend = [
  { label: 'Baseline', cohort: 70, current: 76 },
  { label: '30 days', cohort: 74, current: 82 },
  { label: '90 days', cohort: 78, current: 86 },
  { label: '1 year', cohort: 80, current: 89 },
]

export const organMetrics = [
  { organ: 'Lungs V20', current: 24, benchmark: 22, limit: 30 },
  { organ: 'Heart mean', current: 13, benchmark: 12, limit: 20 },
  { organ: 'Esophagus V35', current: 31, benchmark: 28, limit: 35 },
  { organ: 'Spinal cord max', current: 39, benchmark: 37, limit: 45 },
]

export const doseDistribution = [
  { structure: 'PTV', delivered: 98, benchmark: 97 },
  { structure: 'CTV', delivered: 99, benchmark: 98 },
  { structure: 'GTV', delivered: 101, benchmark: 100 },
  { structure: 'Boost volume', delivered: 96, benchmark: 95 },
]

export const globalTrends = [
  { month: 'Jan', vmAT: 78, imrt: 65, proton: 42 },
  { month: 'Feb', vmAT: 80, imrt: 66, proton: 43 },
  { month: 'Mar', vmAT: 82, imrt: 69, proton: 46 },
  { month: 'Apr', vmAT: 84, imrt: 70, proton: 48 },
  { month: 'May', vmAT: 85, imrt: 72, proton: 50 },
]

export const distributionHeatmap = [
  { bucket: '18-39', headNeck: 41, thoracic: 33, pelvic: 24 },
  { bucket: '40-59', headNeck: 56, thoracic: 62, pelvic: 46 },
  { bucket: '60-74', headNeck: 49, thoracic: 71, pelvic: 58 },
  { bucket: '75+', headNeck: 22, thoracic: 38, pelvic: 35 },
]

export const explainabilityFactors = [
  { variable: 'Tumor laterality + station map', impact: 'High', note: 'Mirrors 94% of top matched thoracic cases.' },
  { variable: 'Technique + fractionation', impact: 'High', note: 'Shares VMAT and simultaneous integrated boost pattern.' },
  { variable: 'Dose to esophagus', impact: 'Moderate', note: 'Slightly above cohort median; prompts caution signal.' },
  { variable: 'Pulmonary reserve', impact: 'Moderate', note: 'Comparable FEV1 range across matched survivors.' },
]

export const datasetStatus = [
  { title: 'Connected case libraries', value: '12 registries', detail: 'Last sync 18 minutes ago', tone: 'positive' },
  { title: 'Pending import jobs', value: '3 queues', detail: '2 DICOM batches under validation', tone: 'caution' },
  { title: 'Model version', value: 'v2.8.4', detail: 'Calibrated on 184k plans', tone: 'neutral' },
  { title: 'Access roles', value: '24 users', detail: 'RBAC placeholders enabled', tone: 'neutral' },
]

export const quickActions = [
  'Review contour variance report',
  'Open latest thoracic benchmark',
  'Export patient-friendly summary',
  'Inspect flagged OAR deviations',
]
