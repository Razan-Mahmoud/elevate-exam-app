import Link from "next/link";
import SubjectsList from "./_components/subjects-list";

export default function SubjectsPage() {
  return (
    <section className="w-full bg-white rounded-xl py-8 px-4">
      <div className="flex justify-between">
        <p className="text-primary font-semibold">Quizzez</p>
        <Link href="/dashboard/exams">
          <p className="text-primary font-semibold">View All</p>
        </Link>
      </div>
      <SubjectsList />
    </section>
  );
}
