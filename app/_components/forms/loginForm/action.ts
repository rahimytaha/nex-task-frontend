"use server"
import { Interceptor } from "@/app/_lib/interceptor";
import { loginSchema } from "@/app/_lib/zod-schemas";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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
    const cookieStore = await cookies()

    if (!validate.success) {
        const flatten=z.flattenError(validate.error)
        return {errors:flatten.fieldErrors}
    }
    const {email,password}=data
    const res = await Interceptor<{token:string}>("/auth/signIn",{method:"POST",body:JSON.stringify({email,password})})
    if (res.status==201) {
        cookieStore.set("access_token",res.data?.data?.token||"")
        redirect("/dashboard")
    }
    return {message:JSON.stringify(res.error)}

    
    
}
export default LoginAction