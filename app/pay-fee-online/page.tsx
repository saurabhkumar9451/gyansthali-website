'use client'

export default function PayFeeOnlinePage() {
  return (
<div className="min-h-screen bg-gray-100 dark:bg-slate-900 py-8">
      {/* Heading */}
      <div className="max-w-5xl mx-auto">
     <div className="bg-lime-100 dark:bg-slate-700 text-center py-2">
  <h1 className="text-5xl font-bold text-black dark:text-white">
    Online Fee - Login
  </h1>
</div>
      </div>

      {/* Login Form */}
<div className="max-w-xl mx-auto mt-8 bg-white dark:bg-slate-800 border border-lime-200 dark:border-slate-700 rounded shadow">
<div className="bg-lime-100 dark:bg-slate-700 px-4 py-3 text-lg text-black dark:text-white">
            Login
        </div>

        <div className="p-8">

          {/* Roll Number */}
          <div className="mb-6">
<label className="font-semibold text-black dark:text-white">
                Roll Number <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
             className="w-full border rounded px-3 py-2 mt-2 bg-white dark:bg-slate-700 text-black dark:text-white border-gray-300 dark:border-slate-600"            />
          </div>

          {/* DOB */}
          <div className="mb-6">
            <label className="font-semibold">
              DOB (Date of Birth) <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-3 mt-2">
              <select className="border rounded px-3 py-2">
                <option>DD</option>
              </select>

              <select className="border rounded px-3 py-2">
                <option>Month</option>
              </select>

              <select className="border rounded px-3 py-2">
                <option>Year</option>
              </select>
            </div>
          </div>

          {/* Session */}
          <div className="mb-8">
            <label className="font-semibold">
              Session <span className="text-red-500">*</span>
            </label>

            <select
             className="w-full border rounded px-3 py-2 mt-2 bg-white dark:bg-slate-700 text-black dark:text-white border-gray-300 dark:border-slate-600">
              <option>2026-27</option>
            </select>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-2 rounded">
              Login
            </button>
          </div>

        </div>

      </div>

      {/* Payment Methods */}
<div className="max-w-4xl mx-auto mt-10 overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-slate-800">  <div className="grid md:grid-cols-2">

    {/* Left Side */}
    <div className="bg-gradient-to-b from-fuchsia-500 to-purple-500 p-14 flex flex-col justify-center">

      <h1 className="text-white text-5xl font-bold leading-tight">
        Fee Payment
        <br />
        Methods
      </h1>

      <div className="w-24 h-2 bg-orange-400 mt-8 rounded-full"></div>

    </div>

    {/* Right Side */}
    <div className="relative p-12">

      <h2 className="text-orange-500 text-4xl font-bold mb-10">
        We accept
      </h2>

<ul className="space-y-8 text-2xl text-gray-800 dark:text-gray-200">
          <li className="hover:text-purple-600 transition-all duration-300">
          • NetBanking
        </li>

        <li className="hover:text-purple-600 transition-all duration-300">
          • Debit Card
        </li>

        <li className="hover:text-purple-600 transition-all duration-300">
          • Credit Card
        </li>

        <li className="hover:text-purple-600 transition-all duration-300">
          • PayTM Wallet
        </li>

        <li className="hover:text-purple-600 transition-all duration-300">
          • BHIM UPI
        </li>
      </ul>

      {/* Animated Card Icon */}
      <div className="absolute top-10 right-10 animate-bounce">
        💳
      </div>

    </div>

  </div>

  {/* Bottom Orange Strip */}
  <div className="h-5 bg-orange-500"></div>

</div>

    </div>
  )
}