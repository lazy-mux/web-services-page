import { z } from "astro/zod";
import validator from "validator";

export const contactSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(255, { message: "Email must be less than 255 characters long" }),

  phone: z.string().refine(validator.isMobilePhone),

  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" })
    .max(1020, { message: "Message must be less than 1020 characters long" }),
});
