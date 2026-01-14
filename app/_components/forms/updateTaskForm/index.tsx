import { TTaskCreateType, TTaskType } from "@/app/_types";
import React, { useActionState, useEffect } from "react";
import { UpdateTaskAction } from "./updateTaskAction";
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import { CreateTaskSchema } from "@/app/_lib/zod-schemas";
import { toast } from "sonner";

type Props = {
  setOpen: (arg0: boolean) => void;
  scheduleId: number;
  data: TTaskType;
  onUpdate: (payload: TTaskType) => void;
};

const UpdateTaskForm = ({ setOpen, onUpdate, data, scheduleId }: Props) => {
  const [state, formAction, isPending] = useActionState(UpdateTaskAction, {});
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const validate = CreateTaskSchema.safeParse({ name, description });
    if (validate.success) {
      onUpdate({ description, name, id: data.id });
    }
    formAction(formData);
  };
  useEffect(() => {
    console.log(state);
    if (state.success) {
      toast.success("Task Updated!");
      setOpen(false);
    } else if (state.errors) {
      toast.error("Please fix errors");
    }
  }, [state]);
  return (
    <form className="mx-2  " action={handleSubmit}>
      <input name="scheduleId" type="hidden" value={scheduleId} />
      <input name="id" type="hidden" value={data.id} />
      <CustomInput
        defaultValue={data.name}
        name="name"
        text="Name"
        state={state}
      />
      <CustomInput
        name="description"
        defaultValue={data.description}
        text="Description"
        state={state}
      />
      <Button className="mx-auto  block ">
        {isPending ? "Updating..." : "Update Task"}
      </Button>
    </form>
  );
};

export default UpdateTaskForm;
