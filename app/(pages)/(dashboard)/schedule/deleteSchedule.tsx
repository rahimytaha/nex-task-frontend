"use client";
import { toast } from "sonner";
import { CircleX } from "lucide-react";
import { useTransition } from "react";
import { DeleteScheduleAction } from "./deleteScheduleAction";

const DeleteSchedule = ({ id ,onDelete}: { id: number,onDelete:()=>void }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!isPending) {
      startTransition(() => {
        onDelete()
        toast.promise(DeleteScheduleAction(id), {
          loading: "Deleting schedule...",
          success: (data: any) =>
            data.message || "Schedule deleted successfully!",
          error: (err: any) => err.message || "Error! Could not delete.",
        });
      });
    }
  };

  return (
    <button onClick={handleDelete} disabled={isPending}>
      <CircleX
        className="text-destructive cursor-pointer opacity-70 hover:opacity-100 duration-100"
        size={26}
      />
    </button>
  );
};

export default DeleteSchedule;
