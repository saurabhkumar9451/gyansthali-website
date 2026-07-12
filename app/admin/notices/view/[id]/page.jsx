'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getNoticeById } from "@/components/services/noticeService";

export default function ViewNotice() {

    const { id } = useParams();

    const router = useRouter();

    const [notice, setNotice] = useState({});

    useEffect(() => {

        loadNotice();

    }, []);

    const loadNotice = async () => {

        try {

            const response = await getNoticeById(id);

            setNotice(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">

            <h2 className="text-3xl font-bold mb-6">
                View Notice
            </h2>

            <div className="space-y-4">

                <p><b>Title :</b> {notice.title}</p>

                <p><b>Description :</b> {notice.description}</p>

                <p><b>Type :</b> {notice.noticeType}</p>

                <p><b>Publish Date :</b> {notice.publishDate}</p>

                <p><b>Expiry Date :</b> {notice.expiryDate}</p>

                <p>

                    <b>Status :</b>

                    {

                        notice.active ?

                            " Active"

                            :

                            " Inactive"

                    }

                </p>

            </div>

            <button

                onClick={() => router.push("/admin/notices")}

                className="mt-6 bg-gray-600 text-white px-5 py-2 rounded"

            >

                Back

            </button>

        </div>

    );

}