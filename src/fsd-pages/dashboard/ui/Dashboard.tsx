import { BigCards } from "@/widgets/(dashboard)/big-cards";
import { SmallCards } from "@/widgets/(dashboard)/small-cards";
import { WeeklySalesChart } from "@/widgets/(dashboard)/weekly-sales-chart";
import { Heading } from "@/shared/ui";
import { BestSellingChart } from "@/widgets/(dashboard)/best-selling-chart";
import { OrdersTable } from "@/widgets/(dashboard)/orders-table";

const Dashboard = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Heading title="Dashboard Overview" />
      </header>

      {/* Big Cards */}
      <section className="pt-12 pb-6">
        <BigCards />
      </section>

      {/* Small Cards */}
      <section className="py-4">
        <SmallCards />
      </section>

      {/* Charts */}
      <section className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <WeeklySalesChart />
        <BestSellingChart />
      </section>

      {/* Orders Table */}
      <section className="py-4">
        <OrdersTable />
      </section>
    </>
  );
};

export default Dashboard;
