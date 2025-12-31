"use server"
import { Interceptor } from "@/app/_lib/interceptor";
import { loginSchema } from "@/app/_lib/zod-schemas";
import {z} from "zod";

type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

const LoginAction = async (prevState:State,formData:FormData):Promise<State>=>{
    const data = Object.fromEntries(formData)
    const validate = loginSchema.safeParse(data)
    

    if (!validate.success) {
        const flatten=z.flattenError(validate.error)
        console.log(flatten,validate.error,data)
        return {errors:flatten.fieldErrors}
    }
    const res = await Interceptor("/auth/signIn",{method:"POST",body:JSON.stringify(data)})
    console.log(res)
    return {}
}
export default LoginAction