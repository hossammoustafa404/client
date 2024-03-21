import { DashboardSidebar } from "@/widgets/dashboard-sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar />
      <div className="flex-grow flex flex-col bg-slate-900">
        {/* Header */}
        <header className="bg-slate-800 px-6 h-[64px] flex items-center text-white">
          Header
        </header>
        {/* Main */}
        <main className="flex-grow p-6 text-white">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
