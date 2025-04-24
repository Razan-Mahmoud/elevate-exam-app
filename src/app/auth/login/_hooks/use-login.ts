import { LoginFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (loginFields: LoginFields) => {
      const response = await signIn("credentials", {
        email: loginFields.email,
        password: loginFields.password,
        redirect: false,
      });
      if (response?.error) throw new Error(response.error);
      return response;
    },
    onSuccess: (data) => {
      toast.success("Logged in successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    },
  });
  // data?.url ||
  return { isPending, error, login: mutate };
}
