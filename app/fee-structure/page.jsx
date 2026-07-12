// 'use client'

// import { feeData } from "./jee-advanced/data";

// import Link from 'next/link'
// import Image from 'next/image'

// export default function FeeStructurePage() {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-8">
//       {/* Heading */}
//       <div className="max-w-5xl mx-auto px-4">
//        <div
//   className="
//   bg-white
//   dark:bg-slate-900
//   rounded-3xl
//   shadow-2xl
//   overflow-hidden
//   border
//   border-gray-200
//   dark:border-slate-700
//   max-w-3xl
//   mx-auto
// "
// >
//           <h1
//             className="
// text-xl
// sm:text-2xl
// md:text-4xl
// font-bold
// text-slate-900
// dark:text-white
// "
//           >
//             Gyansthali Fee Structure 2026-27 Academic Session
//           </h1>
//         </div>

//         <p className="text-center text-base md:text-2xl mt-4 mb-6 text-gray-700 dark:text-gray-300">          Gyansthali Fee Structure 2026-27 for JEE Advanced, JEE Main,
//           NEET, AIIMS and Foundation Program.
//         </p>

//         {/* Banner */}
//         <div className="flex justify-center mb-8">
//           <Image
//             src="/admission-banner.jpg"
//             alt="Admission Open"
//             width={800}
//             height={350}
//             className="border rounded-lg w-full max-w-[500px] h-auto"
//           />
//         </div>

//         {/* Table */}
//         <div
// className="
// bg-white
// dark:bg-slate-900
// rounded-3xl
// shadow-2xl
// overflow-hidden
// border
// border-gray-200
// dark:border-slate-700
// "
// >
// <table className="w-full border-collapse">
//               <thead className="bg-lime-100 dark:bg-slate-800">
//               <tr>
//              <th className="border p-4 text-center">Target</th>
// <th className="border p-4 text-center">View</th>
//               </tr>
//             </thead>

//             <tbody>

//               <tr>
//                 <td className="border border-gray-300 dark:border-slate-700 p-4 text-center text-blue-600 dark:text-blue-400">
//                   JEE Advanced
//                 </td>

//                 <td className="border p-4 text-center">
//                   <Link href="/fee-structure/jee-advanced">
//                     <button className="
// bg-blue-600
// hover:bg-blue-700
// text-white
// px-4 md:px-6
// py-2
// rounded
// transition
// duration-300
// hover:scale-105
// ">
//                       Click Here
//                     </button>
//                   </Link>
//                 </td>
//               </tr>

//               <tr>
//                 <td className="border p-4 text-center text-blue-600">
//                   JEE Main
//                 </td>

//                 <td className="border p-4 text-center">
//                   <Link href="/fee-structure/jee-advanced">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
//                       Click Here
//                     </button>
//                   </Link>
//                 </td>
//               </tr>

//               <tr>
//                 <td className="border p-4 text-center text-blue-600">
//                   NEET / AIIMS
//                 </td>

//                 <td className="border p-4 text-center">
//                   <Link href="/fee-structure/jee-advanced">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
//                       Click Here
//                     </button>
//                   </Link>
//                 </td>
//               </tr>

//               <tr>
//                 <td className="border p-4 text-center text-blue-600">
//                   Foundation (Class V to X)
//                 </td>

//                 <td className="border p-4 text-center">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
//                     Click Here
//                   </button>
//                 </td>
//               </tr>

//             </tbody>

//           </table>

//           {/* Bottom Button */}
//           <div className="flex justify-center py-8 border-t">
//             {/* <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded"> */}
//             <button
//               className="
// bg-green-500
// hover:bg-green-600
// text-white
// px-4 md:px-8
// py-3
// rounded
// transition
// duration-300
// hover:scale-105
// "
//             >
//               Online / Digital Programs
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   )
// }


'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-8">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="bg-lime-100 dark:bg-slate-800 rounded-xl text-center py-3 px-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Gyansthali Fee Structure 2026-27 Academic Session
          </h1>
        </div>

        <p className="text-center text-base md:text-2xl mt-4 mb-6 text-gray-700 dark:text-gray-300">
          Gyansthali Fee Structure 2026-27 for JEE Advanced, JEE Main,
          NEET, AIIMS and Foundation Program.
        </p>

        {/* Banner */}
        <div className="flex justify-center mb-8">
          <Image
            src="/admission-banner.jpg"
            alt="Admission Open"
            width={800}
            height={350}
            className="w-full max-w-[800px] h-auto rounded-lg border"
          />
        </div>

        {/* Card */}
        <div className="
          w-full
          bg-white
          dark:bg-slate-900
          rounded-3xl
          shadow-2xl
          border
          border-gray-200
          dark:border-slate-700
          overflow-hidden
        ">

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-lime-100 dark:bg-slate-800">
                <tr>
                  <th className="border p-4 text-center dark:border-slate-700">
                    Target
                  </th>
                  <th className="border p-4 text-center dark:border-slate-700">
                    View
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-4 text-center text-blue-600 dark:text-blue-400 dark:border-slate-700">
                    JEE Advanced
                  </td>

                  <td className="border p-4 text-center dark:border-slate-700">
                    <Link href="/fee-structure/jee-advanced">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition hover:scale-105">
                        Click Here
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="border p-4 text-center text-blue-600 dark:text-blue-400 dark:border-slate-700">
                    JEE Main
                  </td>

                  <td className="border p-4 text-center dark:border-slate-700">
                    <Link href="/fee-structure/jee-main">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition hover:scale-105">
                        Click Here
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="border p-4 text-center text-blue-600 dark:text-blue-400 dark:border-slate-700">
                    NEET / AIIMS
                  </td>

                  <td className="border p-4 text-center dark:border-slate-700">
                    <Link href="/fee-structure/neet">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition hover:scale-105">
                        Click Here
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="border p-4 text-center text-blue-600 dark:text-blue-400 dark:border-slate-700">
                    Foundation (Class V to X)
                  </td>

                  <td className="border p-4 text-center dark:border-slate-700">
                    <Link href="/fee-structure/foundation">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition hover:scale-105">
                        Click Here
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center py-8 border-t dark:border-slate-700">
            <button className="
              bg-green-500
              hover:bg-green-600
              text-white
              px-6
              md:px-8
              py-3
              rounded-lg
              transition
              duration-300
              hover:scale-105
            ">
              Online / Digital Programs
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}