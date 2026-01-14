import { TTaskType } from "@/app/_types";

const OptimisticAction = (
  state: TTaskType[],
  action: { type: "create" | "update" | "delete"; payload: any }
) => {
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
