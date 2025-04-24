import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionsForm from "./questions-form";

type QuestionDialogProps = {
  exams: string;
};

export default function QuestionDialog({ exams }: QuestionDialogProps) {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="rounded-full h-8">Start</Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent>
        {/* Header */}
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* Content */}
        <QuestionsForm />
      </DialogContent>
    </Dialog>
  );
}
