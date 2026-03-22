import type { ReactNode } from 'react'

import { HeaderBar } from '@/components/layout/header-bar'
import { SidebarNav } from '@/components/layout/sidebar-nav'

export function AppShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent xl:grid xl:grid-cols-[18rem_1fr]">
      <SidebarNav />
      <div className="min-w-0">
        <HeaderBar title={title} subtitle={subtitle} />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6">{children}</main>
      </div>
    </div>
  )
}
