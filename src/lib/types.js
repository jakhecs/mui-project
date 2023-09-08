import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, "Le mot de passe doit avoir minimum 5 caractère"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passes doivent corespondre",
    path: ["confirmPassword"],
  });
