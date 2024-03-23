import { cn } from "@/shared/lib/utils";
import { DashboardHeader } from "@/widgets/(dashboard-layout)/dashboard-header";
import { DashboardSidebar } from "@/widgets/(dashboard-layout)/dashboard-sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <DashboardSidebar />

      <div
        className={cn("min-w-0 flex-1 flex flex-col duration-300 min-h-screen")}
      >
        {/* Header */}
        <DashboardHeader />
        {/* Main */}
        <main className="flex-1 p-6 bg-slate-200 dark:bg-slate-900 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
