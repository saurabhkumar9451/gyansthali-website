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
              <p>Infogyansthalividyapeeth<br></br>@gmail.com</p>
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