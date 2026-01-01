"use server";

import { DeleteScheduleApi } from "@/app/_lib/api";
import { revalidatePath } from "next/cache";
type ActionState = {
  success?: boolean;
  message?: string;
};
export const DeleteScheduleAction = async (id: number) => {
  const api = await DeleteScheduleApi(id);
  if (api.status == 200) {
    revalidatePath("/schedule");
    return { success: true, message: "Schedule Deleted successfully" };
  }
  return Error(api.data?.message);
};
