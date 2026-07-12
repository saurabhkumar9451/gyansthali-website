// import Sidebar from "@/components/admin/Sidebar";

// import {
//   Users,
//   GraduationCap,
//   CreditCard,
//   BookOpen,
// } from "lucide-react";

// const cards = [
//   {
//     title: "Total Students",
//     value: "520",
//     icon: Users,
//     color: "bg-blue-500",
//   },
//   {
//     title: "Admissions",
//     value: "340",
//     icon: GraduationCap,
//     color: "bg-green-500",
//   },
//   {
//     title: "Payments",
//     value: "₹2,35,000",
//     icon: CreditCard,
//     color: "bg-yellow-500",
//   },
//   {
//     title: "Courses",
//     value: "12",
//     icon: BookOpen,
//     color: "bg-purple-500",
//   },
// ];

// export default function DashboardCards() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//       {cards.map((card, index) => {
//         const Icon = card.icon;

//         return (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
//           >
//             <div>
//               <p className="text-gray-500 text-sm">
//                 {card.title}
//               </p>

//               <h2 className="text-3xl font-bold mt-2">
//                 {card.value}
//               </h2>
//             </div>

//             <div className={`${card.color} p-4 rounded-xl`}>
//               <Icon className="text-white" size={30} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
//-----------------------------------

'use client';

import { useEffect, useState } from "react";
import { getDashboardStatistics } from "../../components/services/dashBoardService";

import {
  Users,
  GraduationCap,
  CreditCard,
  BookOpen,
} from "lucide-react";

export default function DashboardCards() {

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);


  const loadDashboard = async () => {

    try {

      const response = await getDashboardStatistics();

      setDashboard(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };
  
  const cards = [

    {
      title: "Total Students",
      value: dashboard?.totalStudents ?? 0,
      icon: Users,
      color: "bg-blue-500",
    },

    {
      title: "Total Admissions",
      value: dashboard?.totalAdmissions ?? 0,
      icon: GraduationCap,
      color: "bg-green-500",
    },

    {
      title: "Pending Admissions",
      value: dashboard?.pendingAdmissions ?? 0,
      icon: GraduationCap,
      color: "bg-orange-500",
    },

    {
      title: "Approved Admissions",
      value: dashboard?.approvedAdmissions ?? 0,
      icon: GraduationCap,
      color: "bg-emerald-500",
    },

    {
      title: "Payments",
      value: dashboard?.totalPayments ?? 0,
      icon: CreditCard,
      color: "bg-yellow-500",
    },

    {
      title: "Courses",
      value: dashboard?.totalCourses ?? 0,
      icon: BookOpen,
      color: "bg-purple-500",
    },

    {
      title: "Enquiries",
      value: dashboard?.totalEnquiries ?? 0,
      icon: Users,
      color: "bg-pink-500",
    },

    {
      title: "Notices",
      value: dashboard?.totalNotices ?? 0,
      icon: BookOpen,
      color: "bg-red-500",
    }

  ];

  if (loading) {

    return (

        <div className="text-center mt-10 text-xl font-bold">

            Loading Dashboard...

        </div>

    );

}

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {

        cards.map((card, index) => {

          const Icon = card.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
            >

              <div>

                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

              </div>

              <div className={`${card.color} p-4 rounded-xl`}>

                <Icon
                  className="text-white"
                  size={30}
                />

              </div>

            </div>

          );

        })

      }

    </div>

  );

}