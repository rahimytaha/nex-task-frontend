type ActionState = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  success?: boolean;
  message?: string;
};
export const UpdateScheduleAction = async(prevState:ActionState,formData:FormData):Promise<ActionState>=>{
    return {}

}