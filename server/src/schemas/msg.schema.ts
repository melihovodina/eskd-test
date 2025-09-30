import { z } from "zod";

export const createMsgSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name must be at most 50 characters long"),
    msg: z
      .string()
      .min(1, "Message must be at least 1 characters long")
      .email("Invalid email address"),
    phone: z
      .string()
      .min(10, "Phone must be at least 10 characters long")
      .max(15, "Phone must be at most 15 characters long"),
  }),
});

export type CreateMsgInput = z.infer<typeof createMsgSchema>["body"];
