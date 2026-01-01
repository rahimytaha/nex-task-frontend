import React, { useActionState, useEffect } from "react";
import { CreateScheduleAction } from "./createScheduleAction";
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TScheduleCreareType } from "@/app/_types";

type Props = {
  setOpen: (arg0: boolean) => void;
  onCreate: (payload: TScheduleCreareType) => void;
};

const CreateScheduleForm = ({ setOpen, onCreate }: Props) => {
  const [state, formAction, isPending] = useActionState(
    CreateScheduleAction,
    {}
  );
  useEffect(() => {
    if (state.success) {
      toast.success("Schedule created!");
      setOpen(false);
    } else if (state.errors) {
      toast.error("Please fix errors");
    }
  }, [state]);
  const handleSubmit = (formData: FormData) => {
    const newSchedule = {
      id: Math.random(),
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    };
    console.log(newSchedule)
    CreateScheduleAction()
  };
  return (
    <form action={handleSubmit} className="mx-2  ">
      <CustomInput name="name" text="Schedule Name" state={state} />
      <CustomInput
        name="description"
        text="Schedule Description"
        state={state}
      />
      <Button className="mx-auto block " disabled={isPending}>
        {isPending ? "Creating..." : "Create Schedule"}
      </Button>
    </form>
  );
};

export default CreateScheduleForm;
