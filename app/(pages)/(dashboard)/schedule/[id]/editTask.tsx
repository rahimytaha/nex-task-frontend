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

type Props = {
  onUpdate: (data: TTaskType) => void;
  data: TTaskType;
};

const EditTask = ({ data, onUpdate }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Bolt
          className="opacity-70  cursor-pointer  hover:opacity-100 duration-100"
          size={26}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Task</SheetTitle>
          <SheetDescription className="text-primary ">Edit Task {data.name}</SheetDescription>
        </SheetHeader>
        <UpdateTaskForm setOpen={alert} onUpdate={onUpdate} data={data} />
      </SheetContent>
    </Sheet>
  );
};

export default EditTask;
