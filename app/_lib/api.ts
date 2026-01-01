"use server";
import { TScheduleCreareType, TScheduleType } from "../_types";
import { TInterceptorResponse } from "../types";
import { Interceptor } from "./interceptor";

export const GetMySchedule = async (): Promise<TScheduleType[]> => {
  const api = await Interceptor<TScheduleType[]>("/schedule/mine");
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
