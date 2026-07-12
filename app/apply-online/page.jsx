'use client'
import { useState } from 'react';
import { saveAdmission } from "../../components/services/admissionService";
import { useRouter } from "next/navigation";

export default function ApplyOnlinePage() {



  const [formData, setFormData] = useState({
    academicSession: "2026-27",
    studyMode: "Offline",
    course: "",
    targetClass: "",
    studyCenter: "Akbarpur, Ambedkar Nagar",
    fullName: "",
    mobile: "",
    email: "",
    board: "",
    agree: false,
  });

  const router = useRouter();
  const studentId = 1; // Temporary, later from JWT Login
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.course ||
      !formData.targetClass ||
      !formData.board ||
      !formData.fullName ||
      !formData.mobile ||
      !formData.email
    ) {
      alert("Please fill all mandatory fields.");
      return;
    }

    if (formData.mobile.length !== 10) {
      alert("Mobile number must be 10 digits.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept SMS/Call agreement.");
      return;
    }

    const data = {
      ...formData,
      studentId: studentId
    };

    //await saveAdmission(data);

    try {
      
      const response = await saveAdmission(data);

      localStorage.setItem(
        "admissionNo",
        response.data.admissionNo
      );

      alert("Admission Saved Successfully");

      router.push("/apply-online/review");

      console.log(response.data);

      setFormData({
        academicSession: "2026-27",
        studyMode: "Offline",
        course: "",
        targetClass: "",
        studyCenter: "Akbarpur, Ambedkar Nagar",
        fullName: "",
        mobile: "",
        email: "",
        board: "",
        agree: false,
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-8 text-gray-900 dark:text-white">

          {/* Progress Bar */}

          <div className="max-w-6xl mx-auto mb-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-center">
              <div className="bg-lime-200 dark:bg-lime-800 py-4 rounded-md font-semibold">
                1. Course Details
              </div>

              <div className="bg-blue-100 dark:bg-slate-800 py-4 rounded-md font-semibold">
                2. Test & Personal Info
              </div>

              <div className="bg-blue-100 dark:bg-slate-800 py-4 rounded-md font-semibold">
                3. Review & Pay Online
              </div>

              <div className="bg-blue-100 dark:bg-slate-800 py-4 rounded-md font-semibold">
                4. All Done!
              </div>

            </div>

          </div>

          {/* Message */}
          <div className="max-w-4xl mx-auto bg-lime-100 dark:bg-lime-900/30 text-center text-red-600 font-bold py-2 mb-6 rounded">        No Admission found.
          </div>

          <div className="
  max-w-6xl
  mx-auto
  bg-white
  dark:bg-slate-900
  shadow
  border
  border-gray-200
  dark:border-slate-700
  rounded
  ">
            {/* Header */}
            <div className="
  bg-sky-100
  dark:bg-slate-800
  px-6
  py-4
  text-2xl
  md:text-3xl
  text-sky-700
  dark:text-sky-400
  ">          Apply Online - Course Information
            </div>

            {/* Fields */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="font-bold block mb-2 text-gray-800 dark:text-gray-200">
                  Academic Session
                </label>

                <select
                  name="academicSession"
                  value={formData.academicSession}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="2026-27">2026-27</option>
                  <option value="2027-28">2027-28</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-2">
                  Study Mode
                </label>

                <select
                  name="studyMode"
                  value={formData.studyMode}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="">Select</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-2">
                  Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="">Select</option>
                  <option value="JEE(Main + Advanced)">
                    JEE(Main + Advanced)
                  </option>
                  <option value="NEET">
                    NEET
                  </option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-2">
                  Target Class *
                </label>

                {/* <select className="w-full border rounded p-3">
                    <option>11</option>
                    <option>12</option>
                    <option>12 Pass</option>
                    <option>Dropper</option>
                  </select> */}
                <select
                  name="targetClass"
                  value={formData.targetClass}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="">Select</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="12 Pass">12 Pass</option>
                  <option value="Dropper">Dropper</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-2">
                  Study Center
                </label>

                {/* <select className="w-full border rounded p-3">
                    <option>Akbarpur, Ambedkar Naga</option>
                  </select> */}
                <select
                  name="studyCenter"
                  value={formData.studyCenter}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="Akbarpur, Ambedkar Nagar">
                    Akbarpur, Ambedkar Nagar
                  </option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-2">
                  Student Name *
                </label>

                <input
                  name="fullName"
                  className="w-full border rounded p-3"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="font-bold block mb-2">
                  Mobile No *
                </label>

                <input
                  name="mobile"
                  className="w-full border rounded p-3"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              {/* add and check with frontend */}
              <div>
                <label className="font-bold block mb-2">
                  Email *
                </label>

                <input
                  name="email"
                  className="w-full border rounded p-3"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <select
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="">Select Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="UP Board">UP Board</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <select
                  name="studyCenter"
                  value={formData.studyCenter}
                  onChange={handleChange}
                  className="w-full border rounded p-3"
                >
                  <option value="Akbarpur, Ambedkar Nagar">
                    Akbarpur, Ambedkar Nagar
                  </option>
                </select>
              </div>

              <div className="flex items-center">
                {/* {/* <input type="checkbox" className="mr-2" /> */}
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agree: e.target.checked,
                    })
                  }

                  className="mr-2"
                />
                <span>
                  I Agree to receive SMS/Call
                </span>
              </div>

            </div>

            {/* Button */}
            <div className="flex justify-center gap-5 pb-10">
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded"> */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded"
              >
                <span>Next -</span>
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="border border-gray-400 px-8 py-3 rounded"
              >
                Cancel
              </button>
            </div>

            <hr />

            <div className="text-center py-8 text-gray-600 dark:text-gray-300">
              If you have already filled form before,
              <span className="text-blue-600 dark:text-blue-400 ml-2 cursor-pointer">
                Login here
              </span>
            </div>

          </div>

        </div>
      </form>
    </>
  )

}