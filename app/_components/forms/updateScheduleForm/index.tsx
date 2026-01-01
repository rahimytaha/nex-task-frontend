import { useActionState, useEffect } from "react";
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import { UpdateScheduleAction } from "./updateScheduleAction";
import { TScheduleType } from "@/app/_types";
import { toast } from "sonner";
import { CreateScheduleSchema } from "@/app/_lib/zod-schemas";

type Props = {
  data: TScheduleType;
  setOpen: (state: boolean) => void;
  opUpdate: (val: TScheduleType) => void;
};

const UpdateScheduleForm = ({ data, setOpen, opUpdate }: Props) => {
  const [state, formAction, isPending] = useActionState(
    UpdateScheduleAction,
    {}
  );
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const validate = CreateScheduleSchema.safeParse({ description, name });
    if (validate.success) {
      const newData: TScheduleType = {
        description,
        name,
        id: data.id,
      };
      opUpdate(newData);
    }
    formAction(formData);
  };
  useEffect(() => {
    if (state.success) {
      toast.success("Schedule updated!");
      setOpen(false);
    } else if (state.errors) {
      toast.error(state.message || "Please fix errors");
    }
  }, [state]);
  return (
    <form action={handleSubmit} className="mx-2  ">
      <input type="hidden" name="id" value={data.id} />
      <CustomInput
        defaultValue={data.name}
        name="name"
        text="Schedule Name"
        state={state}
      />
      <CustomInput
        defaultValue={data.description}
        name="description"
        text="Schedule Description"
        state={state}
      />
      <Button className="mx-auto block " disabled={isPending}>
        {isPending ? "Updating..." : "Update Schedule"}
      </Button>
    </form>
  );
};

export default UpdateScheduleForm;
