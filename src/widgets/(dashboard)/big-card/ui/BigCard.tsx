import { cn } from "@/shared/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  Icon: LucideIcon;
  title: string;
  sales?: string;
  salesDetails?: {
    cash?: string;
    card?: string;
    credit?: string;
  };
  showSalesDetails?: boolean;
}

const BigCard: FC<Props> = ({
  Icon,
  title,
  sales = "$0.00",
  salesDetails = { cash: "$0.00", card: "$0.00", credit: "$0.00" },
  showSalesDetails = false,
  className,
  ...props
}) => {
  return (
    <article
      className={cn(
        "p-6 rounded-md shadow-sm flex flex-col items-center gap-y-4 text-slate-300",
        className
      )}
      {...props}
    >
      <Icon />
      <h4>{title}</h4>
      <span className="text-lg font-medium">{sales}</span>
      {showSalesDetails && (
        <ul className="flex justify-between w-full">
          {[
            { id: 1, title: "Cash", amount: salesDetails?.cash },
            { id: 2, title: "Card", amount: salesDetails?.card },
            { id: 3, title: "Credit", amount: salesDetails?.credit },
          ].map(({ id, title, amount }) => (
            <li key={id} className="text-sm">
              <h5>{title}:</h5>
              <span>{amount}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default BigCard;
