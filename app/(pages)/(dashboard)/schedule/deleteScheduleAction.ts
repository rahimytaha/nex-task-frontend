"use server";

import { DeleteScheduleApi } from "@/app/_lib/api";
import { revalidatePath } from "next/cache";
type ActionState = {
  success?: boolean;
  message?: string;
};
export const DeleteScheduleAction = async (
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const id = Number(formData.get("id"));
  const api = await DeleteScheduleApi(55);
  if (api.status == 200) {
    revalidatePath("/schedule");
    return {success:true,message:"Schedule Deleted successfully"}
  }
  return {success:false,message:api.data?.message};
};
