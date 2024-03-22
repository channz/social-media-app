import { z } from "zod";

const MAX_MB = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z
  .object({
    nama: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(1, { message: "Password is required" }),
    repassword: z.string().min(1, { message: "Password is required" }),
    hp: z.string().min(7, { message: "Phone number minimum length is 7" }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password doesn't match",
    path: ["repassword"],
  });

export const profileUpdateSchema = z.object({
  nama: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().optional(),
  picture: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_UPLOAD_SIZE,
      `Max image size is ${MAX_MB}MB`
    )
    .refine(
      (file) =>
        !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, and .png formats are supported"
    )
    .optional(),
});

export interface User {
  nama: string;
  email: string;
  password: string;
  hp: string;
  picture?: string;
}

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
