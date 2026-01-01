"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CreateScheduleForm from "@/app/_components/forms/createScheduleForm";
import { useState } from "react";

const CreateSchedule = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="default" className="cursor-pointer" >Create Schedule</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Schedule</SheetTitle>
        </SheetHeader>
        <CreateScheduleForm setOpen={(arg)=>setOpen(arg)}/>
      </SheetContent>
    </Sheet>
  );
};

export default CreateSchedule;
