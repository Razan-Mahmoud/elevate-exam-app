import { Button } from "@/components/ui/button";
import { getExams } from "@/lib/api/exams.api";
import catchError from "@/lib/utils/catch-error";
import { BookCheck } from "lucide-react";
import QuestionDialog from "./question-dialog";

export default async function ExamsList() {
  const [payload] = await catchError(getExams);
  console.log(payload);
  return (
    <section className="flex items-center flex-col pb-4">
      <h1 className="self-start font-semibold p-2">Front-End Quiz</h1>
      <ul className="flex flex-col gap-5 w-[70vw]">
        {payload?.exams.map((exam) => (
          <li
            key={exam._id}
            className="shadow-lg flex items-center justify-between p-6"
          >
            {/* Exam */}
            <div className="flex items-center gap-4">
              <BookCheck size={40} className="text-gray-700" />
              {/* Info */}
              <div className="flex flex-col gap-2">
                {/* Title */}
                <h2 className="font-semibold text-lg">{exam.title}</h2>
                {/* Questions number */}
                <p className="text-gray-600">
                  {exam.numberOfQuestions} Questions
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col ">
              <p>{exam.duration} Minutes</p>

              {/* Question Dialog: press on button */}
              <QuestionDialog exams={exam._id} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
