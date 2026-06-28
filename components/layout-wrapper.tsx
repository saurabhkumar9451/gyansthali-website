'use client'

import React from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import SidebarMenu from '@/components/home/sidebar-menu'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)

  return (
<div className="relative overflow-hidden">

      {/* Sidebar */}
      <SidebarMenu open={open} setOpen={setOpen} />

      {/* Whole page */}
   <div
  className={`
    flex min-h-screen flex-col
    transition-all duration-500 ease-in-out
    ${open ? 'translate-x-[10vw]' : 'translate-x-0'}
  `}
>
        <SiteHeader open={open} setOpen={setOpen} />

        <main className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </div>

    </div>
  )
}