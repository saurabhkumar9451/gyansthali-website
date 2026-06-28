
'use client'

import React from 'react'
import Link from 'next/link'
import {
  X,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  BookOpen,
  Users,
} from 'lucide-react'

interface SidebarMenuProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navItems = [
  {
    label: 'Admissions',
    icon: <GraduationCap size={24} />,
    children: [
      { label: 'Apply Online', href: '/apply-online' },
      { label: 'Fee Structure', href: '/fee-structure' },
      { label: 'Scholarships', href: '/scholarships' },
      { label: 'Reward Programmes', href: '/reward-programmes' },
      { label: 'Fee Refund Rules', href: '/fee-refund-rules' },
    ],
  },
  {
    label: 'Courses',
    icon: <BookOpen size={24} />,
    children: [
      { label: 'IIT-JEE', href: '/courses' },
      { label: 'NEET', href: '/courses' },
      { label: 'Foundation', href: '/courses' },
    ],
  },
  {
    label: 'Student Zone',
    icon: <Users size={24} />,
    children: [
      { label: 'Student Zone', href: '/student-zone' },
      { label: 'Pay Fee Online', href: '/pay-fee-online' },
      { label: 'Exam Calendar', href: '/exam-calendar' },
    ],
  },
]

export default function SidebarMenu({
  open,
  setOpen,
}: SidebarMenuProps) {
  const [activeMenu, setActiveMenu] = React.useState<number | null>(null)

  return (
    <div
      className={`
    fixed
    top-0
    left-0
    h-screen
    w-[28vw]
    min-w-[320px]
    max-w-[450px]
bg-white dark:bg-slate-900
    shadow-2xl
    z-50
    transition-transform
    duration-500
    ${open ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'}
  `}
    >
      <div className="h-[85px] bg-white dark:bg-[#111827] border-b relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute left-8 top-6 text-gray-600 dark:text-white"
        >
          <X size={40} />
        </button>
      </div>

      {/* Menu */}
      {navItems.map((item, index) => (
        <div
          key={item.label}
          className="border-b border-gray-200 dark:border-slate-700"
        >
          <button
            className="
w-full
flex
items-center
justify-between
px-6
py-6
text-left
text-gray-900
dark:text-white
"
            onClick={() =>
              setActiveMenu(activeMenu === index ? null : index)
            }
          >
            <div className="flex items-center gap-4">
              {item.icon}

              <span className="text-2xl font-medium text-gray-900 dark:text-white">
                {item.label}
              </span>
            </div>

            {/* {activeMenu === index ? (
              <ChevronUp size={28} />
            ) : (
              <ChevronDown size={28} />
            )} */}

            <ChevronDown
              size={28}
              className={`
               transition-transform duration-300
               ${activeMenu === index ? 'rotate-180' : ''}
             `}
            />
          </button>

          <div
            className={`
    grid
    transition-all
    duration-700
    ease-[cubic-bezier(0.4,0,0.2,1)]
    ${activeMenu === index
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
              }
  `}
          >
            <div className="overflow-hidden bg-gray-50 dark:bg-slate-900">
              {item.children.map((child) => (
//                 <Link
//                   key={child.href}
//                   href={child.href}
//                   className="
// flex
// items-center
// gap-3
// px-8
// py-5
// text-xl
// text-gray-900
// dark:text-white
// hover:bg-gray-100
// dark:hover:bg-slate-800
// transition-all duration-300
// "
//                   onClick={() => setOpen(false)}
//                 >
//                   <span className="text-gray-600 dark:text-gray-300 font-bold">
//                     &gt;
//                   </span>

//                   {child.label}
//                 </Link>
<Link
  key={child.href}
  href={child.href}
  className="
    flex
    items-center
    gap-3
    px-8
    py-5
    text-xl
    text-gray-900
    dark:text-white
    hover:bg-gray-100
    dark:hover:bg-slate-800
    transition-all duration-300
  "
  onClick={() => setOpen(false)}
>
  <span className="text-blue-500 font-bold">›</span>
  <span>{child.label}</span>
</Link>
              ))}
            </div>
          </div>



        </div>
      ))}
    </div>
  )
}