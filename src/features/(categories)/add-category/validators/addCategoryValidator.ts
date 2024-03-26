import { z } from "zod";

export const addCategoryValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(32, { message: "Name must not exceed 32 characters" }),
  description: z
    .string()
    .min(50, { message: "Description must be at least 50 characters" })
    .max(300, { message: "Description must not exceed 300 characters" }),
  parent: z
    .string()
    .min(3, { message: "Parent must be at least 3 characters" })
    .max(32, { message: "Name must not exceed 32 characters" }),
  image: z.string(),
});

export type AddCategoryValues = z.infer<typeof addCategoryValidator>;
