import { TTaskCheck } from "@/app/_types";
import React from "react";

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
        <div>{el.id}-{el.status?"done":"not yet"}</div>
      ))}
    </div>
  );
};

export default Day;
