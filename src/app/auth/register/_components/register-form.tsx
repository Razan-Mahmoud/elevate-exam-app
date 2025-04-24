"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RegisterFields, registerSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const form = useForm<RegisterFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: RegisterFields) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-5 flex flex-col"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your first name"
                    type="text"
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                {/* Field */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your last name"
                    type="text"
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
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

          {/* confirmPassword */}
          <div className="relative">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  {/* Field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Re-enter your password"
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

          <Link href="/auth/login" className="text-center">
            Already have an account?
            <span className="text-blue-500 ps-1">Login</span>
          </Link>
          <div>
            <Button type="submit" className="w-full rounded-xl ">
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
