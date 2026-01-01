import React, { useActionState, useEffect } from "react";
import { CreateScheduleAction } from "./createScheduleAction";
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
    setOpen:(arg0:boolean)=>void
};

const CreateScheduleForm = ({setOpen}: Props) => {
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
  return (
    <form action={formAction} className="mx-2  ">
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
