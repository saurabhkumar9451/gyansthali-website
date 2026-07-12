
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