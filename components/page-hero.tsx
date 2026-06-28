import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border bg-card',
        className,
      )}
    >
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.1,transparent_55%)]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
