'use client'

import Image from 'next/image'

export default function StudentZonePage() {
  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
       <div className="bg-lime-50 flex flex-col items-center justify-center p-10">

  <Image
    src="/CoachingLogo.png"
    alt="Logo"
    width={140}
    height={140}
    className="mb-8"
  />

  <div className="text-center">

    <div className="border-t-[5px] border-lime-500 w-80 mx-auto mb-4"></div>

    <h4 className="text-7xl font-bold text-lime-500 leading-none">
      Student Zone
    </h4>

    {/* <h1 className="text-7xl font-bold text-lime-500 leading-none">
      Zone
    </h1> */}

    <div className="border-b-[5px] border-lime-500 w-80 mx-auto mt-4"></div>

  </div>

</div>
        

        {/* Right Side */}
        <div className="p-12">

          <h1 className="text-6xl text-lime-500 font-light mb-16">
            Log In
          </h1>

          {/* Session */}
          <div className="mb-14 border-b pb-4">
            <select className="w-full outline-none text-4xl bg-white">
              <option>2025-26</option>
              <option>2024-25</option>
            </select>
          </div>

          {/* Application Number */}
          <div className="mb-14 border-b pb-4">
            <input
              type="text"
              placeholder="Application Form Number"
              className="w-full outline-none text-3xl"
            />
          </div>

          {/* Password */}
          <div className="mb-14 border-b pb-4">
            <input
              type="password"
              placeholder="Password (DOB as DDMMYYYY)"
              className="w-full outline-none text-3xl"
            />
          </div>

          {/* Login Button */}
          <button className="w-full py-5 rounded-full bg-lime-100 border border-lime-400 text-3xl font-bold hover:bg-lime-200 transition">
            Login
          </button>

          <div className="mt-10 text-center text-2xl">
            Forgot Password?
            <span className="text-lime-500 font-semibold cursor-pointer ml-2">
              Click Here
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}