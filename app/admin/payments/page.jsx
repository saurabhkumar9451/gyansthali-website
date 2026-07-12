import PaymentTable from "@/components/admin/PaymentTable";

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Payments
      </h1>

      <PaymentTable />
    </div>
  );
}