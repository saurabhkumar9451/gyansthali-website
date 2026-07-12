
'use client';

import { useState } from "react";

export default function PayFeeOnlinePage() {

  const [paymentType, setPaymentType] = useState("existing");

  const [existingStudent, setExistingStudent] = useState({
    rollNumber: "",
    day: "",
    month: "",
    year: "",
    session: "2026-27",
  });

  const [newAdmission, setNewAdmission] = useState({
    admissionNo: "GYAN20260001",
    studentName: "Saurabh Kumar",
    course: "NEET",
    session: "2026-27",
    amount: 5000,
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-10 text-black dark:text-white">

      {/* Progress */}

      <div className="max-w-7xl mx-auto mb-8">

        <div className="grid grid-cols-4 gap-2 text-center">

          <div className="bg-green-600 text-white py-4 rounded-lg font-semibold">
            ✓ Apply
          </div>

          <div className="bg-green-600 text-white py-4 rounded-lg font-semibold">
            ✓ Review
          </div>

          <div className="bg-blue-600 text-white py-4 rounded-lg font-semibold">
            Payment
          </div>

          <div className="bg-gray-300 dark:bg-slate-700 py-4 rounded-lg">
            Success
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow border dark:border-slate-700">

          <div className="bg-sky-100 dark:bg-slate-800 p-6">

            <h1 className="text-3xl font-bold text-sky-700 dark:text-sky-400">

              Pay Admission Fee

            </h1>

          </div>

          {/* Tabs */}

          <div className="flex border-b">

            <button

              onClick={() => setPaymentType("existing")}

              className={`flex-1 py-4 font-semibold ${paymentType === "existing"
                ? "bg-blue-600 text-white"
                : ""
                }`}

            >

              Existing Student

            </button>

            <button

              onClick={() => setPaymentType("new")}

              className={`flex-1 py-4 font-semibold ${paymentType === "new"
                ? "bg-blue-600 text-white"
                : ""
                }`}

            >

              New Admission

            </button>

          </div>

          <div className="p-8">

            {paymentType === "existing" && (

              <div>

                <h2 className="text-2xl font-bold mb-6">

                  Existing Student Login

                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="font-semibold">

                      Roll Number

                    </label>

                    <input

                      className="w-full border rounded-lg p-3 mt-2"

                      placeholder="Enter Roll Number"

                      value={existingStudent.rollNumber}

                      onChange={(e) =>

                        setExistingStudent({

                          ...existingStudent,

                          rollNumber: e.target.value

                        })

                      }

                    />

                  </div>

                  <div>

                    <label className="font-semibold">

                      Session

                    </label>

                    <select

                      className="w-full border rounded-lg p-3 mt-2"

                      value={existingStudent.session}

                      onChange={(e) =>

                        setExistingStudent({

                          ...existingStudent,

                          session: e.target.value

                        })

                      }

                    >

                      <option>2026-27</option>

                      <option>2027-28</option>

                    </select>

                  </div>

                </div>

                <div className="mt-8">

                  <label className="font-semibold">

                    Date Of Birth

                  </label>

                  <div className="grid grid-cols-3 gap-3 mt-2">

                    <select className="border rounded-lg p-3">

                      <option>DD</option>

                    </select>

                    <select className="border rounded-lg p-3">

                      <option>Month</option>

                    </select>

                    <select className="border rounded-lg p-3">

                      <option>Year</option>

                    </select>

                  </div>

                </div>

                <button

                  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg"

                >

                  Login

                </button>

              </div>

            )}

            {paymentType === "new" && (

              <div>

                <h2 className="text-2xl font-bold mb-6">

                  Admission Details

                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="text-gray-500">

                      Admission Number

                    </label>

                    <p className="font-bold text-xl">

                      {newAdmission.admissionNo}

                    </p>

                  </div>

                  <div>

                    <label className="text-gray-500">

                      Student Name

                    </label>

                    <p className="font-bold text-xl">

                      {newAdmission.studentName}

                    </p>

                  </div>

                  <div>

                    <label className="text-gray-500">

                      Course

                    </label>

                    <p className="font-bold text-xl">

                      {newAdmission.course}

                    </p>

                  </div>

                  <div>

                    <label className="text-gray-500">

                      Session

                    </label>

                    <p className="font-bold text-xl">

                      {newAdmission.session}

                    </p>

                  </div>

                  <div>

                    <label className="text-gray-500">

                      Amount

                    </label>

                    <p className="font-bold text-3xl text-green-600">

                      ₹ {newAdmission.amount}

                    </p>

                  </div>

                </div>

              </div>

            )}
</div>
</div>
          
        {/* ================= Payment Summary ================= */}
        {paymentType === "new" && (
          <>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow border border-gray-200 dark:border-slate-700 h-fit">

              <div className="bg-green-100 dark:bg-slate-800 px-6 py-5 rounded-t-xl">

                <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">

                  Payment Summary

                </h2>

              </div>

              <div className="p-6 space-y-5">

                <div className="flex justify-between border-b pb-3">

                  <span className="font-medium text-gray-500">

                    Admission No

                  </span>

                  <span className="font-bold">

                    {newAdmission.admissionNo}

                  </span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span className="font-medium text-gray-500">

                    Student

                  </span>

                  <span className="font-bold">

                    {newAdmission.studentName}

                  </span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span className="font-medium text-gray-500">

                    Course

                  </span>

                  <span className="font-bold">

                    {newAdmission.course}

                  </span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span className="font-medium text-gray-500">

                    Session

                  </span>

                  <span className="font-bold">

                    {newAdmission.session}

                  </span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span className="font-medium text-gray-500">

                    Admission Fee

                  </span>

                  <span className="font-bold">

                    ₹ {newAdmission.amount}

                  </span>

                </div>

                <div className="flex justify-between text-xl">

                  <span className="font-bold">

                    Total

                  </span>

                  <span className="font-bold text-green-600">

                    ₹ {newAdmission.amount}

                  </span>

                </div>

              </div>

            </div>

             {/* ================= Payment Method ================= */}

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow border border-gray-200 dark:border-slate-700 mt-6">

              <div className="bg-blue-100 dark:bg-slate-800 px-6 py-5 rounded-t-xl">

                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">

                  Select Payment Method

                </h2>

              </div>

              <div className="p-6">

                <div className="grid grid-cols-2 gap-4">

                  <label
                    className={`border rounded-xl p-5 cursor-pointer text-center transition
                ${paymentMethod === "upi"
                        ? "border-blue-600 bg-blue-50 dark:bg-slate-800"
                        : ""
                      }`}
                  >

                    <input
                      type="radio"
                      className="hidden"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                    />

                    <div className="text-4xl">

                      📱

                    </div>

                    <p className="mt-2 font-semibold">

                      UPI

                    </p>

                  </label>

                  <label
                    className={`border rounded-xl p-5 cursor-pointer text-center transition
                ${paymentMethod === "card"
                        ? "border-blue-600 bg-blue-50 dark:bg-slate-800"
                        : ""
                      }`}
                  >

                    <input
                      type="radio"
                      className="hidden"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />

                    <div className="text-4xl">

                      💳

                    </div>

                    <p className="mt-2 font-semibold">

                      Card

                    </p>

                  </label>

                  <label
                    className={`border rounded-xl p-5 cursor-pointer text-center transition
                ${paymentMethod === "netbanking"
                        ? "border-blue-600 bg-blue-50 dark:bg-slate-800"
                        : ""
                      }`}
                  >

                    <input
                      type="radio"
                      className="hidden"
                      checked={paymentMethod === "netbanking"}
                      onChange={() => setPaymentMethod("netbanking")}
                    />

                    <div className="text-4xl">

                      🏦

                    </div>

                    <p className="mt-2 font-semibold">

                      Net Banking

                    </p>

                  </label>

                  <label
                    className={`border rounded-xl p-5 cursor-pointer text-center transition
                ${paymentMethod === "wallet"
                        ? "border-blue-600 bg-blue-50 dark:bg-slate-800"
                        : ""
                      }`}
                  >

                    <input
                      type="radio"
                      className="hidden"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                    />

                    <div className="text-4xl">

                      👛

                    </div>

                    <p className="mt-2 font-semibold">

                      Wallet

                    </p>

                  </label>

                </div>

                <button

                  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold"

                >

                  Proceed To Pay

                </button>

                <div className="mt-6 border-t pt-6 text-center">

                  <p className="font-semibold">

                    🔒 100% Secure Payment

                  </p>

                  <p className="text-gray-500 mt-2">

                    Powered by Razorpay

                  </p>

                  <div className="flex justify-center gap-4 mt-4 text-3xl">

                    💳 📱 🏦

                  </div>

                </div>

              </div>

            </div> 
            </> 
                    )}

          </div> {/* Grid */}

    </div>  

  );

}