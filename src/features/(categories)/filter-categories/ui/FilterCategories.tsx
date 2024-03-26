"use client";

import { FormInput } from "@/shared/ui";
import { Button } from "@/shared/ui/(shadcn)/Button";
import { Form } from "@/shared/ui/(shadcn)/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "You must enter a category name" }),
});

const FilterCategories = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const resetForm = () => {
    form.reset({ name: "" });
  };

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    resetForm();
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={() => resetForm()}
      >
        <FormInput control={form.control} type="text" name="name" />

        <div className="flex gap-x-3">
          <Button
            type="submit"
            className="filled-btn !bg-green-600 hover:!bg-green-600/80 w-1/2"
          >
            Filter
          </Button>
          <Button
            type="reset"
            className="filled-btn !bg-gray-600 hover:!bg-gray-600/80 w-1/2"
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FilterCategories;
