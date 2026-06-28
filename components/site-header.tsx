'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Phone, MessageCircle, Laptop, IndianRupee } from "lucide-react";
import { ChevronRight } from 'lucide-react'

const navItems = [
  {
    label: 'Admissions',
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
    children: [
      { label: 'IIT-JEE', href: '/courses' },
      { label: 'NEET', href: '/courses' },
      { label: 'Foundation', href: '/courses' },
    ],
  },
  {
    label: 'Student Zone',
    children: [
      { label: 'Student Zone', href: '/student-zone' },
      { label: 'Pay Fee Online', href: '/pay-fee-online' },
      { label: 'Exam Calendar', href: '/exam-calendar' },
      { label: 'EDUZone', href: '/eduzone' },
    ],
  },
  {
    label: 'Results',
    children: [
      { label: 'JEE Results', href: '/results' },
      { label: 'NEET Results', href: '/results' },
    ],
  },
  {
    label: 'About Us',
    children: [
      { label: 'Welcome Words', href: '/about/welcome-words' },
      { label: 'Success Story', href: '/about/success-story' },
      { label: 'Gyansthali Team', href: '/about/team' },
      { label: 'Why Gyansthali', href: '/about/why-us' },
      { label: 'Investors', href: '/about/investors' },
      { label: 'Media Box', href: '/about/media-box' },
    ],
  },
  {
    label: 'Contact Us',
    children: [
      { label: 'Admission Enquiry', href: '/contact/admission-enquiry' },
      { label: 'Counselling', href: '/contact/counselling' },
      { label: 'Career', href: '/contact/career' },
      { label: 'Reso-Business', href: '/contact/business' },
      { label: "Street View", href: '/contact/street-view' },
    ],
  },
]

export function SiteHeader({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {

  const [activeMenu, setActiveMenu] = React.useState<number | null>(null)

  return (
<header className="sticky top-0 z-50 bg-[#020B1F] border-t-4 border-lime-500 shadow-xl">
        <div className="bg-lime-500 text-white text-sm">

        <div className="bg-lime-500 text-black text-lg font-bold">
<div className="mx-auto max-w-screen-2xl flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <Phone className="animate-bounce" size={18} />
                <span>+91-8881166262</span>
              </div>

              {/* <div className="flex items-center gap-2">
                <MessageCircle className="animate-bounce" size={18} />
                <span>73400 10345</span>
              </div> */}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Laptop className="animate-bounce" size={18} />
                <span>Apply Online</span>
              </div>

              <span>||</span>

              <div className="flex items-center gap-2">
                <IndianRupee className="animate-bounce" size={18} />
                <span>Pay Fee Online</span>
              </div>
            </div>

          </div>
        </div>
      </div>
<div className="max-w-[1900px] mx-auto flex items-center justify-between h-24 px-4 lg:px-6">
         <div className="flex-shrink-0">
  <Logo />
</div>

        {/* Desktop Menu */}
<nav className="hidden xl:flex justify-center items-center gap-2">
         {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
            >
              <button
                className="
                 text-[15px]
                 font-semibold
                 text-gray-300
                 hover:text-lime-400
                   transition-all
                    duration-300
                      px-2
                     py-2
                    whitespace-nowrap">
                {item.label}
              </button>

              <div
                className="
absolute
left-0
top-full
mt-1
min-w-[280px]
bg-white
border
shadow-2xl
rounded-2xl
z-50
overflow-hidden

opacity-0
invisible
translate-y-2

transition-all
duration-500
ease-in-out

group-hover:opacity-100
group-hover:visible
group-hover:translate-y-0
"
              >

                {item.children.map((child) => (
                  <Link
                    key={child.href + child.label}
                    href={child.href}

                    className="
                     flex items-center gap-3
                     px-5 py-3
                    text-[15px]
                    text-gray-700
                    whitespace-nowrap

                   transition-all
                   duration-300

                 hover:bg-gray-100
                 hover:text-lime-600
                  hover:pl-8"
                  >

                    <ChevronRight
                      size={14}
                      className="transition-all duration-300 group-hover:translate-x-1" />

                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

<div className="relative z-[9999] flex-shrink-0 flex items-center gap-2">  
            <ThemeToggle />

         <Button
asChild
variant="outline"
className="
hidden xl:inline-flex
h-14
px-4
rounded-full
text-[16px]
font-semibold
border-gray-700
text-white
bg-[#111827]
hover:bg-slate-800"
>
            <Link href="/login">Student Login</Link>
          </Button>

          <Button
asChild
className="
hidden xl:inline-flex
h-14
px-8
rounded-full
text-[15px]
font-semibold
bg-blue-600
hover:bg-blue-700"
>
            <Link href="/contact#admission">Apply Now</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
           className="xl:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {open && (
<div
className="
fixed
top-0
left-0
w-[320px]
h-screen
bg-white
shadow-2xl
overflow-y-auto
z-50
"
>

      <div className="flex items-center justify-between p-5 border-b">
        <h1 className="text-2xl font-bold">MENU</h1>

        <button onClick={() => setOpen(false)}>
          <X size={28}/>
        </button>
      </div>


      <div className="divide-y">
  {navItems.map((item, index) => (
    <div key={item.label}>

      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-lg"
        onClick={() =>
          setActiveMenu(activeMenu === index ? null : index)
        }
      >
        {item.label}

        <span>
          {activeMenu === index ? "-" : "+"}
        </span>
      </button>

      {activeMenu === index && (
        <div className="bg-gray-50">

          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-10 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}

        </div>
      )}

    </div>
  ))}
</div>

  </div>
// </div>
)} */}

    </header>
  )
}