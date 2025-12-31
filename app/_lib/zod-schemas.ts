import { email, z } from "zod";
export const passwordSchema = z
  .string()
  .min(8)
  .refine((val) => /[a-z]/.test(val),"password should have small letter")
  .refine((val) => /[0-9]/.test(val),"password should have  number");

export const registerSchema = z
  .object({
    email: z.email().min(3),
    password: passwordSchema,
    conFirmPassword: passwordSchema,
    name: z.string().min(3),
  })
  .refine((data) => data.password === data.conFirmPassword, {
    path: ["confirmPassword"],
    message:"password doesn't match "
  });

export const loginSchema =z.object({
  email:z.email(),
  password:passwordSchema
})