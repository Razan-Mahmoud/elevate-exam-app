import { Suspense } from "react";
import Profile from "./_components/profile";
import SubjectsPage from "./subjects/page";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6 min-h-screen">
      <Profile />

      <Suspense fallback="Loading content..">
        <SubjectsPage />
      </Suspense>
    </main>
  );
}
