import { PieChart } from "@/shared/ui";
import { data } from "../model/pieChart";

const BestSellingChart = () => {
  return (
    <article className="bg-white shadow-md dark:bg-slate-950 rounded-md p-4">
      <h4 className="text-lg font-medium">Best Selling Products</h4>
      <div className="mt-6">
        <PieChart data={data} />
      </div>
    </article>
  );
};

export default BestSellingChart;
