import { feeData } from "./data";

export default function JeeAdvancedPage() {
  const program = feeData.oneYearProgram;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-8">
          {feeData.title}
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead className="bg-lime-100">
              <tr>
                <th className="border p-4">Target</th>
                <th className="border p-4">Class</th>
                <th className="border p-4">Duration</th>
                <th className="border p-4">Admission Fee</th>
                <th className="border p-4">Tuition Fee</th>
                <th className="border p-4">Total Fee</th>
                <th className="border p-4">Month</th>
              </tr>
            </thead>

            <tbody>
              {program.fees.map((item, index) => (
                <tr key={index}>
                  {index === 0 && (
                    <>
                      <td
                        rowSpan={program.fees.length}
                        className="border p-4 text-center"
                      >
                        {program.target}
                      </td>

                      <td
                        rowSpan={program.fees.length}
                        className="border p-4 text-center"
                      >
                        {program.classes}
                      </td>

                      <td
                        rowSpan={program.fees.length}
                        className="border p-4 text-center"
                      >
                        {program.duration}
                      </td>

                      <td
                        rowSpan={program.fees.length}
                        className="border p-4 text-center"
                      >
                        ₹{program.admissionFee}
                      </td>
                    </>
                  )}

                  <td className="border p-4 text-center">
                    ₹{item.tuitionFee}
                  </td>

                  <td className="border p-4 text-center">
                    ₹{item.totalFee}
                  </td>

                  <td className="border p-4 text-center">
                    {item.installmentMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Terms & Conditions
          </h2>

          <ul className="list-decimal pl-8 space-y-2">
            {feeData.terms.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}