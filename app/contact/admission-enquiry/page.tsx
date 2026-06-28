export default function AdmissionEnquiryPage() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Heading */}
            <div className="bg-lime-100 py-10">
               <h1 className="text-center text-50xl font-extrabold" style={{fontSize:"250%"}}>
                    Call us on these Numbers for Admission & Service Support
                </h1>
            </div>

            <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 py-12">

                {/* Left side */}
                <div className="space-y-20 text-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Call Center, Help Desk
                        </h2>

                        <p className="text-2xl">
                            <strong>Office Contact Hours :</strong> 8:00 AM - 8:00 PM
                        </p>

                        <p className="text-2xl mt-5">
                            <strong>Contact No :</strong> 0744 2777700
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Counselling, Help Desk
                        </h2>

                        <p className="text-2xl">
                            <strong>Email :</strong> admissions@gyansthali.com
                        </p>

                        <p className="text-2xl mt-5">
                            <strong>Contact No :</strong> +91 9876543210
                        </p>
                    </div>

                </div>

                {/* Right side */}
                <div className="bg-white rounded-2xl shadow-xl p-10">

                    <h2 className="text-5xl font-bold text-center mb-10">
                        Admission Enquiry Form
                    </h2>

                    <div className="space-y-7">

                        <div>
                            <label className="font-semibold text-xl">
                                Name
                            </label>

                            <input
                                className="w-full border rounded-xl p-4 mt-2"
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

                        <div className="flex justify-center mt-10">
                            <button
                                type="submit"
                                className="!bg-blue-600 !text-white px-10 py-3 rounded text-2xl font-bold shadow-lg"
                                style={{ padding: "10px", marginLeft: "10%" }}
                            >
                                Submit
                            </button>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}