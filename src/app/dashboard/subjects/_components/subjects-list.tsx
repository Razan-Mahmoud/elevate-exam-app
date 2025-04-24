import { getAllSubjects } from "@/lib/api/subjects.api";
import catchError from "@/lib/utils/catch-error";
import Image from "next/image";
import Link from "next/link";

export default async function SubjectsList() {
  const [payload] = await catchError(getAllSubjects);
  console.log(payload);
  return (
    <div className="grid grid-cols-3 gap-4">
      {payload?.subjects?.map((subject) => (
        <Link href={`/dashboard/exams`}>
          <div className="rounded-xl drop-shadow-xl relative">
            <Image
              src={subject.icon}
              width={260}
              height={260}
              alt={subject.name}
            />

            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="bg-violet-300 mx-4 mb-4 rounded-xl px-4 py-2 fixed bottom-0">
                <h5 className="text-white font-semibold">{subject.name} </h5>
                <p className="text-white">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
