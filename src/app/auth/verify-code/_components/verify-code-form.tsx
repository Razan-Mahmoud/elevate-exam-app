"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyCodeForm() {
  return (
    <div>
      <form className="space-y-7 flex flex-col">
        {/* Code */}
        <Input
          type="text"
          id="verifyCode"
          placeholder="Enter the code sent to you."
        />
        <Link href="/recoverPassword" className="text-center">
          Didn't receive a code?
          <span className="text-blue-500 ps-1">Resend</span>
        </Link>

        <div>
          <Button className="w-full rounded-xl">Send</Button>
        </div>
      </form>
    </div>
  );
}
