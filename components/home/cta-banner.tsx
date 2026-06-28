import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div
  className="
  relative
  overflow-hidden
  rounded-[40px]
  bg-gradient-to-br
  from-slate-900
  via-blue-900
  to-indigo-700
  px-6
  py-20
  text-center
  text-white
  shadow-2xl
  sm:px-12
"
>
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,white/0.12,transparent_45%)]" />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            Ready to begin your journey to AIR?
          </h2>
          <p className="max-w-2xl text-lg text-slate-200">
            Book a free counselling session and get a personalised roadmap from
            our academic mentors today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
  asChild
  size="lg"
  variant="outline"
  className="
  rounded-full
  border-white/40
  bg-transparent
  text-white
  hover:bg-white
  hover:text-slate-900
  transition-all
  duration-300
"
>

              <Link href="/contact#admission">
                Apply for Admission <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
