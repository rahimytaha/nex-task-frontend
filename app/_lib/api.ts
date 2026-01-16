"use server";
import { TScheduleCreareType, TScheduleType } from "../_types";
import { TInterceptorResponse } from "../types";
import { Interceptor } from "./interceptor";

export const GetMySchedule = async (
  queries: Record<string, string>
): Promise<TScheduleType[]> => {
  const api = await Interceptor<TScheduleType[]>("/schedule/mine", { queries });
  if (api.data?.data) {
    return api.data?.data;
  }
  return [];
};
export const DeleteScheduleApi = async (
  id: number
): Promise<TInterceptorResponse<Boolean>> => {
  const api = await Interceptor<Boolean>(`/schedule/delete/${id}`, {
    method: "DELETE",
  });
  return api;
};
export const CreateScheduleApi = async (
  data: TScheduleCreareType
): Promise<TInterceptorResponse<Boolean>> => {
  const api = await Interceptor<Boolean>(`/schedule/create`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return api;
};

export const UpdateScheduleApi = async (
  data: TScheduleType
): Promise<TInterceptorResponse<Boolean>> => {
  const api = await Interceptor<Boolean>(`/schedule/update/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ name: data.name, description: data.description }),
  });
  return api;
};

export const ScheduleById = async (id: number) => {
  const api = await Interceptor<TScheduleType>(`/schedule/byId/${id}`);
  return api;
};

export const TaskByScheduleId = async (scheduleId: number) => {
  const api = await Interceptor<TScheduleType[]>(
    `/task/base/mine/${scheduleId}`
  );
  return api;
};
export const DeleteTaskApi = async (id:number)=>{
   const api = await Interceptor(
    `/task/base/byId/${id}`,{method:"DELETE"}
  );
  return api; 
}