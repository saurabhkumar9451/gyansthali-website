import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
//     <Link
//       href="/"
//       className={cn('flex items-center gap-2.5 font-heading', className)}
//       aria-label="GYANSTHALI VIDHYAPEETH home"
//     >
//             <Image
//         src="/CoachingLogo.png"
//         alt="Gyansthali Vidhyapeeth"
//         width={50}
//         height={50}
//       />


//       {/* <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//         <GraduationCap className="size-5" />
//       </span> */}
// <span className="hidden 2xl:block text-xl font-extrabold tracking-tight text-white whitespace-nowrap">
//     GYANSTHALI
//   <span className="text-blue-500">
//     VIDHYAPEETH
//   </span>
// </span>
//     </Link>

<Link
  href="/"
  className="flex items-center gap-2"
  aria-label="GYANSTHALI VIDHYAPEETH home"
>
  <Image
    src="/CoachingLogo.png"
    alt="Gyansthali Vidhyapeeth"
    width={50}
    height={50}
  />

  <span className="hidden lg:block text-lg 2xl:text-xl font-extrabold text-white whitespace-nowrap">
    GYANSTHALI
    <span className="text-blue-500">VIDHYAPEETH</span>
  </span>
</Link>
  )
}
