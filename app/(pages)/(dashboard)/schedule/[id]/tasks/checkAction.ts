"use server"

import { CheckTask } from "@/app/_lib/api"

export const CheckAction =async (formData:FormData)=>{
    console.log("first")
    const taskId = formData.get("taskId") as string
    const api = await CheckTask(Number(taskId))
}