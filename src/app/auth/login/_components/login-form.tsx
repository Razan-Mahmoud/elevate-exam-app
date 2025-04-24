"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFields, loginSchema } from "@/lib/schemes/auth.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Eye } from "lucide-react";
import { signIn } from "next-auth/react";
import useLogin from "../_hooks/use-login";

export default function LoginForm() {
  // Mutations
  // const { isPending, error, login } = useLogin();

  // React-Hook Form
  const form = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFields> = async (values) => {
    // login(values);

    const response = await signIn("credentials", {
      callbackUrl: "/dashboard",
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (response?.ok) {
      window.location.href = "/dashboard";
    }
    console.error(response?.error);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-5 flex flex-col"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <div className="relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* Field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                    />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Eye className="absolute top-2 right-2 text-slate-400" />
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-blue-500 text-right "
          >
            Recover Password?
          </Link>
          <div>
            {/* {error && (
              <p className="text-sm text-red-600 italic my-4">
                {error.message}
              </p>
            )} */}
            <Button type="submit" className="w-full rounded-xl ">
              {/* disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              } */}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
