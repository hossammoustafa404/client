"use client";

import { FormInput, FormTextarea } from "@/shared/ui";
import { Button } from "@/shared/ui/(shadcn)/Button";
import { Form } from "@/shared/ui/(shadcn)/Form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddCategoryValues,
  addCategoryValidator,
} from "../validators/addCategoryValidator";

const AddCategoryForm = () => {
  const form = useForm<AddCategoryValues>({
    resolver: zodResolver(addCategoryValidator),
    defaultValues: {
      name: "",
      description: "",
      parent: "",
      image: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: AddCategoryValues) => {
    console.log({ values });
  };



  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <div className="flex flex-col gap-y-8">
          <FormInput
            control={form.control}
            name="name"
            type="text"
            label="Name"
          />
          <FormTextarea
            control={form.control}
            name="description"
            label="Description"
            textareaClassName="h-[121px]"
          />
          <FormInput
            control={form.control}
            name="parent"
            type="text"
            label="Parent"
          />
          <FormInput
            control={form.control}
            name="image"
            type="file"
            label="Image"
          />
        </div>

        <div>
          <Button
            type="submit"
            className="mt-10 w-full filled-btn !bg-green-600 hover:!bg-green-500/80"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddCategoryForm;
