import UpdateTaskForm from "@/app/_components/forms/updateTaskForm";
import { TTaskType } from "@/app/_types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bolt } from "lucide-react";
import { useState } from "react";

type Props = {
  onUpdate: (data: TTaskType) => void;
  data: TTaskType;
  scheduleId: number;
};

const EditTask = ({ data, scheduleId, onUpdate }: Props) => {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Bolt
          className="opacity-70  cursor-pointer  hover:opacity-100 duration-100"
          size={26}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Task</SheetTitle>
          <SheetDescription className="text-primary ">
            Edit Task {data.name}
          </SheetDescription>
        </SheetHeader>
        <UpdateTaskForm
          scheduleId={scheduleId}
          setOpen={setIsOpen}
          onUpdate={onUpdate}
          data={data}
        />
      </SheetContent>
    </Sheet>
  );
};

export default EditTask;
