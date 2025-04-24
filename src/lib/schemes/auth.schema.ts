import z from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "Minimum length is 2 characters").optional(),
    lastName: z.string().min(2, "Minimum length is 2 characters").optional(),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string({ required_error: "Password is required" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters length, that contains 1 upper case, 1 lower case and 1 number."
      ),
    confirmPassword: z.string({ required_error: "This field is required" }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_-])[A-Za-z\d@$!%*?&#-_]{8,}$/,
      "Password must be at least 8 characters length, that contains 1 upper case, 1 lower case and 1 number."
    ),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
});

export type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>;
export type LoginFields = z.infer<typeof loginSchema>;
export type RegisterFields = z.infer<typeof registerSchema>;
