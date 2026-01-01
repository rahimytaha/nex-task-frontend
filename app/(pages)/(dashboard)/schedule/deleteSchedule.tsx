"use client";
import { CircleX } from "lucide-react";
import { DeleteScheduleAction } from "./deleteScheduleAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const DeleteSchedule = () => {
  const [state, formAction] = useActionState(DeleteScheduleAction, {});
  useEffect(() => {
    if (state.success === true) {
      toast.success(state.message);
    } else if (state.success === false) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      {state.success ? "d" : "v"}
      <input type="hidden" name="id" value={6} />
      <button>
        <CircleX
          className="text-destructive cursor-pointer opacity-70   hover:opacity-100 duration-100  "
          size={26}
        />
      </button>
    </form>
  );
};

export default DeleteSchedule;
