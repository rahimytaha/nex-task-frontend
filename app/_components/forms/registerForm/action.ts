"use server";

import { Interceptor } from "@/app/_lib/interceptor";
import { registerSchema } from "@/app/_lib/zod-schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
type State = {
  errors?: {
    email?: string[];
    password?: string[];
    conFirmPassword?: string[];
    name?: string[];
  };
  message?: string;
};

const RegisterAction = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const data = Object.fromEntries(formData);
  const validate = registerSchema.safeParse(data);
  if (!validate.success) {
    const flatten = z.flattenError(validate.error);
    return { errors: flatten.fieldErrors };
  }
  const cookieStore = await cookies();

  const { conFirmPassword, ...finalData } = data;
  const res = await Interceptor<{ token: string }>("/auth/signUp", {
    method: "POST",
    body: JSON.stringify(finalData),
  });
  console.log(res);
  if (res.status == 201) {
   cookieStore.set("access_token", res.data?.data?.token || "");
    redirect("/dashboard");
  } else {
    return { message: "account could not create" };
  }
};
export default RegisterAction;
