import { createContext, useContext, useMemo, useState, type HTMLAttributes, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type TabsContextValue = {
  value: string
  setValue: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

export function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [value, setValue] = useState(defaultValue)
  const context = useMemo(() => ({ value, setValue }), [value])
  return <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('inline-flex h-auto flex-wrap gap-2 rounded-lg bg-secondary/70 p-1', className)} {...props} />
}

export function TabsTrigger({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  const context = useContext(TabsContext)
  if (!context) return null
  return (
    <button
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground',
        context.value === value && 'bg-white text-foreground shadow-sm',
        className,
      )}
      onClick={() => context.setValue(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  const context = useContext(TabsContext)
  if (!context || context.value !== value) return null
  return <div className={cn('mt-4 space-y-4', className)}>{children}</div>
}
