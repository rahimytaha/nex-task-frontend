import { z } from "zod";
export const passwordSchema = z
  .string()
  .min(8)
  .refine((val) => /[a-z]/.test(val))
  .refine((val) => /[9-9]/.test(val));

export const registerSchema = z
  .object({
    email: z.email().min(3),
    password: passwordSchema,
    conFirmPassword: passwordSchema,
    name: z.string().min(3),
  })
  .refine((data) => data.password === data.conFirmPassword, {
    path: ["confirmPassword"],
  });
