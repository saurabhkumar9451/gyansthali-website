// import Link from 'next/link'
// import { Mail, MapPin, Phone, Send, Globe, MessageCircle, Share2 } from 'lucide-react'
// import { Logo } from '@/components/logo'

// const linkGroups = [
//   {
//     title: 'Courses',
//     links: [
//       { label: 'JEE (Main + Advanced)', href: '/courses' },
//       { label: 'NEET', href: '/courses' },
//       { label: 'Foundation', href: '/courses' },
//       { label: 'Crash Courses', href: '/courses' },
//     ],
//   },
//   {
//     title: 'Company',
//     links: [
//       { label: 'About Us', href: '/about' },
//       { label: 'Results', href: '/results' },
//       { label: 'Contact Us', href: '/contact' },
//       { label: 'Student Login', href: '/login' },
//     ],
//   },
// ]

// export function SiteFooter() {
//   return (
//     <footer className="border-t border-border bg-card">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
//         <div className="space-y-4">
//           <Logo />
//           <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
//             GYANSTHALI VIDHYAPEETH is a premier coaching institute for IIT-JEE & NEET
//             preparation with expert faculty, smart classrooms, weekly test series
//             and excellent results.
//           </p>
//           <div className="flex gap-3">
//             {[Globe, MessageCircle, Send, Share2].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
//                 aria-label="Social link"
//               >
//                 <Icon className="size-4" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {linkGroups.map((group) => (
//           <div key={group.title}>
//             <h3 className="font-heading text-sm font-semibold">{group.title}</h3>
//             <ul className="mt-4 space-y-3">
//               {group.links.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div>
//           <h3 className="font-heading text-sm font-semibold">Get in touch</h3>
//           <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
//             <li className="flex items-start gap-3">
//               <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
//               <span>12 Knowledge Park, Sector 62, New Delhi, 110092</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <Phone className="size-4 shrink-0 text-primary" />
//               <a href="tel:+911140001234" className="hover:text-primary">
//                 +91 11 4000 1234
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <Mail className="size-4 shrink-0 text-primary" />
//               <a href="mailto:hello@apexacademy.in" className="hover:text-primary">
//                 hello@apexacademy.in
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-border">
//         {/* <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
//           <p>© {new Date().getFullYear()} Apex Academy. All rights reserved.</p>
//           <p>Built for ambitious learners.</p>
//         </div> */}
//       </div>
//     </footer>
//   )
// }

'use client'

import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/CoachingLogo.png"
              alt="Logo"
              width={60}
              height={60}
            />

            <h2 className="text-3xl font-bold">
              <span className="text-white">GYANSTHALI</span><br></br>
              <span className="text-blue-500">VIDHYAPEETH</span>
            </h2>
          </div>

          <p className="leading-8 text-gray-400">
            GYANSTHALI VIDHYAPEETH is a premier coaching institute for
            IIT-JEE & NEET preparation with expert faculty, smart
            classrooms and excellent results.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">

            {/* <div className="w-12 h-12 rounded-full bg-slate-800 hover:bg-lime-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <Facebook />
            </div>

            <div className="w-12 h-12 rounded-full bg-slate-800 hover:bg-lime-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <Instagram />
            </div>

            <div className="w-12 h-12 rounded-full bg-slate-800 hover:bg-lime-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <Youtube />
            </div> */}

            <div className="w-12 h-12 rounded-full bg-slate-800 hover:bg-lime-500 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <MessageCircle />
            </div>

          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Courses
          </h3>

          <div className="space-y-4">

            <Link
              href="/courses"
              className="block hover:text-lime-400 transition"
            >
              JEE (Main + Advanced)
            </Link>

            <Link
              href="/courses"
              className="block hover:text-lime-400 transition"
            >
              NEET
            </Link>

            <Link
              href="/courses"
              className="block hover:text-lime-400 transition"
            >
              Foundation
            </Link>

            <Link
              href="/courses"
              className="block hover:text-lime-400 transition"
            >
              Crash Courses
            </Link>

            <Link
              href="/courses"
              className="block hover:text-lime-400 transition"
            >
              Distance Learning
            </Link>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Quick Links
          </h3>

          <div className="space-y-4">

            <Link href="/about" className="block hover:text-lime-400">
              About Us
            </Link>

            <Link href="/results" className="block hover:text-lime-400">
              Results
            </Link>

            <Link href="/contact" className="block hover:text-lime-400">
              Contact Us
            </Link>

            <Link href="/student-zone" className="block hover:text-lime-400">
              Student Zone
            </Link>

            <Link href="/apply-online" className="block hover:text-lime-400">
              Apply Online
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl font-bold text-white mb-6">
            Get in Touch
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4">
              <MapPin className="text-lime-500" />
              <p>
                Akbarpur, Ambedkar Nagar, 224122 
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="text-lime-500" />
              <p>+91 888 11 66 262</p>
            </div>

            <div className="flex gap-4">
              <Mail className="text-lime-500" />
              <p>infogyansthalividyapeeth <br></br>@gmail.com</p>
            </div>

            <div className="flex gap-4">
              <Globe className="text-lime-500" />
              <p>www.gyansthali.com</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-gray-400">
            © 2026 Gyansthali Vidhyapeeth. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400 mt-3 md:mt-0">
            Designed with ❤️ by Gyansthali Team
          </p>

        </div>

      </div>

    </footer>
  )
}