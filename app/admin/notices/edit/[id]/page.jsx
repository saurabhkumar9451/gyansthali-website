'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    getNoticeById,
    updateNotice
} from "@/components/services/noticeService";

export default function EditNotice() {

    const { id } = useParams();

    const router = useRouter();

    const [notice, setNotice] = useState({

        title: "",
        description: "",
        noticeType: "",
        publishDate: "",
        expiryDate: "",
        active: true

    });

    useEffect(() => {

        loadNotice();

    }, []);

    const loadNotice = async () => {

        try {

            const response = await getNoticeById(id);

            setNotice(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setNotice({

            ...notice,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateNotice(id, notice);

            alert("Notice Updated Successfully");

            router.push("/admin/notices");

        } catch (error) {

            console.error(error);

            alert("Unable to Update Notice");

        }

    };

    return (

        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">

            <h2 className="text-3xl font-bold mb-6">
                Edit Notice
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>

                    <label className="block font-semibold mb-1">
                        Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={notice.title}
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
                        value={notice.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border rounded p-2"
                        required
                    />

                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div>

                        <label className="block font-semibold mb-1">
                            Notice Type
                        </label>

                        <select
                            name="noticeType"
                            value={notice.noticeType}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        >
                            <option value="">Select</option>
                            <option value="General">General</option>
                            <option value="Exam">Exam</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Admission">Admission</option>
                        </select>

                    </div>

                    <div>

                        <label className="block font-semibold mb-1">
                            Publish Date
                        </label>

                        <input
                            type="date"
                            name="publishDate"
                            value={notice.publishDate}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />

                    </div>

                </div>

                <div>

                    <label className="block font-semibold mb-1">
                        Expiry Date
                    </label>

                    <input
                        type="date"
                        name="expiryDate"
                        value={notice.expiryDate}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />

                </div>

                <div className="flex items-center gap-2">

                    <input
                        type="checkbox"
                        name="active"
                        checked={notice.active}
                        onChange={handleChange}
                    />

                    <label>Active</label>

                </div>

                <div className="flex gap-4">

                    <button
                        type="submit"
                        className="bg-yellow-500 text-white px-5 py-2 rounded"
                    >
                        Update Notice
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/admin/notices")}
                        className="bg-gray-500 text-white px-5 py-2 rounded"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    );

}