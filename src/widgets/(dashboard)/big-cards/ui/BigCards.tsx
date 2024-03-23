import { cn } from "@/shared/lib/utils";
import { FC, HTMLAttributes } from "react";
import { BigCard } from "../../big-card";
import { Layers } from "lucide-react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const BigCards: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-5 sm:grid-rows-3 lg:grid-rows-2 gap-3",
        className
      )}
      {...props}
    >
      <BigCard
        Icon={Layers}
        title="Today Orders"
        showSalesDetails={true}
        className="bg-green-500"
      />
      <BigCard
        Icon={Layers}
        title="Today Orders"
        showSalesDetails={true}
        className="bg-orange-500"
      />
      <BigCard Icon={Layers} title="Today Orders" className="bg-indigo-500" />
      <BigCard Icon={Layers} title="Today Orders" className="bg-green-400" />
      <BigCard Icon={Layers} title="Today Orders" className="bg-green-700" />
    </div>
  );
};

export default BigCards;
