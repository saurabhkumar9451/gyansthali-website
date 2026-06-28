export default function CounsellingPage() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Heading */}
            <div className="bg-lime-100 py-8">
                <h1 className="text-center text-7xl font-black">
                    Student's "Career Counselling"
                </h1>
            </div>

            {/* Main Section */}
            <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 py-16">

                {/* Left Side Image */}
                <div>
                    <img
                        src="/counselling-banner.jpg"
                        alt="Career Counselling"
                        className="w-full border-4 border-slate-700"
                    />
                </div>

                {/* Right Side Form */}
                <div className="space-y-6">

                    {/* First and Last Name */}
                    <div className="grid grid-cols-2 gap-10">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="h-20 border  px-6 text-2xl  py-9"
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            className="h-20 border  px-6 text-2xl"
                        />
                    </div>

                    {/* Mobile */}
                    <input
                        type="text"
                        placeholder="Mobile No."
                        className="w-full h-20 border  px-6 text-2xl  mt-8"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="E-mail Address"
                        className="w-full h-20 border  px-6 text-2xl mt-8"
                    />

                    {/* Class */}
                    <select className="w-full h-20 border px-7 text-2xl mt-8">
                        <option>--Select--</option>
                        <option>8th</option>
                        <option>9th</option>
                        <option>10th</option>
                        <option>11th</option>
                        <option>12th</option>
                    </select>

                    {/* Button */}
                    <div className="flex justify-center pt-8">
                        <button
                            className=" hover:bg-blue-700  text-3xl px-28 py-5  rounded-md mt-6"
                            style={{ marginTop: "20px", fontWidth: "50px", fontSize: "20px", 
                                backgroundColor:"blue", color:"white",padding:"10px"}}
                           
                        >

                            Get OTP
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}