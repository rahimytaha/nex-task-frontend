import { TTaskCheck } from "@/app/_types";
import React from "react";
import { CheckAction } from "./checkAction";

type Props = {
  day: TTaskCheck;
};

const Day = ({ day }: Props) => {
  let keys = Object.keys(day);
  keys = keys.filter((el) => el != "day");
  const tasksChartData = keys.map((el) => {
    return { id: el, status: day[el] };
  });
  console.log(tasksChartData, day.day);
  return (
    <div>
      {tasksChartData.map((el) => (
        <form action={CheckAction}>
          <input type="hidden" value={el.id} name="taskId" />
          <button>
            {el.id}-{el.status ? "done" : "not yet"}
          </button>
        </form>
      ))}
    </div>
  );
};

export default Day;
