import CourseTable from "@/components/admin/CourseTable";

import Link from "next/link";

export default function CoursesPage() {

  return (

    <div>
      <h1 className="text-3xl font-bold mb-6">
        Courses
      </h1>

      <div className="flex justify-end mb-4">
        <Link
          href="/admin/courses/add"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Course
        </Link>
      </div>

      <CourseTable />

    </div>

  );
}