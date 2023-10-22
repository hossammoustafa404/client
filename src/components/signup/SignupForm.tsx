"use client";

import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { FC, HTMLAttributes } from "react";

// Props Interface
interface props extends HTMLAttributes<HTMLFormElement> {}

// Form Fields
const formFields = [
  {
    label: "first name",
    type: "text",
    name: "first_name",
    id: "first_name",
    placeholder: "Enter your first name",
  },
  {
    label: "last name",
    type: "text",
    name: "last_name",
    id: "last_name",
    placeholder: "Enter your last name",
  },
  {
    label: "email",
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter your email",
  },
  {
    label: "username",
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter your username",
  },
  {
    label: "password",
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter your password",
  },
  {
    label: "confirm password",
    type: "password",
    name: "confirm_password",
    id: "confirm_password",
    placeholder: "Re-enter your password",
  },
  {
    label: "phone",
    type: "tel",
    name: "phone",
    id: "phone",
    placeholder: "Enter your phone number",
  },
];

const SignupForm: FC<props> = ({ className }) => {
  return (
    <form className={cn(className)}>
      <div className="flex flex-col gap-y-6">
        {formFields.map((field) => (
          <div>
            <label
              htmlFor={field.id}
              className="block mb-1 capitalize font-semibold text-sm"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.id}
              placeholder={field.placeholder}
              className="w-full p-2 border rounded-md placeholder:text-sm"
            />
          </div>
        ))}
      </div>
      <Button type="submit" className="capitalize font-semibold w-full mt-8">
        sign up
      </Button>
    </form>
  );
};

export default SignupForm;
