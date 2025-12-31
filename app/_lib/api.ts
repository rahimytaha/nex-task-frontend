'use server'
import { TScheduleType } from "../_types";
import { Interceptor } from "./interceptor";

export const GetMySchedule = async (): Promise<TScheduleType[]> => {
  const api = await Interceptor<TScheduleType[]>("/schedule/mine");
  if (api.data?.data) {
    return api.data?.data;
  }
  return []
};
