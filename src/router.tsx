import { createBrowserRouter } from 'react-router-dom'

import { AdminPage } from '@/pages/admin-page'
import { CaseComparisonPage } from '@/pages/case-comparison-page'
import { DashboardPage } from '@/pages/dashboard-page'
import { ExplainabilityPage } from '@/pages/explainability-page'
import { GlobalInsightsPage } from '@/pages/global-insights-page'
import { LandingPage } from '@/pages/landing-page'
import { PlanAnalysisPage } from '@/pages/plan-analysis-page'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/case-comparison', element: <CaseComparisonPage /> },
  { path: '/plan-analysis', element: <PlanAnalysisPage /> },
  { path: '/global-insights', element: <GlobalInsightsPage /> },
  { path: '/explainability', element: <ExplainabilityPage /> },
  { path: '/admin', element: <AdminPage /> },
])
