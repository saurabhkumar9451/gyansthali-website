'use client';

import { CheckCircle2, Download, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdmissionSuccessPage() {

  const router = useRouter();

  // Temporary Hardcoded Data
  // Backend integration ke time API response se replace hoga
  const admission = {
    admissionNo: "GYAN20260001",
    paymentId: "pay_RM4ABCD12345",
    transactionId: "TXN987654321",
    amount: 5000,
    course: "NEET",
    session: "2026-27",
    studentName: "Saurabh Kumar",
  };

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-12 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Success Card */}

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">

          {/* Header */}

          <div className="bg-green-600 text-white py-10 flex flex-col items-center">

            <CheckCircle2
              size={90}
              className="mb-5 animate-pulse"
            />

            <h1 className="text-4xl font-bold">

              Admission Submitted Successfully

            </h1>

            <p className="mt-3 text-green-100 text-lg">

              Thank you for choosing
              <span className="font-semibold">
                {" "}GYANSTHALI VIDHYAPEETH
              </span>

            </p>

          </div>

          {/* Body */}

          <div className="p-10">

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-800 rounded-xl p-5">

              <p className="text-green-700 dark:text-green-300 text-lg font-semibold">

                🎉 Congratulations!

              </p>

              <p className="mt-2 text-gray-700 dark:text-gray-300">

                Your admission request has been submitted successfully.
                After payment verification your admission will become active.

              </p>

            </div>

            {/* Admission Details */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

                              {/* Admission Number */}

              <div className="bg-gray-50 dark:bg-slate-800 border rounded-xl p-5">

                <p className="text-sm text-gray-500">
                  Admission Number
                </p>

                <h2 className="text-xl font-bold mt-2">
                  {admission.admissionNo}
                </h2>

              </div>

              {/* Student Name */}

              <div className="bg-gray-50 dark:bg-slate-800 border rounded-xl p-5">

                <p className="text-sm text-gray-500">
                  Student Name
                </p>

                <h2 className="text-xl font-bold mt-2">
                  {admission.studentName}
                </h2>

              </div>

              {/* Course */}

              <div className="bg-gray-50 dark:bg-slate-800 border rounded-xl p-5">

                <p className="text-sm text-gray-500">
                  Course
                </p>

                <h2 className="text-xl font-bold mt-2">
                  {admission.course}
                </h2>

              </div>

              {/* Session */}

              <div className="bg-gray-50 dark:bg-slate-800 border rounded-xl p-5">

                <p className="text-sm text-gray-500">
                  Session
                </p>

                <h2 className="text-xl font-bold mt-2">
                  {admission.session}
                </h2>

              </div>

              {/* Amount */}

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-xl p-5">

                <p className="text-sm text-gray-500">
                  Amount Paid
                </p>

                <h2 className="text-3xl font-bold text-green-600 mt-2">
                  ₹ {admission.amount}
                </h2>

              </div>

              {/* Payment Id */}

              <div className="bg-gray-50 dark:bg-slate-800 border rounded-xl p-5">

                <p className="text-sm text-gray-500">
                  Payment ID
                </p>

                <h2 className="font-semibold mt-2 break-all">
                  {admission.paymentId}
                </h2>

              </div>

              {/* Transaction Id */}

              <div className="bg-gray-50 dark:bg-slate-800 border rounded-xl p-5 md:col-span-2">

                <p className="text-sm text-gray-500">
                  Transaction ID
                </p>

                <h2 className="font-semibold mt-2 break-all">
                  {admission.transactionId}
                </h2>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

              <button

                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"

              >

                <Download size={20} />

                Download Receipt

              </button>

              <button

                onClick={() => router.push("/student-zone/dashboard")}

                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold"

              >

                <LayoutDashboard size={20} />

                Go To Dashboard

              </button>

            </div>

                        {/* Support Section */}

            <div className="mt-12 border-t pt-8">

              <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6">

                <h2 className="text-2xl font-bold mb-4">

                  Need Help?

                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <p className="text-gray-500">

                      Email

                    </p>

                    <p className="font-semibold">

                      support@gyansthalividhyapeeth.com

                    </p>

                  </div>

                  <div>

                    <p className="text-gray-500">

                      Contact Number

                    </p>

                    <p className="font-semibold">

                      +91 9876543210

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Footer */}

            <div className="mt-10 text-center text-gray-500 dark:text-gray-400">

              <p>

                Thank you for choosing

                <span className="font-semibold text-green-600">

                  {" "}GYANSTHALI VIDHYAPEETH

                </span>

              </p>

              <p className="mt-2">

                Please keep your Admission Number and Payment ID safe for future reference.

              </p>

            </div>

          </div> {/* Body */}

        </div> {/* Success Card */}

      </div> {/* max-w-4xl */}

    </div> 

  );

}