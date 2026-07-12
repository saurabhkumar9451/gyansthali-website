'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveCourse } from "@/components/services/courseService";

export default function AddCourse() {

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCourse({

            ...course,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await saveCourse(course);

            alert("Course Added Successfully");

            router.push("/admin/courses");

        } catch (error) {

            console.error(error);

            alert("Unable to Add Course");

        }

    };

    const router = useRouter();

    const [course, setCourse] = useState({

        courseName: "",

        description: "",

        duration: "",

        mode: "",

        fee: "",

        active: true

    });

    return (

        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">

            <h2 className="text-3xl font-bold mb-6">
                Add New Course
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block font-semibold mb-1">
                        Course Name
                    </label>

                    <input
                        type="text"
                        name="courseName"
                        value={course.courseName}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={course.description}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        rows="4"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="block font-semibold mb-1">
                            Duration
                        </label>

                        <input
                            type="text"
                            name="duration"
                            value={course.duration}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">
                            Mode
                        </label>

                        <select
                            name="mode"
                            value={course.mode}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Offline">Offline</option>
                            <option value="Online">Online</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                </div>

                <div>
                    <label className="block font-semibold mb-1">
                        Fee
                    </label>

                    <input
                        type="number"
                        name="fee"
                        value={course.fee}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="flex items-center gap-2">

                    <input
                        type="checkbox"
                        name="active"
                        checked={course.active}
                        onChange={handleChange}
                    />

                    <label>
                        Active
                    </label>

                </div>

                <div className="flex gap-4">

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-5 py-2 rounded"
                    >
                        Save Course
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/admin/courses")}
                        className="bg-gray-500 text-white px-5 py-2 rounded"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    );

}