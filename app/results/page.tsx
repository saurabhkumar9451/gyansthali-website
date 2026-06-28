'use client'

import * as React from 'react'
import { Trophy, TrendingUp, Medal } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const allToppers = [
  { name: 'Aarav Sharma', exam: 'JEE', rank: 'AIR 12', year: '2025', initials: 'AS' },
  { name: 'Diya Patel', exam: 'NEET', rank: 'AIR 27', year: '2025', initials: 'DP' },
  { name: 'Rohan Verma', exam: 'JEE', rank: 'AIR 45', year: '2025', initials: 'RV' },
  { name: 'Ananya Iyer', exam: 'NEET', rank: 'AIR 53', year: '2025', initials: 'AI' },
  { name: 'Kabir Mehta', exam: 'JEE', rank: '99.98 %ile', year: '2025', initials: 'KM' },
  { name: 'Saanvi Rao', exam: 'NEET', rank: 'AIR 88', year: '2025', initials: 'SR' },
  { name: 'Arjun Nair', exam: 'JEE', rank: 'AIR 104', year: '2024', initials: 'AN' },
  { name: 'Ishita Singh', exam: 'NEET', rank: 'AIR 119', year: '2024', initials: 'IS' },
  { name: 'Vihaan Gupta', exam: 'JEE', rank: 'AIR 156', year: '2024', initials: 'VG' },
  { name: 'Myra Kapoor', exam: 'NEET', rank: 'AIR 174', year: '2024', initials: 'MK' },
  { name: 'Aditya Bose', exam: 'JEE', rank: 'AIR 201', year: '2024', initials: 'AB' },
  { name: 'Nisha Pillai', exam: 'NEET', rank: 'AIR 233', year: '2024', initials: 'NP' },
]

const highlights = [
  { icon: Trophy, value: '500+', label: 'IIT selections' },
  { icon: Medal, value: '1200+', label: 'NEET qualifiers' },
  { icon: TrendingUp, value: '98%', label: 'Selection rate' },
]

const filters = ['All', 'JEE', 'NEET'] as const

export default function ResultsPage() {
  const [filter, setFilter] = React.useState<(typeof filters)[number]>('All')

  const visible = allToppers.filter(
    (t) => filter === 'All' || t.exam === filter,
  )

  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Results that speak for themselves"
        description="Year after year, Apex students secure top ranks in India's toughest entrance exams."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <h.icon className="size-6" />
              </span>
              <div>
                <p className="font-heading text-3xl font-extrabold">{h.value}</p>
                <p className="text-sm text-muted-foreground">{h.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toppers"
          title="Our hall of fame"
          description="A selection of students who turned hard work into history-making ranks."
        />

        <div className="mt-8 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                filter === f
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/70',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
                {t.initials}
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-heading text-xl font-bold text-accent">
                  <Trophy className="size-4 shrink-0" /> {t.rank}
                </p>
                <p className="truncate font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.exam} · {t.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
