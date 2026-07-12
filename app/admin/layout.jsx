import Sidebar from "@/components/admin/Sidebar";
import TopNavbar from "@/components/admin/TopNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <TopNavbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}