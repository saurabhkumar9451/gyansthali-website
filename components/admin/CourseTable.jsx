'use client';

import { useEffect, useState } from "react";
import {
  getAllCourses,
  searchCourses,
  deactivateCourse
} from "../services/courseService";

import { useRouter } from "next/navigation";

export default function CourseTable() {

  const router = useRouter();

  const [courses, setCourses] = useState([]);

  const [page, setPage] = useState(0);

  const [size] = useState(5);

  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("courseName");

  const [sortDir, setSortDir] = useState("asc");

  useEffect(() => {
    loadCourses();
  }, [page, keyword, sortBy, sortDir]);


  const loadCourses = async () => {

    try {

      // const response = await getAllCourses();
      // setCourses(response.data);
      let response;

      if (keyword.trim() === "") {

        response = await getAllCourses(
          page,
          size,
          sortBy,
          sortDir
        );

      } else {

        response = await searchCourses(keyword, page, size);

      }

      setCourses(response.data.content);

      setTotalPages(response.data.totalPages);

    } catch (error) {

      console.error(error);

    }

  };



  const handleDelete = async (id) => {

    if (!window.confirm("Delete this course?")) {
      return;
    }

    try {

      await deactivateCourse(id);

      alert("Course Deleted Successfully");

      loadCourses();

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }

  };

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          Course List
        </h2>

        <input
          type="text"
          placeholder="Search Course..."
          value={keyword}
          onChange={(e) => {

            setKeyword(e.target.value);

            setPage(0);

          }}
          className="border rounded px-3 py-2 w-64"
        />

      </div>

      <div className="flex gap-4 mb-4">

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="courseName">Course Name</option>
          <option value="fee">Fee</option>
          <option value="duration">Duration</option>
        </select>

        <select
          value={sortDir}
          onChange={(e) => setSortDir(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

      </div>

      <table className="w-full">

        <thead>

          <tr className="bg-gray-100">

            <th className="p-3">ID</th>

            <th className="p-3">Course Name</th>

            <th className="p-3">Description</th>

            <th className="p-3">Duration</th>

            <th className="p-3">Mode</th>

            <th className="p-3">Fee</th>

            <th className="p-3">Status</th>

            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {

            courses.map((course) => (

              <tr
                key={course.id}
                className="border-b"
              >

                <td className="p-3">
                  {course.id}
                </td>

                <td className="p-3">
                  {course.courseName}
                </td>

                <td className="p-3">
                  {course.description}
                </td>

                <td className="p-3">
                  {course.duration}
                </td>

                <td className="p-3">
                  {course.mode}
                </td>

                <td className="p-3">
                  ₹{course.fee}
                </td>

                <td className="p-3">

                  {
                    course.active ?

                      <span className="bg-green-600 text-white px-2 py-1 rounded">
                        Active
                      </span>

                      :

                      <span className="bg-red-600 text-white px-2 py-1 rounded">
                        Inactive
                      </span>

                  }

                </td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={() => router.push(`/admin/courses/view/${course.id}`)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>

                  <button
                    onClick={() => router.push(`/admin/courses/edit/${course.id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(course.id)}
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

      <div className="flex justify-between items-center mt-6">

        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page + 1} of {totalPages}
        </span>

        <button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>

      </div>

    </div>

  );

}