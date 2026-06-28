import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)/0.12,transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Star className="size-3.5 fill-primary" />
            Admissions Open 2026-27
            Scholarship Test Available
          </span>
          <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            GYANSTHALI VIDHYAPEETH

            <span className="text-primary">IIT-JEE & NEET Coaching Classes</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            At Gyansthali Vidhyapeeth, we provide expert faculty, smart classrooms,
            weekly test series, doubt solving sessions and personal mentoring
            for IIT-JEE & NEET aspirants.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact#admission">
                Apply for Admission <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            {[
              'Expert Faculty',
              'Weekly Test Series',
              'Smart Classrooms'
            ].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/hero-students.png"
              alt="Students learning together at Apex Academy"
              width={720}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <p className="font-heading text-2xl font-bold text-primary">125+
              IIT-JEE Selections%</p>
            <p className="font-heading text-2xl font-bold text-primary">
              150+
              NEET Selections</p>
            <p className="text-xs text-muted-foreground">Selection success rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
