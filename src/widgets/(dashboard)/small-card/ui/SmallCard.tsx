import { cn } from "@/shared/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  Icon: LucideIcon;
  iconBgColor: string;
  title: string;
  amount?: number;
}

const SmallCard: FC<Props> = ({
  Icon,
  iconBgColor,
  title,
  amount = 0,
  className,
  ...props
}) => {
  return (
    <article
      className={cn(
        "bg-white dark:bg-slate-950 shadow-md p-6 rounded-md flex items-center gap-x-4",
        className
      )}
      {...props}
    >
      <div className={cn("p-4 rounded-full", iconBgColor)}>
        <Icon />
      </div>
      <div>
        <h4 className="text-gray-500 mb-1">{title}</h4>
        <span className="font-medium text-xl">{amount}</span>
      </div>
    </article>
  );
};

export default SmallCard;
