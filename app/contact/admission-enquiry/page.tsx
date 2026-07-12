// 'use client';

// import { useState } from "react";
// import { saveEnquiry } from "@/components/services/enquiryService";
// export default function AdmissionEnquiryPage() {

//     const [formData, setFormData] = useState({
//   name: "",
//   mobile: "",
//   email: "",
//   message: ""
// });


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("Button clicked");

//   try {
//     const response = await saveEnquiry(formData);

//     alert("Enquiry Submitted Successfully");

//     console.log(response.data);

//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       message: ""
//     });

//   } catch (error) {
//     console.log(error);
//     alert("Something went wrong");
//   }
// };

//     return (
//         <>
//         <div className="min-h-screen bg-gray-100">

//             {/* Heading */}
//             <div className="bg-lime-100 py-10">
//                <h1 className="text-center text-50xl font-extrabold" style={{fontSize:"250%"}}>
//                     Call us on these Numbers for Admission & Service Support
//                 </h1>
//             </div>

//             <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 py-12">

//                 {/* Left side */}
//                 <div className="space-y-20 text-center">

//                     <div>
//                         <h2 className="text-4xl font-bold mb-8">
//                             Call Center, Help Desk
//                         </h2>

//                         <p className="text-2xl">
//                             <strong>Office Contact Hours :</strong> 8:00 AM - 8:00 PM
//                         </p>

//                         {/* <p className="text-2xl mt-5">
//                             <strong>Contact No :</strong> 0744 2777700
//                         </p> */}
//                     </div>

//                     <div>
//                         <h2 className="text-4xl font-bold mb-8">
//                             Counselling, Help Desk
//                         </h2>

//                         <p className="text-2xl">
//                             <strong>Email :</strong> Infogyansthalividyapeeth@gmail.com
//                         </p>

//                         <p className="text-2xl mt-5">
//                             <strong>Contact No :</strong> +91 8881166262
//                         </p>
//                     </div>

//                 </div>

//                 {/* Right side */}
//                 <div className="bg-white rounded-2xl shadow-xl p-10">

//                     <h2 className="text-5xl font-bold text-center mb-10">
//                         Admission Enquiry Form
//                     </h2>

//                     <div className="space-y-7">

//                         <div>
//                             <label className="font-semibold text-xl">
//                                 Name
//                             </label>

//                             <input
//                                 className="w-full border rounded-xl p-4 mt-2"
//                             />
//                         </div>

//                         <div>
//                             <label className="font-semibold text-xl">
//                                 Mobile
//                             </label>

//                             <input
//                                 className="w-full border rounded-xl p-4 mt-2"
//                             />
//                         </div>

//                         <div>
//                             <label className="font-semibold text-xl">
//                                 Email
//                             </label>

//                             <input
//                                 className="w-full border rounded-xl p-4 mt-2"
//                             />
//                         </div>

//                         <div>
//                             <label className="font-semibold text-xl">
//                                 Class
//                             </label>

//                             <select className="w-full border rounded-xl p-4 mt-2">
//                                 <option>Select Class</option>
//                                 <option>8th</option>
//                                 <option>9th</option>
//                                 <option>10th</option>
//                                 <option>11th</option>
//                                 <option>12th</option>
//                             </select>
//                         </div>

//                         <div className="flex justify-center mt-10">
//                             <button
//                                 type="submit"
//                                 className="!bg-blue-600 !text-white px-10 py-3 rounded text-2xl font-bold shadow-lg"
//                                 style={{ padding: "10px", marginLeft: "10%" }}
//                             >
//                                 Submit
//                             </button>
//                         </div>

//                     </div>

//                 </div>


//             </div>

//         </div>
//         </>
//     )
// }




'use client';

import { useState } from "react";
import { saveEnquiry } from "@/components/services/enquiryService";

export default function AdmissionEnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    studentClass: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Button clicked");
    console.log(formData);

    try {
      const response = await saveEnquiry(formData);

      console.log(response.data);

      alert("Enquiry Submitted Successfully");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
        studentClass: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Heading */}
      <div className="bg-lime-100 py-10">
        <h1
          className="text-center font-extrabold"
          style={{ fontSize: "250%" }}
        >
          Call us on these Numbers for Admission & Service Support
        </h1>
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 py-12">
        {/* Left Side */}
        <div className="space-y-20 text-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Call Center, Help Desk
            </h2>

            <p className="text-2xl">
              <strong>Office Contact Hours :</strong> 8:00 AM - 8:00 PM
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Counselling, Help Desk
            </h2>

            <p className="text-2xl">
              <strong>Email :</strong>
              {" "}Infogyansthalividyapeeth@gmail.com
            </p>

            <p className="text-2xl mt-5">
              <strong>Contact No :</strong> +91 8881166262
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-5xl font-bold text-center mb-10">
            Admission Enquiry Form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-7">
              {/* Name */}
              <div>
                <label className="font-semibold text-xl">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl p-4 mt-2"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="font-semibold text-xl">
                  Mobile
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl p-4 mt-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold text-xl">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl p-4 mt-2"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-semibold text-xl">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border rounded-xl p-4 mt-2"
                />
              </div>

              {/* Class */}
              <div>
                <label className="font-semibold text-xl">
                  Class
                </label>

                <select
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-2"
                >
                  <option value="">
                    Select Class
                  </option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
              </div>

              {/* Submit */}
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="!bg-blue-600 !text-white px-10 py-3 rounded text-2xl font-bold shadow-lg"
                  style={{
                    padding: "10px",
                    marginLeft: "10%",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}