import { LineChart } from "@/shared/ui";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/(shadcn)/Tabs";
import { data, options } from "../model/lineChartModel";

const WeeklySalesChart = () => {
  return (
    <article className="bg-white dark:bg-slate-950 shadow-md p-4 rounded-md">
      <h4 className="font-medium text-lg">Weekly Sales</h4>
      <div className="mt-4">
        <Tabs defaultValue="sales">
          <TabsList className="w-full rounded-none justify-start p-0 bg-transparent border-b border-b-gray-500">
            {[
              { id: 1, value: "sales", title: "Sales" },
              { id: 2, value: "orders", title: "Orders" },
            ].map(({ id, value, title }) => (
              <TabsTrigger
                key={id}
                value={value}
                className="text-gray-500 font-medium rounded-none h-full data-[state=active]:bg-transparent
               data-[state=active]:text-green-500 data-[state=active]:border-b-2 data-[state=active]:border-b-green-500"
              >
                {title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sales">
            <LineChart options={options} data={data} />
          </TabsContent>
          <TabsContent value="orders">
            <div className="max-h-3">
              <LineChart options={options} data={data} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </article>
  );
};

export default WeeklySalesChart;
