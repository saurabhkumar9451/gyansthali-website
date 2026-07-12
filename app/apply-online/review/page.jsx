'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { saveAdmission } from "@/components/services/admissionService";
import { getAdmissionByAdmissionNo } from "@/components/services/admissionService";

export default function ReviewAdmission() {

    const router = useRouter();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);


    //    const handleConfirm = async () => {

    //     try {

    //         setLoading(true);

    //         const response = await saveAdmission(data);

    //         console.log("API Response:", response.data);

    //         const admissionNo = response.data.admissionNo;

    //         console.log("Admission No:", admissionNo);

    //         localStorage.setItem("admissionNo", admissionNo);

    //         console.log("Redirecting...");

    //         window.location.href =
    //             `/pay-fee-online?admissionNo=${admissionNo}`;

    //     } catch (error) {

    //         console.error(error);

    //         alert("Admission Save Failed");

    //     } finally {

    //         setLoading(false);

    //     }

    // };

   useEffect(() => {

    const loadAdmission = async () => {

        try {

            setLoading(true);

            const admissionNo = localStorage.getItem("admissionNo");

            if (!admissionNo) {

                router.push("/apply-online");

                return;

            }

            const response =
                await getAdmissionByAdmissionNo(admissionNo);

            setData(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    loadAdmission();

}, []);

    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    if (!data) {
        return <h2 className="text-center mt-10">Admission Not Found</h2>;
    }

    return (

        <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-10 text-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg">
                <div className="bg-sky-100 dark:bg-slate-800 p-6 rounded-t-xl">

                    <h1 className="text-3xl font-bold text-sky-700 dark:text-sky-400">

                        Review Admission

                    </h1>

                </div>

                <div className="p-8 space-y-6">

                    <div className="grid grid-cols-2 gap-5">

                        <Info
                            label="Academic Session"
                            value={data.academicSession}
                        />

                        <Info
                            label="Study Mode"
                            value={data.studyMode}
                        />

                        <Info
                            label="Course"
                            value={data.course}
                        />

                        <Info
                            label="Target Class"
                            value={data.targetClass}
                        />

                        <Info
                            label="Study Center"
                            value={data.studyCenter}
                        />

                        <Info
                            label="Board"
                            value={data.board}
                        />

                        <Info
                            label="Student Name"
                            value={data.studentName}
                        />

                        <Info
                            label="Mobile"
                            value={data.mobile}
                        />

                        <Info
                            label="Email"
                            value={data.email}
                        />

                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">

                        <p className="text-yellow-800 dark:text-yellow-300">

                            Please verify all details carefully before confirming your admission.

                        </p>

                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                        <button

                            onClick={() => router.back()}

                            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition"

                        >

                            Back

                        </button>
                        <button
                            onClick={() =>
                                router.push(`/pay-fee-online?admissionNo=${localStorage.getItem("admissionNo")}`)
                            }
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg"
                        >

                            {"Confirm & Continue"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

function Info({ label, value }) {
    return (
        <div className="border rounded-xl p-4 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">

            <p className="text-sm text-gray-500 dark:text-gray-400">
                {label}
            </p>

            <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                {value || "-"}
            </p>

        </div>
    );
}