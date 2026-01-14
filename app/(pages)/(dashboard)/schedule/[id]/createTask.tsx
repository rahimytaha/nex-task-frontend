"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { TScheduleCreareType } from "@/app/_types";
import CreateTaskForm from "@/app/_components/forms/createTaskForm";

const CreateTask = ({onCreate,scheduleId}:{onCreate:(payload:TScheduleCreareType)=>void,scheduleId:number}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="default" className="cursor-pointer" >Create Task</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Task</SheetTitle>
        </SheetHeader>
        <CreateTaskForm  scheduleId={scheduleId} onCreate={onCreate} setOpen={(arg)=>setOpen(arg)}/>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTask;
