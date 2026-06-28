'use client'

import { feeData } from "./jee-advanced/data";

import Link from 'next/link'
import Image from 'next/image'

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">

      {/* Heading */}
      <div className="max-w-6xl mx-auto">

        <div className="bg-lime-100 text-center py-2">
          <h1 className="text-4xl font-bold">
            Gyansthali Fee Structure 2026-27 Academic Session
          </h1>
        </div>

        <p className="text-center text-2xl mt-4 mb-6">
          Gyansthali Fee Structure 2026-27 for JEE Advanced, JEE Main,
          NEET, AIIMS and Foundation Program.
        </p>

        {/* Banner */}
        <div className="flex justify-center mb-8">
          <Image
            src="/admission-banner.jpg"
            alt="Admission Open"
            width={500}
            height={220}
            className="border"
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded overflow-hidden">

          <table className="w-full border-collapse">

            <thead className="bg-lime-100">
              <tr>
                <th className="border p-4 text-center">Target</th>
                <th className="border p-4 text-center">View</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-4 text-center text-blue-600">
                  JEE Advanced
                </td>

                <td className="border p-4 text-center">
                  <Link href="/fee-structure/jee-advanced">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                      Click Here
                    </button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="border p-4 text-center text-blue-600">
                  JEE Main
                </td>

                <td className="border p-4 text-center">
                  <Link href="/fee-structure/jee-advanced">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                      Click Here
                    </button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="border p-4 text-center text-blue-600">
                  NEET / AIIMS
                </td>

                <td className="border p-4 text-center">
                  <Link href="/fee-structure/jee-advanced">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                      Click Here
                    </button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="border p-4 text-center text-blue-600">
                  Foundation (Class V to X)
                </td>

                <td className="border p-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                    Click Here
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

          {/* Bottom Button */}
          <div className="text-center py-6">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded">
              Online / Digital Programs
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}