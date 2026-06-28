import Link from 'next/link'
import { Check } from 'lucide-react'
import { courses } from '@/lib/data'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Courses — JEE, NEET & Foundation | Apex Academy',
  description:
    'Explore Apex Academy programs for JEE (Main + Advanced), NEET and Foundation classes with detailed curriculum, mode and highlights.',
}

const faqs = [
  {
    q: 'When do new batches start?',
    a: 'Fresh batches begin in April and June every year. Crash courses and test-series-only batches start closer to the exam season.',
  },
  {
    q: 'Do you offer both online and classroom modes?',
    a: 'Yes. Every program is available as classroom, fully online, or hybrid so you can learn the way that suits you best.',
  },
  {
    q: 'Are scholarships available?',
    a: 'We offer merit-based scholarships of up to 90% through our Apex Scholarship & Admission Test (ASAT).',
  },
  {
    q: 'Is there a demo class before enrolling?',
    a: 'Absolutely. Book a free counselling session and attend a complimentary demo class before you decide.',
  },
]

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Programs designed to get you ranked"
        description="Choose from our flagship JEE, NEET and Foundation programs — each built around concept mastery, practice and mentorship."
      />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {courses.map((course, idx) => {
          const Icon = course.icon
          return (
            <section
              key={course.slug}
              id={course.slug}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={cn(
                  'flex flex-col gap-5',
                  idx % 2 === 1 && 'lg:order-2',
                )}
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary">
                  <Icon className={cn('size-7', course.accent)} />
                </span>
                <h2 className="font-heading text-3xl font-bold">{course.name}</h2>
                <p className="text-pretty text-lg text-muted-foreground">
                  {course.tagline}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">
                    Duration: {course.duration}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium">
                    Mode: {course.mode}
                  </span>
                </div>
                <Button asChild className="mt-2 w-fit">
                  <Link href="/contact#admission">Enroll in {course.name}</Link>
                </Button>
              </div>

              <div
                className={cn(
                  'rounded-3xl border border-border bg-card p-8',
                  idx % 2 === 1 && 'lg:order-1',
                )}
              >
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Program highlights
                </h3>
                <ul className="mt-5 space-y-4">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Subjects covered
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {course.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Accordion className="mt-10 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
