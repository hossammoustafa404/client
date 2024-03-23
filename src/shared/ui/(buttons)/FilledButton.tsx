import { FC, HTMLAttributes } from "react";
import { Button } from "../(shadcn)/Button";
import { cn } from "../../lib/utils";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const FilledButton: FC<Props> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn("flex items-center gap-x-1 duration-300 ", className)}
    >
      {children}
    </Button>
  );
};

export default FilledButton;
