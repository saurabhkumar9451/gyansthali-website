'use client';
import { useEffect, useState } from "react";
import { getAllPayments } from "../../components/services/paymentService";

export default function PaymentTable() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {

    try {

      const response = await getAllPayments();

      setPayments(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">
        Payment History
      </h2>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Payment ID</th>
            <th className="p-3">Student ID</th>
            <th className="p-3">Admission ID</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Method</th>
            <th className="p-3">Status</th>
            <th className="p-3">Transaction ID</th>
            <th className="p-3">Payment Date</th>
          </tr>
        </thead>

        {/* <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="p-3">{payment.id}</td>
              <td className="p-3">{payment.student}</td>
              <td className="p-3">{payment.amount}</td>
              <td className="p-3 text-green-600 font-semibold">
                {payment.status}
              </td>
            </tr>
          ))}
        </tbody> */}

        <tbody>

          {

            payments.map((payment) => (

              <tr
                key={payment.id}
                className="border-b"
              >

                <td className="p-3">
                  {payment.id}
                </td>

                <td className="p-3">
                  {payment.studentId}
                </td>

                <td className="p-3">
                  {payment.admissionId}
                </td>

                <td className="p-3">
                  ₹{payment.amount}
                </td>

                <td className="p-3">
                  {payment.paymentMethod}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${payment.paymentStatus === "PAID"
                        ? "bg-green-600"
                        : "bg-red-500"
                      }`}
                  >
                    {payment.paymentStatus}
                  </span>
                </td>

                <td className="p-3">
                  {payment.transactionId}
                </td>

                <td className="p-3">
                  {payment.paymentDate}
                </td>

              </tr>

            ))

          }

        </tbody>
      </table>
    </div>
  );
}