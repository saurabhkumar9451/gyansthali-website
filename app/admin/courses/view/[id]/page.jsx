'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCourseById } from "@/components/services/courseService";

export default function ViewCourse() {

  const { id } = useParams();

  const router = useRouter();

  const [course, setCourse] = useState(null);


  useEffect(() => {

    loadCourse();

  }, []);

  const loadCourse = async () => {

    try {

      const response = await getCourseById(id);

      setCourse(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  if (!course) {

    return <h2 className="p-10">Loading...</h2>;

  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        View Course
      </h1>


      {/* <p>Course ID : {id}</p> */}

      <div className="bg-white rounded-xl shadow p-8 mt-6">

        <div className="mb-4">

          <strong>Course Name :</strong> {course.courseName}

        </div>

        <div className="mb-4">

          <strong>Description :</strong> {course.description}

        </div>

        <div className="mb-4">

          <strong>Duration :</strong> {course.duration}

        </div>

        <div className="mb-4">

          <strong>Mode :</strong> {course.mode}

        </div>

        <div className="mb-4">

          <strong>Fee :</strong> ₹{course.fee}

        </div>

        <div className="mb-6">

          <strong>Status :</strong>

          {course.active ? " Active" : " Inactive"}

        </div>

        <button
          onClick={() => router.push("/admin/courses")}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Back
        </button>

      </div>

    </div>
  );
}