"use server";

import { registerSchema } from "@/app/_lib/zod-schemas";
import {z} from "zod";
type State = {
  errors?: {
    email?: string[];
    password?: string[];
    conFirmPassword?: string[];
    name?: string[];
  };
  message?: string;
};
const RegisterAction = async(prevState:State, formData:FormData):Promise<State> => {
    const data = Object.fromEntries(formData)
    const validate = registerSchema.safeParse(data)
    if (!validate.success) {
        const flatten= z.flattenError(validate.error)
        console.log(flatten.fieldErrors)
        return {errors:flatten.fieldErrors}
    }
    return {message:"successFull"}

};
export default RegisterAction;
