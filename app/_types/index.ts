export type TScheduleType = {
  id: number;
  name: string;
  description: string;
  time?: string;
};
export type TTaskType = {
  id: number;
  name: string;
  description: string;
  iconAddress?: string;
};

export type TScheduleCreareType = Omit<TScheduleType, "id">;
export type TTaskCreateType = {
  name: string;
  description: string;
  scheduleId: number;
};

export type TTaskCheck = {
  "1": boolean;
  "2": boolean;
  "3": boolean;
  day: Date;
};
