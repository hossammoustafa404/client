"use client";

import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Props Interface
interface Props extends HTMLAttributes<HTMLFormElement> {}

// Form Values Interface
interface FormValues {
  email: string;
  password: string;
}

// Form Field Interface
interface FormField {
  label: string;
  type: "email" | "password";
  name: "email" | "password";
  id: string;
  placeholder: string;
}

// Form Fields
const formFields: FormField[] = [
  {
    label: "email",
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter your email",
  },
  {
    label: "password",
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter your password",
  },
];

const SigninForm: FC<Props> = ({ className }) => {
  const { register, handleSubmit, formState, control } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={cn(className)}
      >
        <div className="flex flex-col gap-y-6">
          {formFields.map((field: FormField) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block mb-1 capitalize font-semibold text-sm"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                {...register(field.name, { required: "Field is required" })}
                className="w-full p-2 border rounded-md placeholder:text-sm"
              />
              <p className="text-red-500 text-sm mt-2">
                {errors[field.name]?.message}
              </p>
            </div>
          ))}
        </div>
        <Button type="submit" className="capitalize font-semibold w-full mt-8">
          sign in
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default SigninForm;
