import Link from 'next/link'
import { Trophy } from 'lucide-react'
import { toppers } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export function ToppersStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Results 2025"
        title="Our students made us proud"
        description="A glimpse of this year's top performers across JEE and NEET."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toppers.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Trophy className="size-6" />
            </span>
            <div>
              <p className="font-heading text-lg font-bold">{t.rank}</p>
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.exam} · {t.year}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg">
          <Link href="/results">See full results</Link>
        </Button>
      </div>
    </section>
  )
}
