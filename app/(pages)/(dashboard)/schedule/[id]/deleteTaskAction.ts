"use server";

import { DeleteTaskApi } from "@/app/_lib/api";
import { revalidatePath } from "next/cache";

export const DeleteTaskAction =async (id: number) => {
    console.log(id,"//////////")
  const api = await DeleteTaskApi(id);
  if (api.status == 200) {
    revalidatePath("/schedule");
    return { success: true, message: "Schedule Deleted successfully" };
  }
  return Error(api.data?.message);
};
