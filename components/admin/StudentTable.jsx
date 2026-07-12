'use client';

import { useEffect, useState } from "react";
import { getAllStudents, deactivateStudent } from "../services/admissionService";
import { useRouter } from "next/navigation";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {

    try {

      const response = await getAllStudents();

      setStudents(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this student?")) {
      return;
    }

    try {

      await deactivateStudent(id);

      alert("Student Deleted Successfully");

      loadStudents();

    } catch (error) {

      console.error(error);

      alert("Something went wrong");

    }

  };

  return (
    <div className="bg-white rounded-xl shadow mt-8 p-6">
      <h2 className="text-xl font-bold mb-4">
        Student List
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {/* <th className="p-3 text-left">Admission No</th>
            <th className="p-3 text-left">Student</th>
            <th className="p-3 text-left">Course</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Payment</th> */}

            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Full Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Mobile</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Active</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        {/* <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b"
            >
              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.course}</td>
              <td className="p-3">{student.status}</td>
              <td className="p-3">{student.payment}</td>
            </tr>
          ))}
        </tbody> */}

        <tbody>

          {
            students.map((student) => (

              <tr
                key={student.id}
                className="border-b"
              >

                <td className="p-3">
                  {student.id}
                </td>

                <td className="p-3">
                  {student.fullName || "-"}
                </td>

                <td className="p-3">
                  {student.email || "-"}
                </td>

                <td className="p-3">
                  {student.mobile || "-"}
                </td>

                <td className="p-3">
                  {student.role || "-"}
                </td>

                <td className="p-3">
                  {student.isActive ? "Active" : "Inactive"}
                </td>

                <td className="p-3 space-x-2">

                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
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