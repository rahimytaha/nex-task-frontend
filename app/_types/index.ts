export type TScheduleType = {
  id: number;
  name: string;
  description: string;
  time?: string;
};
export type TScheduleCreareType =Omit<TScheduleType,"id">