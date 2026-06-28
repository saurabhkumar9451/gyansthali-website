// 'use client'

// import CountUp from 'react-countup'
// import { stats } from '@/lib/data'

// export function StatsBar() {
//   return (
//     <section className="border-b border-border bg-primary text-primary-foreground">
//       <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">

//         <div className="text-center">
//           <p className="font-heading text-3xl font-extrabold sm:text-4xl">
//             <CountUp end={25} duration={2} />K+
//           </p>
//           <p className="mt-1 text-sm text-primary-foreground/80">
//             Students Mentored
//           </p>
//         </div>

//         <div className="text-center">
//           <p className="font-heading text-3xl font-extrabold sm:text-4xl">
//             <CountUp end={500} duration={2} />+
//           </p>
//           <p className="mt-1 text-sm text-primary-foreground/80">
//             Selections in IITs
//           </p>
//         </div>

//         <div className="text-center">
//           <p className="font-heading text-3xl font-extrabold sm:text-4xl">
//             <CountUp end={1200} duration={2} />+
//           </p>
//           <p className="mt-1 text-sm text-primary-foreground/80">
//             Medical Selections
//           </p>
//         </div>

//         <div className="text-center">
//           <p className="font-heading text-3xl font-extrabold sm:text-4xl">
//             <CountUp end={18} duration={2} />
//           </p>
//           <p className="mt-1 text-sm text-primary-foreground/80">
//             Years of Excellence
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }


'use client'

import CountUp from 'react-countup'
import {
  Users,
  Trophy,
  Stethoscope,
  Award,
} from 'lucide-react'

export function StatsBar() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-20
      bg-gradient-to-r
      from-slate-900
      via-blue-900
      to-blue-700
      "
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-8">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Students */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <Users className="mx-auto mb-5 h-12 w-12 text-cyan-300 group-hover:scale-110 transition-all duration-500" />

            <h2 className="text-6xl font-bold text-white">
              <CountUp end={25} duration={2} />K+
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              Students Mentored
            </p>

          </div>

          {/* IIT */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <Trophy className="mx-auto mb-5 h-12 w-12 text-yellow-300 group-hover:scale-110 transition-all duration-500" />

            <h2 className="text-6xl font-bold text-white">
              <CountUp end={500} duration={2} />+
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              Selections in IITs
            </p>

          </div>

          {/* Medical */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <Stethoscope className="mx-auto mb-5 h-12 w-12 text-green-300 group-hover:scale-110 transition-all duration-500" />

            <h2 className="text-6xl font-bold text-white">
              <CountUp end={1200} duration={2} separator="," />+
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              Medical Selections
            </p>

          </div>

          {/* Years */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <Award className="mx-auto mb-5 h-12 w-12 text-orange-300 group-hover:scale-110 transition-all duration-500" />

            <h2 className="text-6xl font-bold text-white">
              <CountUp end={18} duration={2} />
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              Years of Excellence
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}