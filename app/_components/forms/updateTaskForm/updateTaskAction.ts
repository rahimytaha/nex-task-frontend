"use server";

import { Interceptor } from "@/app/_lib/interceptor";
import { CreateTaskSchema } from "@/app/_lib/zod-schemas";
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
export const UpdateTaskAction = async (
  state: ActionState,
  formdata: FormData
): Promise<ActionState> => {
  const id = formdata.get("id") as string;
  const scheduleId = formdata.get("scheduleId") as string;
  const name = formdata.get("name") as string;
  const description = formdata.get("description") as string;
  const validate = CreateTaskSchema.safeParse({ name, description });
  if (!validate.success) {
    return {
      success: false,
      errors: z.flattenError(validate.error).fieldErrors,
    };
  }

  const api = await Interceptor(`/task/base/update/${id}`, {
    body: JSON.stringify({
      name,
      description: description != "" ? description : undefined,
    }),
    method: "PUT",
  });

  revalidatePath("/schedule/" + scheduleId);
  return { message: "task successfully added", success: true };
};
