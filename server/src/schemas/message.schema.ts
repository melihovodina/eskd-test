import { z } from "zod";

export const createMessageSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must be at most 50 characters long"),
    phone: z
      .string()
      .regex(
        /^(\+375|80)\d{9}$/,
        "Phone must start with +375 or 80 and contain 9 more digits"
      ),
    message: z
      .string()
      .min(2, "Message must be at least 2 characters long")
      .max(500, "Name must be at most 50 characters long")
  }),
});

export type CreateMessageInput = z.infer<typeof createMessageSchema>["body"];
