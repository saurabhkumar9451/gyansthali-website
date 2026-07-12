import AdmissionTable from "@/components/admin/AdmissionTable";

export default function AdmissionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Admissions
      </h1>

      <AdmissionTable />
    </div>
  );
}