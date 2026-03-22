# RadioCurate AI

RadioCurate AI is a modern, production-ready React application for radiation therapy planning support. The interface is designed as a clinical decision-support workspace that compares an in-progress radiotherapy plan against similar successful global cases, presents explainable benchmarking insights, and helps teams prepare patient-friendly communication aids.

## Highlights

- Landing page with product positioning, feature overview, trust section, and clear call-to-action flows.
- Multi-page dashboard experience for case comparison, plan analysis, global insights, explainability, and admin/data management.
- Reusable medical-grade UI built with React, Vite, TypeScript, Tailwind CSS v4, lucide-react, and shadcn/ui-inspired component patterns.
- Mock clinical datasets, responsive cards, tabs, alerts, searchable case lists, empty states, loading skeletons, and Recharts-based visualizations.
- Ready for deployment on Vercel as a static Vite application.

## Clinical Disclaimer

RadioCurate AI is a clinical decision-support interface only. It is **not** a replacement for physician judgment, institutional review, treatment planning QA, or multidisciplinary validation. Any AI-generated insight shown in this UI must be reviewed and confirmed by qualified medical professionals before it is used in patient care.

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The generated `dist/` output can be deployed directly to Vercel.
