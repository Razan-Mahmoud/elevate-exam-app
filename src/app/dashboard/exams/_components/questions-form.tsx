"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useQuestions from "../_hooks/use-questions";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnswerFields, ExamSchema } from "@/lib/schemes/exam.schema";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function QuestionsForm() {
  // States
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");

  // Querries
  const { isLoading, error, payload } = useQuestions();
  // Variables
  const currentQuestion = payload?.questions[step];

  // Form
  const form = useForm<AnswerFields>({
    resolver: zodResolver(ExamSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<AnswerFields> = (values) => {
    console.log(values);
  };

  // Effects
  useEffect(() => {
    setAnswer("");
  }, [step]);
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <p className="text-sm text-blue-600">
          Question {step + 1} of {payload?.questions.length}
        </p>

        <p className="text-sm">Time: 20</p>
      </header>

      {/* Steps */}
      <ul className="flex items-center justify-between">
        {Array.from({ length: 20 }, (_, i) => i).map((j) => (
          <li key={j} className="size-2 bg-slate-400 rounded-full" />
        ))}
      </ul>

      {/* Form */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name={`answers.${step}`}
            render={(field) => (
              <FormItem>
                {/* Label */}
                <FormLabel className="font-semibold">
                  {currentQuestion?.question}
                </FormLabel>

                {/* Options */}
                <FormControl>
                  <RadioGroup
                    value={answer}
                    onValueChange={(value) => {
                      setAnswer(value);
                      field.field.onChange({
                        questionId: currentQuestion?._id,
                        correct: value,
                      });
                    }}
                    name={currentQuestion?._id}
                    className="flex flex-col space-y-1"
                  >
                    {currentQuestion?.answers.map((answer) => (
                      <FormItem
                        key={answer.key}
                        className="flex items-center space-x-3 space-y-0 p-2"
                      >
                        {/* Radio */}
                        <FormControl>
                          <RadioGroupItem value={answer.key} />
                        </FormControl>

                        {/* Label */}
                        <FormLabel className="grow font-normal bg-slate-100 w-full h-8 p-2 m-2 rounded-lg">
                          {answer.answer}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Footer */}
          <div className="grid grid-cols-2 gap-2 mt-6">
            <Button
              disabled={step === 0}
              type="button"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>

            <Button
              type={step < payload?.questions.length! - 1 ? "button" : "submit"}
              onClick={() => {
                if (step === payload?.questions.length! - 1) return;
                setStep((prev) => prev + 1);
              }}
              className="rounded-xl px-4 py-2"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
