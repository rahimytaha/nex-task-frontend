"use client";
import UpdateScheduleForm from "@/app/_components/forms/updateScheduleForm";
import { TScheduleType } from "@/app/_types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bolt } from "lucide-react";
import { ReactNode, useState } from "react";

type Props = {
  data: TScheduleType;
  trigger?: boolean;
  opUpdate?: (val: TScheduleType) => void;
};

const EditSchedule = ({ data, opUpdate, trigger = false }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {trigger ? (
          <Button>Edit Schedule</Button>
        ) : (
          <Bolt
            className="opacity-70  cursor-pointer  hover:opacity-100 duration-100"
            size={26}
          />
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update Schedule</SheetTitle>
        </SheetHeader>
        <UpdateScheduleForm
          opUpdate={(e) => {
            opUpdate && opUpdate(e);
          }}
          data={data}
          setOpen={(arg) => setOpen(arg)}
        />
      </SheetContent>
    </Sheet>
  );
};

export default EditSchedule;
