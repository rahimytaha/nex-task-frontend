"use client";
import CustomInput from "@/app/_components/common/customInput";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActionState, useEffect, useState } from "react";
import { CreateScheduleAction } from "./createScheduleAction";
import { toast } from "sonner";

const CreateSchedule = () => {
  const [state, formAction,isPending] = useActionState(CreateScheduleAction,{});
  const [open, setOpen] = useState(false);
  useEffect(() => {
  if (state.success) {
    toast.success("Schedule created!");
    setOpen(false);
  } else if (state.errors) {
    toast.error("Please fix errors");
  }
}, [state]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="default" className="cursor-pointer" >Create Schedule</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Schedule</SheetTitle>
        </SheetHeader>
        <form action={formAction} className="mx-2  ">
          <CustomInput name="name" text="Schedule Name" state={state}  />
          <CustomInput name="description" text="Schedule Description" state={state} />
          <Button className="mx-auto block " disabled={isPending}>{isPending?"Creating...":"Create Schedule"}</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateSchedule;
