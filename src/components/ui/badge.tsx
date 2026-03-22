import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'bg-secondary text-secondary-foreground',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-rose-100 text-rose-700',
  outline: 'border border-border text-foreground',
} as const

export function Badge({ className, variant = 'default', ...props }: HTMLAttributes<HTMLDivElement> & { variant?: keyof typeof variantClasses }) {
  const resolvedVariant = variant as keyof typeof variantClasses
  return <div className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold', variantClasses[resolvedVariant], className)} {...props} />
}
