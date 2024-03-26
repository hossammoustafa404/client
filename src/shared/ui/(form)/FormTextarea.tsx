"use client";

import { FC, HTMLInputTypeAttribute, HTMLProps, useState } from "react";
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
import { cn } from "@/shared/lib/utils";
import { Textarea } from "../(shadcn)/Textarea";

interface Props {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  wrapperClassName?: HTMLProps<HTMLElement>["className"];
  textareaClassName?: HTMLProps<HTMLElement>["className"];
  resizable?: boolean;
}

const FormTextarea: FC<Props> = ({
  control,
  name,
  label,
  placeholder,
  description,
  wrapperClassName,
  textareaClassName,
  resizable = true,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="font-medium">{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className={cn(
                "border-gray-500  focus-visible:ring-1 focus-visible:ring-green-600 focus-visible:dark:ring-green-600 focus-visible:ring-offset-0",
                textareaClassName,
                !resizable ? "resize-none" : ""
              )}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextarea;
