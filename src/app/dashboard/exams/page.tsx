import React, { Suspense } from "react";
import ExamsList from "./_components/exams-list";

export default function page() {
  return (
    <>
      <Suspense fallback="Loading content...">
        <ExamsList />
      </Suspense>
    </>
  );
}
