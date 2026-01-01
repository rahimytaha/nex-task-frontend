"use server";
import { UpdateScheduleApi } from "@/app/_lib/api";
import { CreateScheduleSchema } from "@/app/_lib/zod-schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type ActionState = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  success?: boolean;
  message?: string;
};
export const UpdateScheduleAction = async (
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const id = formData.get("id") as string;
  const validate = CreateScheduleSchema.safeParse({ description, name });
  if (!validate.success) {
    return {
      success: false,
      errors: z.flattenError(validate.error).fieldErrors,
    };
  }
  const api = await UpdateScheduleApi({ description, name, id: Number(id) });
  console.log(api)
  if (api.status == 200) {
    revalidatePath("/schedule");
    return {success:false}
  }
  return { success: true };
};
