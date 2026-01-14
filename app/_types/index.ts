export type TScheduleType = {
  id: number;
  name: string;
  description: string;
  time?: string;
};
export type TTaskType ={
  id:number
  name:string
  description:string
  iconAddress?:string
}

export type TScheduleCreareType =Omit<TScheduleType,"id">
export type TTaskCreateType =Omit<TTaskType,"id">