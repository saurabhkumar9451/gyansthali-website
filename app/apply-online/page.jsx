'use client'

export default function ApplyOnlinePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">

      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto mb-8">

        <div className="grid grid-cols-4 gap-2 text-center">

          <div className="bg-lime-200 py-4 rounded-md font-semibold">
            1. Course Details
          </div>

          <div className="bg-blue-100 py-4 rounded-md font-semibold">
            2. Test & Personal Info
          </div>

          <div className="bg-blue-100 py-4 rounded-md font-semibold">
            3. Review & Pay Online
          </div>

          <div className="bg-blue-100 py-4 rounded-md font-semibold">
            4. All Done!
          </div>

        </div>

      </div>

      {/* Message */}
      <div className="max-w-4xl mx-auto bg-lime-100 text-center text-red-600 font-bold py-2 mb-6">
        No Admission found.
      </div>

      {/* Form */}
      <div className="max-w-6xl mx-auto bg-white shadow border rounded">

        {/* Header */}
        <div className="bg-sky-100 px-6 py-4 text-3xl text-sky-700">
          Apply Online - Course Information
        </div>

        {/* Fields */}
        <div className="p-6 grid md:grid-cols-4 gap-8">

          <div>
            <label className="font-bold block mb-2">
              Academic Session
            </label>

            <select className="w-full border rounded p-3">
              <option>2026-27</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Study Mode
            </label>

            <select className="w-full border rounded p-3">
              <option>Offline</option>
              <option>Online</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Target Examination
            </label>

            <select className="w-full border rounded p-3">
              <option>JEE(Main + Advanced)</option>
              <option>NEET</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Target Class
            </label>

            <select className="w-full border rounded p-3">
              <option>IX</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Study Center
            </label>

            <select className="w-full border rounded p-3">
              <option>Select</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Student Name
            </label>

            <input
              className="w-full border rounded p-3"
              type="text"
            />
          </div>

          <div>
            <label className="font-bold block mb-2">
              Mobile No.
            </label>

            <input
              className="w-full border rounded p-3"
              type="text"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />

            <span>
              I Agree to receive SMS/Call
            </span>
          </div>

        </div>

        {/* Button */}
        <div className="text-center pb-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded">
            Next
          </button>
        </div>

        <hr />

        <div className="text-center py-8 text-gray-600">
          If you have already filled form before,
          <span className="text-blue-600 ml-2 cursor-pointer">
            Login here
          </span>
        </div>

      </div>

    </div>
  )
}