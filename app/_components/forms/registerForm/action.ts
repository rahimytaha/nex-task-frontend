"use server";

import { Interceptor } from "@/app/_lib/interceptor";
import { registerSchema } from "@/app/_lib/zod-schemas";
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
    console.log(flatten.fieldErrors);
    return { errors: flatten.fieldErrors };
  }
  const { conFirmPassword, ...finalData } = data;
  const res = await Interceptor("/auth/signUp", {
    method: "POST",
    body: JSON.stringify(finalData),
  });
  console.log(res);
  if (res.status!=201) {
    console.log(data)
  } else {
    
  }
  return { message: "successFull" };
};
export default RegisterAction;
