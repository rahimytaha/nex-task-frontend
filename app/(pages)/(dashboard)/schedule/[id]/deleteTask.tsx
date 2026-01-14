import { CircleX } from "lucide-react";
import React, { useTransition } from "react";
import { toast } from "sonner";

type Props = {
    id:number
    onDelete:()=>void
};

const DeleteTask = ({onDelete, id}: Props) => {
  const [isPending, startTransition] = useTransition();
  const handleSubmit = () => {
    if (!isPending) {
      startTransition(() => {
        onDelete()
        toast.promise(fetch("0.0.0.0"), {
          loading: "Deleting Task",
          success: "Task deleted successfully",
          error: () => "Error! Could not delete.",
        });
      });
    }
  };
  return (
    <button onClick={handleSubmit} disabled={isPending}>
      <CircleX
        className="text-destructive cursor-pointer opacity-70 hover:opacity-100 duration-100"
        size={26}
      />
    </button>
  );
};

export default DeleteTask;
