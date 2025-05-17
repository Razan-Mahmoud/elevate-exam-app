import Link from "next/link";
import SubjectsList from "./_components/subjects-list";
import { Suspense } from "react";

export default function SubjectsPage() {
  return (
    <section className="w-full bg-white rounded-xl py-8 px-4">
      {/* Header */}
      <div className="flex justify-between">
        {/* Title */}
        <p className="text-primary font-semibold">Quizzez</p>

        {/* View All */}
        <Link href="/dashboard/exams">
          <p className="text-primary font-semibold">View All</p>
        </Link>
      </div>

      {/* Subjects */}
      <Suspense fallback="Loading content...">
        <SubjectsList />
      </Suspense>
    </section>
  );
}
