import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
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
        <span className="text-blue-500">VIDYAPEETH</span>
      </span>
    </Link>
  )
}
