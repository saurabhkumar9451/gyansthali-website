
'use client';

import { useEffect, useState } from "react";
import {
  getAllAdmissions,
  approveAdmission,
  rejectAdmission
} from "../services/admissionService"; // <-- apne path ke hisab se change kar lena

export default function AdmissionTable() {

  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    loadAdmissions();
  }, []);

  const  loadAdmissions = async () => {
    try {

      const response = await getAllAdmissions();

      setAdmissions(response.data);

    } catch (error) {

      console.error(error);
      alert("Something went wrong.");
    }
  };

  const handleApprove = async (id) => {

    if (!window.confirm("Approve this admission?")) {
      return;
    }
    try {

      await approveAdmission(id);
      alert("Admission Approved Successfully");
      loadAdmissions();

    } catch (error) {

      console.error(error);

    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Reject this admission?")) {
      return;
    }
    try {

      await rejectAdmission(id);
      alert("Admission Rejected Successfully");
      loadAdmissions();

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }
  };

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">

        Admissions

      </h2>

      <table className="w-full">

        <thead>

          <tr className="bg-gray-100">

            <th className="p-3">Admission No</th>

            <th className="p-3">Student</th>

            <th className="p-3">Course</th>

            <th className="p-3">Status</th>

            <th className="p-3">Action</th>

          </tr>

        </thead>

        {/* <tbody>

          {

            admissions
              .filter(admission => admission.status === "PENDING")
              .map((admission) => (

                <tr
                  key={admission.id}
                  className="border-b"
                >

                  <td className="p-3">
                    {admission.admissionNo || "-"}
                  </td>

                  <td className="p-3">
                    {admission.studentName || "-"}
                  </td>

                  <td className="p-3">
                    {admission.course || "-"}
                  </td>

                  <td className="p-3">
                    {admission.status || "-"}
                  </td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={() =>
                        handleApprove(admission.id)
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        handleReject(admission.id)
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>

                  </td>

                </tr>

              ))

          }

        </tbody> */}

        <tbody>

          {
            admissions.filter(a => a.status === "PENDING").length === 0 ?

              (
                <tr>

                  <td colSpan="5" className="text-center p-6 text-gray-500">

                    No Pending Admissions Found

                  </td>

                </tr>
              )

              :

              admissions
                .filter(a => a.status === "PENDING")
                .map((admission) => (

                  <tr
                    key={admission.id}
                    className="border-b"
                  >

                    <td className="p-3">
                      {admission.admissionNo || "-"}
                    </td>

                    <td className="p-3">
                      {admission.studentName || "-"}
                    </td>

                    <td className="p-3">
                      {admission.course || "-"}
                    </td>

                    <td className="p-3">
                      {admission.status}
                    </td>

                    <td className="p-3 space-x-2">

                      <button
                        onClick={() => handleApprove(admission.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(admission.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>

                    </td>

                  </tr>

                ))

          }

        </tbody>

      </table>

    </div>

  );

}