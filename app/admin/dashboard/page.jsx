import Sidebar from "@/components/admin/Sidebar";

import DashboardCards from "@/components/admin/DashboardCards";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <DashboardCards />
    </>
  );
}