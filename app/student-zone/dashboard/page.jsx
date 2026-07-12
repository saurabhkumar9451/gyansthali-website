'use client';

import Link from 'next/link';
import { useEffect, useState } from "react";

// import { getStudentDashboard } from "../../components/services/studentDashboardService";
import { getStudentDashboard } from "@/components/services/studentDashboardService";

import {
  User,
  FileText,
  CreditCard,
  BookOpen,
  Bell,
  ClipboardList
} from 'lucide-react';

export default function StudentDashboard() {

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);



  const studentId = 1; // Temporary

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const response = await getStudentDashboard(studentId);

      setDashboard(response.data);

    } catch (error) {

      console.error(error);

    }finally{
      setLoading(false)
    }

  };

  
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome, {dashboard?.studentName || "Student"} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your admission, fees and study materials.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="bg-white rounded-2xl p-6 shadow">
          <User className="text-blue-600" size={35} />
          <h2 className="mt-4 text-xl font-bold">
            Profile
          </h2>
          <p className="text-gray-500">
            View your profile details
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <ClipboardList
            className="text-green-600"
            size={35}
          />
          <h2 className="mt-4 text-xl font-bold">
            Admission Status
          </h2>

          <p className="text-orange-500 font-semibold">
            {dashboard?.admissionStatus || "Not Applied"}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <CreditCard
            className="text-purple-600"
            size={35}
          />
          <h2 className="mt-4 text-xl font-bold">
            Fee Status
          </h2>

          <p className="text-red-500 font-semibold">
            {dashboard?.paymentStatus || "Pending"}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <BookOpen
            className="text-cyan-600"
            size={35}
          />
          <h2 className="mt-4 text-xl font-bold">
            Study Material
          </h2>

          <p className="text-gray-500">
            {dashboard?.totalMaterials || 0} PDFs Available
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <Link
            // href="/student/admission-form"
            href="/apply-online"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl"
          >
            <FileText
              className="text-blue-600"
              size={35}
            />

            <h3 className="mt-4 font-bold">
              Admission Form
            </h3>

            <p className="text-gray-500">
              Complete your profile
            </p>
          </Link>

          {/* <Link
            href="/student/documents"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl"
          >
            <FileText
              className="text-green-600"
              size={35}
            />

            <h3 className="mt-4 font-bold">
              Upload Documents
            </h3>

            <p className="text-gray-500">
              Photo, Aadhaar, Marksheet
            </p>
          </Link> */}

          <Link
            //href="/student/payment"
            href="/pay-fee-online"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl"
          >
            <CreditCard
              className="text-purple-600"
              size={35}
            />

            <h3 className="mt-4 font-bold">
              Pay Fees
            </h3>

            <p className="text-gray-500">
              Complete fee payment
            </p>
          </Link>

          <Link
            href="/student/material"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl"
          >
            <BookOpen
              className="text-cyan-600"
              size={35}
            />

            <h3 className="mt-4 font-bold">
              Study Material
            </h3>

            <p className="text-gray-500">
              Download notes and PDFs
            </p>
          </Link>

        </div>
      </div>

      {/* Latest Notices */}
      <div className="mt-10 bg-white rounded-2xl p-6 shadow">

        <div className="flex items-center gap-3 mb-5">
          <Bell className="text-red-500" />
          <h2 className="text-2xl font-bold">
            Latest Notices
          </h2>
        </div>

        {/* <ul className="space-y-4">
          <li>
            📢 New Test Series starts from 15 July.
          </li>

          <li>
            📢 Admission fee submission last date is 20 July.
          </li>

          <li>
            📢 Physics notes uploaded.
          </li>
        </ul> */}

        <ul className="space-y-4">

          {dashboard?.latestNotices?.map((notice) => (

            <li key={notice.id}>
              📢 {notice.title}
            </li>

          ))}

        </ul>
      </div>

    </div>
  );
}