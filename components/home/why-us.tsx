import { SectionHeading } from '@/components/section-heading'
import {
  Users,
  LineChart,
  Target,
  Headphones,
  FileCheck2,
  Award,
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Faculty',
    desc: 'Learn from IIT & AIIMS alumni with a decade of mentoring experience.',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    desc: 'Track rank potential, accuracy and time with smart dashboards.',
  },
  {
    icon: Target,
    title: 'Personalised Plans',
    desc: 'Adaptive study plans tuned to your strengths and weak areas.',
  },
  {
    icon: Headphones,
    title: '24x7 Doubt Support',
    desc: 'Never get stuck — resolve doubts instantly, anytime.',
  },
  {
    icon: FileCheck2,
    title: 'All-India Test Series',
    desc: 'Exam-pattern mocks with detailed solutions and rankings.',
  },
  {
    icon: Award,
    title: 'Scholarships',
    desc: 'Merit-based fee waivers through our entrance scholarship test.',
  },
]

export function WhyUs() {
  return (
    <section
      className="
relative
overflow-hidden
bg-gradient-to-b
from-slate-50
via-white
to-blue-50
"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Why Apex"
          title="An ecosystem designed for rankers"
          description="Everything a serious aspirant needs — under one roof and one login."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="
  group
  relative
  overflow-hidden
  rounded-3xl
  border
  border-slate-200
  bg-white
  p-8
  shadow-sm
  transition-all
  duration-500
  hover:-translate-y-3
  hover:shadow-2xl
  hover:border-blue-500
  "
            >

              {/* Top animated line */}
              <div className="
  absolute
  top-0
  left-0
  h-1
  w-0
  bg-gradient-to-r
  from-blue-600
  to-cyan-400
  transition-all
  duration-500
  group-hover:w-full
  " />

              {/* Icon */}
              <div
                className="
    flex h-16 w-16 items-center justify-center
    rounded-2xl
    bg-gradient-to-br
    from-blue-50
    to-cyan-50
    text-blue-600
    transition-all
    duration-500
    group-hover:scale-110
    group-hover:rotate-12
    group-hover:bg-blue-600
    group-hover:text-white
    "
              >
                <f.icon className="h-7 w-7" />
              </div>

              {/* Title */}
              <h3
                className="
    mt-6
    text-2xl
    font-bold
    text-slate-900
    transition-colors
    duration-500
    group-hover:text-blue-600
    "
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                className="
    mt-4
    text-base
    leading-8
    text-slate-500
    "
              >
                {f.desc}
              </p>

            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
