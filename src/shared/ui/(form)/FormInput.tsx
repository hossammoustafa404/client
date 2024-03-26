import { FC, HTMLInputTypeAttribute, HTMLProps } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../(shadcn)/Form";
import { Input } from "../(shadcn)/Input";
import type {} from "../(shadcn)/Form";
import type { Control } from "react-hook-form";
import { cn } from "@/shared/lib/utils";

interface Props {
  control: Control<any>;
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  description?: string;
  wrapperClassName?: HTMLProps<HTMLElement>["className"];
  inputClassName?: HTMLProps<HTMLElement>["className"];
}

const FormInput: FC<Props> = ({
  control,
  name,
  label,
  type,
  placeholder,
  description,
  wrapperClassName,
  inputClassName,
}) => {
  return (
    <div className={cn(wrapperClassName)}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel className="font-medium">{label}</FormLabel>}
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className={cn(
                  "border-gray-500  focus-visible:ring-1 focus-visible:ring-green-600 focus-visible:dark:ring-green-600 focus-visible:ring-offset-0",
                  inputClassName
                )}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInput;
