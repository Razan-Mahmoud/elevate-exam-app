"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import LogoutArrow from "assets/icons/logout-arrow.svg";

export default function LogoutForm() {
  const { data: session } = useSession();

  return (
    <Button
      className="w-full h-11 flex justify-between gap-8 rounded-xl p-2 text-xl font-semibold text-slate-600"
      variant={"outline"}
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}>
      <Image src={LogoutArrow} width={24} height={24} alt="Logout icon" />
      Logout
    </Button>
  );
}
