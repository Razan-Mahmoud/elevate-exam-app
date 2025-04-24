"use client";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SetNewPasswordForm() {
  return (
    <div>
      <form className="space-y-7 flex flex-col">
        {/* Password */}
        <div className="relative">
          <Input
            type="password"
            id="password"
            placeholder="create a new password"
          />
          <Eye className="absolute top-2 right-2 text-slate-400" />
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter the new password"
          />
          <Eye className="absolute top-2 right-2 text-slate-400" />
        </div>

        <div>
          <Button className="w-full rounded-xl">Set</Button>
        </div>
      </form>
    </div>
  );
}
