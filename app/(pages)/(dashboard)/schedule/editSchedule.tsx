import CreateScheduleForm from "@/app/_components/forms/createScheduleForm";
import { TScheduleType } from "@/app/_types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bolt } from "lucide-react";
import  { useState } from "react";

type Props = {
    data:TScheduleType
};

const EditSchedule = ({data}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Bolt
          className="opacity-70  cursor-pointer  hover:opacity-100 duration-100"
          size={26}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update Schedule</SheetTitle>
        </SheetHeader>
        <CreateScheduleForm onCreate={alert} setOpen={(arg) => setOpen(arg)} />
      </SheetContent>
    </Sheet>
  );
};

export default EditSchedule;
