import { motion } from 'framer-motion'

export default function AdmissionEnquiryPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Heading */}
      <div className="bg-lime-100 py-10">
        <h1 className="text-center text-5xl font-bold">
          Call us on these Numbers for Admission & Service Support
        </h1>
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 py-12">

        {/* Left side */}
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-20 text-center"
></motion.div>

        <div className="grid md:grid-cols-2 gap-6">

  <div
    className="
    group
    rounded-3xl
    bg-white/80
    backdrop-blur-md
    border border-slate-200
    p-8
    shadow-lg
    transition-all duration-500
    hover:-translate-y-2
    hover:shadow-2xl
    hover:border-blue-300
    "
  >
    <div
      className="
      flex h-16 w-16 items-center justify-center
      rounded-2xl
      bg-gradient-to-r
      from-blue-500
      to-cyan-400
      text-white
      shadow-lg
      group-hover:rotate-12
      transition-all duration-500
      "
    >
      {/* <MapPin size={30} /> */}
    </div>

    <h3 className="mt-6 text-3xl font-bold text-slate-900">
      Visit Us
    </h3>

    <p className="mt-4 text-lg text-slate-600 leading-8">
      Akbarpur Ambedkar Nagar 
      <br />
       224168
    </p>
  </div>

        {/* Right side */}
        <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="
  bg-white
  rounded-3xl
  shadow-2xl
  p-10
  transition-all
  duration-500
  hover:shadow-blue-200
"
></motion.div>

          <h2 className="text-5xl font-bold text-center mb-10">
            Admission Enquiry Form
          </h2>

          <div className="space-y-7">

            <div>
              <label className="font-semibold text-xl">
                Name
              </label>

              <input
               className="
w-full
border
rounded-2xl
p-4
mt-2
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
              />
            </div>

            <div>
              <label className="font-semibold text-xl">
                Mobile
              </label>

              <input
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold text-xl">
                Email
              </label>

              <input
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold text-xl">
                Class
              </label>

              <select className="w-full border rounded-xl p-4 mt-2">
                <option>Select Class</option>
                <option>8th</option>
                <option>9th</option>
                <option>10th</option>
                <option>11th</option>
                <option>12th</option>
              </select>
            </div>

            <div className="text-center">
              <button
               className="
bg-gradient-to-r
from-blue-600
to-cyan-500
text-white
px-10
py-4
rounded-2xl
shadow-lg
transition-all
duration-500
hover:scale-105
hover:shadow-2xl
">
                Submit
              </button>
            </div>

          </div>

        </div>

      // </div>

    // </div>
  )
}