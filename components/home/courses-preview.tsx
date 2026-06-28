import Link from 'next/link'
import { courses } from '@/lib/data'
import { CourseCard } from '@/components/course-card'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

// export function CoursesPreview() {
//   return (
//   <section
// className="
// relative
// overflow-hidden
// bg-gradient-to-b
// from-slate-50
// via-white
// to-blue-50
// "
// >
  
//       <SectionHeading
//         eyebrow="Programs"
//         title="Courses built for every milestone"
//         description="From early foundation to advanced exam mastery, choose a program designed around your goals."
//       />
//       <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {courses.map((course) => (
//           <CourseCard key={course.slug} course={course} />
//         ))}
//       </div>
//       <div className="mt-10 flex justify-center">
//         <Button
// asChild
// size="lg"
// className="
// rounded-full
// bg-gradient-to-r  
// from-blue-600
// to-cyan-500
// px-8
// shadow-xl
// transition-all
// duration-500
// hover:scale-105
// hover:shadow-2xl
// "
// >
//   <Link href="/courses">
//     View all course details
//   </Link>
// </Button>
//       </div>
//     </section>

    
//   )
// }

export function CoursesPreview() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-slate-50
      via-white
      to-blue-50
      py-20
      "
    >
      <div className="mx-auto max-w-[1800px] px-8 sm:px-12 lg:px-20 xl:px-28">

        <SectionHeading
          eyebrow="Programs"
          title="Courses built for every milestone"
          description="From early foundation to advanced exam mastery, choose a program designed around your goals."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            asChild
            size="lg"
            className="
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-8
            shadow-xl
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-2xl
            "
          >
            <Link href="/courses">
              View all course details
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}