import type { SelectHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-white/80 px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring',
        className,
      )}
      {...props}
    />
  )
}
