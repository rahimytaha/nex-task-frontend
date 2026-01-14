import { TTaskCreateType } from "@/app/_types";
import React, { useActionState, useEffect } from "react";
import { CreateTaskAction } from "./createTaskAction";
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import { CreateTaskSchema } from "@/app/_lib/zod-schemas";
import { toast } from "sonner";

type Props = {
  setOpen: (arg0: boolean) => void;
  scheduleId: number;
  onCreate: (payload: TTaskCreateType) => void;
};

const CreateTaskForm = ({ setOpen, onCreate, scheduleId }: Props) => {
  const [state, formAction, isPending] = useActionState(CreateTaskAction, {});
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const validate = CreateTaskSchema.safeParse({ name, description });
    if (validate.success) {
      onCreate({ description, name, scheduleId });
    }
    formAction(formData);
  };
  useEffect(() => {
    console.log(state);
    if (state.success) {
      toast.success("Task created!");
      setOpen(false);
    } else if (state.errors) {
      toast.error("Please fix errors");
    }
  }, [state]);
  return (
    <form className="mx-2  " action={handleSubmit}>
      <input name="scheduleId" type="hidden" value={scheduleId} />
      <CustomInput name="name" text="Name" state={state} />
      <CustomInput name="description" text="Description" state={state} />
      <Button className="mx-auto  block ">
        {isPending ? "Creating..." : "Create Task"}
      </Button>
    </form>
  );
};

export default CreateTaskForm;
