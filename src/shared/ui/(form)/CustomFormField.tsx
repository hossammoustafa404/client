import { FC, HTMLInputTypeAttribute, HTMLProps, ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../(shadcn)/Form";
import type {} from "../(shadcn)/Form";
import type { Control } from "react-hook-form";

interface Props {
  control: Control<any>;
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  description?: string;
  inputClassName?: HTMLProps<HTMLElement>["className"];
  children: ReactNode;
}

const CustomFormField: FC<Props> = ({
  control,
  name,
  label,
  description,
  children,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="font-medium">{label}</FormLabel>}
          <FormControl>{children}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
