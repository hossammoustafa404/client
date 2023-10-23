"use client";

import { Button } from "@components/ui/Button";
import registerFormFields, {
  RegisterFormField,
} from "@constants/forms/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerRequest } from "@lib/data-fetching/auth";
import { RegisterValidator, registerValidator } from "@lib/validators/auth";
import { cn } from "@utils";
import { FC, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import exclude from "@utils/exclude";

// Props Interface
interface props extends HTMLAttributes<HTMLFormElement> {}

const SignupForm: FC<props> = ({ className }) => {
  const [resError, setResError] = useState("");
  const navigate = useRouter();

  // React Hook Form
  const { register, handleSubmit, formState } = useForm<RegisterValidator>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      phone: undefined,
    },
    resolver: zodResolver(registerValidator),
    mode: "onBlur",
  });

  const { errors, isValid, isSubmitting } = formState;

  // On Submit
  const onSubmit = async (formData: RegisterValidator) => {
    formData = exclude(["confirm_password"], formData);
    try {
      const data = await registerRequest(formData);
      setResError("");
      navigate.replace("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        setResError(error.response?.data.message);
        console.log(error.response?.data.message);
      }
    }
  };

  return (
    <form
      className={cn(className)}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-6">
        {registerFormFields.map((field: RegisterFormField) => (
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
              {...register(field.name)}
              className="w-full p-2 border rounded-md placeholder:text-sm"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors[field.name]?.message}
            </p>
          </div>
        ))}
      </div>
      <p className="text-red-500 text-sm my-6 text-center">{resError}</p>
      <Button
        type="submit"
        className="capitalize font-semibold w-full"
        disabled={!isValid || isSubmitting}
      >
        sign up
      </Button>
    </form>
  );
};

export default SignupForm;
