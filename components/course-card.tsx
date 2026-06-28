// import Link from 'next/link'
// import { ArrowRight, Clock, MonitorPlay } from 'lucide-react'
// import type { Course } from '@/lib/data'
// import { Button } from '@/components/ui/button'
// import { cn } from '@/lib/utils'

// export function CourseCard({ course }: { course: Course }) {
//   const Icon = course.icon
//   return (
//     <div className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
//       <div className="flex items-center justify-between">
//         <span className="flex size-12 items-center justify-center rounded-xl bg-secondary">
//           <Icon className={cn('size-6', course.accent)} />
//         </span>
//         <span className="text-xs font-medium text-muted-foreground">
//           {course.duration}
//         </span>
//       </div>
//       <h3 className="mt-5 font-heading text-xl font-bold">{course.name}</h3>
//       <p className="mt-1 text-sm text-muted-foreground">{course.tagline}</p>

//       <div className="mt-4 flex flex-wrap gap-2">
//         {course.subjects.map((s) => (
//           <span
//             key={s}
//             className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
//           >
//             {s}
//           </span>
//         ))}
//       </div>

//       <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
//         {course.highlights.slice(0, 3).map((h) => (
//           <li key={h} className="flex items-start gap-2">
//             <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
//             {h}
//           </li>
//         ))}
//       </ul>

//       <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
//         <span className="flex items-center gap-1.5">
//           <Clock className="size-3.5" /> {course.duration}
//         </span>
//         <span className="flex items-center gap-1.5">
//           <MonitorPlay className="size-3.5" /> {course.mode}
//         </span>
//       </div>

//       <Button asChild variant="ghost" className="mt-4 justify-between px-0 hover:bg-transparent hover:text-primary">
//         <Link href="/contact#admission">
//           Enroll now <ArrowRight className="size-4" />
//         </Link>
//       </Button>
//     </div>
//   )
// }


//------------------------------

import Link from 'next/link'
import { ArrowRight, Clock, MonitorPlay } from 'lucide-react'
import type { Course } from '@/lib/data'
import { cn } from '@/lib/utils'

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white/80
      backdrop-blur-xl
      p-4
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-blue-400
      hover:shadow-2xl
      "
    >
      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-lime-500" />

      {/* Icon + Duration */}
      <div className="flex items-center justify-between">
        <div
          className="
          flex h-16 w-16 items-center justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-50
          to-cyan-100
          shadow-md
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
          "
        >
          <Icon className={cn('h-8 w-8', course.accent)} />
        </div>

        <span className="text-lg font-semibold text-slate-500">
          {course.duration}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-2xl font-bold text-slate-900">
        {course.name}
      </h3>

      {/* Tagline */}
      <p className="mt-2 text-sm text-slate-500">
        {course.tagline}
      </p>

      {/* Subjects */}
      <div className="mt-6 flex flex-wrap gap-3">
        {course.subjects.map((s) => (
          <span
            key={s}
            className="
            rounded-full
            bg-slate-100
            px-4 py-2
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:bg-blue-100
            "
          >
            {s}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {course.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-3 h-2 w-2 rounded-full bg-blue-600"></span>
            {h}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-5 border-t pt-4">
        <div className="flex gap-6 text-slate-500">
          <span className="flex items-center gap-2">
            <Clock size={18} />
            {course.duration}
          </span>

          <span className="flex items-center gap-2">
            <MonitorPlay size={18} />
            {course.mode}
          </span>
        </div>
      </div>

      {/* Button */}
      <Link
        href="/contact#admission"
        className="
        mt-8
        flex
        items-center
        justify-between
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        px-6
        py-4
        text-lg
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-500
        hover:scale-[1.03]
        hover:shadow-2xl
        "
      >
        Enroll Now

        <ArrowRight
          className="
          transition-transform
          duration-500
          group-hover:translate-x-2
          "
        />
      </Link>
    </div>
  )
}