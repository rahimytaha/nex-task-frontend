import { TScheduleType } from "@/app/_types";

export const OptimisticAction = (
  state: TScheduleType[],
  action: { type: "create" | "update" | "delete"; payload: any }
): TScheduleType[] => {
  switch (action.type) {
    case "delete":
      return state.filter((el) => el.id != action.payload);
    case "create":
      return [action.payload, ...state];
    case "update":
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    default:
      return state;
  }
};
