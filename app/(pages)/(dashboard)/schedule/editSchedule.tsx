import UpdateScheduleForm from "@/app/_components/forms/updateScheduleForm";
import { TScheduleType } from "@/app/_types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bolt } from "lucide-react";
import { useState } from "react";

type Props = {
  data: TScheduleType;
  opUpdate: (val: TScheduleType) => void;
};

const EditSchedule = ({ data, opUpdate }: Props) => {
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
        <UpdateScheduleForm
          opUpdate={opUpdate}
          data={data}
          setOpen={(arg) => setOpen(arg)}
        />
      </SheetContent>
    </Sheet>
  );
};

export default EditSchedule;
