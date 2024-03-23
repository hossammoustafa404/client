import { FC, HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

const Badge: FC<Props> = ({ children, className, value, ...props }) => {
  return (
    <>
      {value && (
        <div
          className={cn("relative flex justify-center items-center")}
          {...props}
        >
          {children}
          <span
            className={cn(
              "absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-500 text-sm flex justify-center items-center",
              className
            )}
          >
            {value > 99 ? "+" + 99 : value}
          </span>
        </div>
      )}
    </>
  );
};

export default Badge;
