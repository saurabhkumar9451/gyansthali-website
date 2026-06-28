import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by students & parents"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
  key={t.name}
  className="
    group
    flex flex-col
    rounded-3xl
    border border-border
    bg-background
    p-8
    transition-all
    duration-500
    hover:-translate-y-3
    hover:shadow-2xl
    hover:border-blue-500
    hover:bg-gradient-to-br
    hover:from-blue-50
    hover:to-white
  "
>
             <div
  className="
    flex h-14 w-14 items-center justify-center
    rounded-2xl bg-blue-50
    transition-all duration-500
    group-hover:scale-110
    group-hover:rotate-12
  "
>
  <Quote className="size-7 text-blue-600" />
</div>
              <blockquote
  className="
    mt-6 flex-1
    text-pretty
    leading-relaxed
    text-gray-600
    text-base
  "
>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="text-lg font-bold text-gray-900"> {t.name}</p>
                <p className="mt-1 text-sm text-gray-500">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
