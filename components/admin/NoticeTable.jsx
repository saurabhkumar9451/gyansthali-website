//import NoticeTable from "@/components/admin/NoticeTable";

'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    getAllNotices,
    deactivateNotice

} from "../../components/services/noticeService";

export default function NoticeTable() {

    const [notices, setNotices] = useState([]);

    useEffect(() => {
        loadNotices();
    }, []);

    const loadNotices = async () => {

        try {

            const response = await getAllNotices();

            setNotices(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    // const handleDelete = async (id) => {

    //     if (!window.confirm("Delete this notice?")) {
    //         return;
    //     }

    //     try {

    //         await deactivateNotice(id);

    //         alert("Notice Deleted Successfully");

    //         loadNotices();

    //     } catch (error) {

    //         console.error(error);

    //         alert("Unable to Delete Notice");

    //     }

    // };


    const handleDelete = async (id) => {

        if (!window.confirm("Delete this notice?")) {
            return;
        }

        try {

            await deactivateNotice(id);

            alert("Notice Deleted Successfully");

            loadNotices();

        } catch (error) {

            console.error(error);

            alert("Unable to Delete Notice");

        }

    };

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <div className="flex justify-between items-center mb-5">

                <h2 className="text-2xl font-bold">
                    Notice List
                </h2>

                <Link
                    href="/admin/notices/add"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    + Add Notice
                </Link>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="bg-gray-100">

                        <th className="p-3">ID</th>

                        <th className="p-3">Title</th>

                        <th className="p-3">Type</th>

                        <th className="p-3">Publish Date</th>

                        <th className="p-3">Expiry Date</th>

                        <th className="p-3">Status</th>

                        <th className="p-3">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        notices.length > 0 ?

                            notices.map((notice) => (

                                <tr
                                    key={notice.id}
                                    className="border-b"
                                >

                                    <td className="p-3">
                                        {notice.id}
                                    </td>

                                    <td className="p-3">
                                        {notice.title}
                                    </td>

                                    <td className="p-3">
                                        {notice.noticeType}
                                    </td>

                                    <td className="p-3">
                                        {notice.publishDate}
                                    </td>

                                    <td className="p-3">
                                        {notice.expiryDate}
                                    </td>

                                    <td className="p-3">

                                        {

                                            notice.active ?

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

                                        <Link
                                            href={`/admin/notices/view/${notice.id}`}
                                            className="bg-blue-600 text-white px-3 py-1 rounded"
                                        >
                                            View
                                        </Link>

                                        <Link
                                            href={`/admin/notices/edit/${notice.id}`}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(notice.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td
                                    colSpan="7"
                                    className="text-center p-5"
                                >
                                    No Notices Found
                                </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}