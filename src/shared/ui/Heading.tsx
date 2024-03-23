import { cn } from "@/shared/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
}

const Heading: FC<Props> = ({ title, className, ...props }) => {
  return (
    <h2 className={cn("font-medium text-lg", className)} {...props}>
      {title}
    </h2>
  );
};

export default Heading;
