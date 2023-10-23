"use client";

import { Button } from "@components/ui/Button";
import { cn } from "@utils";
import { FC, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginRequest } from "@lib/data-fetching/auth";
import { AxiosError } from "axios";
import { LoginValidator, loginValidator } from "@lib/validators/auth";
import { LoginFormField, loginFormFields } from "@constants/forms/login";
import { useRouter } from "next/navigation";

// Props Interface
interface Props extends HTMLAttributes<HTMLFormElement> {}

const SigninForm: FC<Props> = ({ className }) => {
  const [resError, setResError] = useState("");
  const navigate = useRouter();

  // React Hook Form
  const { register, handleSubmit, formState, control } =
    useForm<LoginValidator>({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(loginValidator),
      mode: "onSubmit",
    });

  const { errors, isValid, isSubmitting, isSubmitSuccessful } = formState;

  // On Submit
  const onSubmit = async (formValues: LoginValidator) => {
    try {
      const data = await loginRequest(formValues);
      setResError("");
      navigate.replace("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        setResError(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
        className={cn(className)}
      >
        <div className="flex flex-col gap-y-6">
          {loginFormFields.map((field: LoginFormField) => (
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
          disabled={!isValid || isSubmitting}
          className="capitalize font-semibold w-full"
        >
          sign in
        </Button>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default SigninForm;
