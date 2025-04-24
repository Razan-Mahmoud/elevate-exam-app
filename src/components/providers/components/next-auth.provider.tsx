"use client";

import { SessionProvider } from "next-auth/react";

type NextAauthProviderProps = {
  children: React.ReactNode;
};
export default function NextAauthProvider({
  children,
}: NextAauthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
