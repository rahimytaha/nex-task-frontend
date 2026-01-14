"use server";
type ActionState = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  success?: boolean;
  message?: string;
};
export const  CreateTaskAction = async (state:ActionState, formdata: FormData) => {
    console.log(formdata,222,state)
    return {}
};
