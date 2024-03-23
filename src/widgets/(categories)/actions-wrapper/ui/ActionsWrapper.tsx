import { cn } from "@/shared/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const ActionsWrapper: FC<Props> = ({className,...props}) => {
  return <section className={cn("",className)}></section>;
};

export default ActionsWrapper;
