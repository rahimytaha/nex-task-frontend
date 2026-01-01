"use server"
import { CreateScheduleApi } from "@/app/_lib/api";
import { CreateScheduleSchema } from "@/app/_lib/zod-schemas";
import { TScheduleCreareType } from "@/app/_types";
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
export const CreateScheduleAction = async (
  prevSate: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const validate = CreateScheduleSchema.safeParse({ description, name });
  if (!validate.success) {
    return {
      success: false,
      errors: z.flattenError(validate.error).fieldErrors,
    };
  }
//   const { description, name } = data;
  const api = await CreateScheduleApi({ description, name });
  if (api.status==201) {
    revalidatePath("/schedule")
  }
  return { success: true };
};
