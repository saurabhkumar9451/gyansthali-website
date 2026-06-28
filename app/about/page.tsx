import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Heart, Users, Award, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Us — Apex Academy',
  description:
    'Learn about Apex Academy, our mission, values and the mentors shaping the next generation of engineers and doctors.',
}

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To make world-class exam preparation accessible, personal and results-driven for every aspirant.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: "To be India's most trusted institute where ambition meets the right guidance.",
  },
  {
    icon: Heart,
    title: 'Our Values',
    desc: "Integrity, empathy and relentless commitment to each student's growth.",
  },
]

const milestones = [
  { year: '2008', text: 'Founded with a single classroom and 30 students.' },
  { year: '2013', text: 'First AIR top-100 ranks in JEE Advanced & NEET.' },
  { year: '2018', text: 'Launched hybrid online + classroom learning model.' },
  { year: '2025', text: '25,000+ students mentored across the country.' },
]

const faculty = [
  { name: 'Dr. Anil Khanna', role: 'Physics · Ex-IIT Delhi', initials: 'AK' },
  { name: 'Dr. Sneha Reddy', role: 'Biology · Ex-AIIMS', initials: 'SR' },
  { name: 'Prof. Vikram Joshi', role: 'Mathematics · IIT Kanpur', initials: 'VJ' },
  { name: 'Dr. Priya Menon', role: 'Chemistry · IISc', initials: 'PM' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Mentoring ambition since 2008"
        description="Apex Academy was founded on a simple belief — that the right guidance can transform potential into top ranks."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
          <Image
            src="/campus.png"
            alt="Apex Academy campus"
            width={680}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Where serious aspirants become rankers"
          />
          <p className="text-pretty leading-relaxed text-muted-foreground">
            What started as a single classroom in 2008 has grown into one of the
            country&apos;s most respected coaching institutes for JEE, NEET and
            Foundation programs. Our approach combines conceptual depth,
            disciplined practice and personal mentorship.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Every batch is small enough for individual attention, yet backed by
            a powerful technology platform for analytics, doubt-solving and test
            series. We don&apos;t just teach — we mentor.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/contact#admission">Join Apex Academy</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/results">View Results</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-background p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Journey"
          title="Milestones along the way"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <ol className="relative border-l border-border pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="mb-10 last:mb-0">
                <span className="absolute -left-[9px] flex size-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                <p className="font-heading text-lg font-bold text-primary">
                  {m.year}
                </p>
                <p className="mt-1 text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Faculty"
            title="Meet our mentors"
            description="A faculty of IIT, AIIMS and IISc alumni dedicated to your success."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => (
              <div
                key={f.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center"
              >
                <span className="flex size-20 items-center justify-center rounded-full bg-primary/10 font-heading text-2xl font-bold text-primary">
                  {f.initials}
                </span>
                <h3 className="mt-4 font-heading font-semibold">{f.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Users, value: '25K+', label: 'Students mentored' },
            { icon: Award, value: '1700+', label: 'Top selections' },
            { icon: Sparkles, value: '18 yrs', label: 'Of excellence' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-6" />
              </span>
              <div>
                <p className="font-heading text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
