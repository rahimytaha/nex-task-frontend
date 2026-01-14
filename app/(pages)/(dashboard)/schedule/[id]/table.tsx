"use client";
import CustomFilter from "@/app/_components/customFilter";
import CustomTable from "@/app/_components/customTable";
import { TTaskType } from "@/app/_types";
import { Fragment, useOptimistic } from "react";
import CreateTask from "./createTask";

type Props = {
  scheduleId:number
  data: TTaskType[];
};

const Table = ({ data,scheduleId}: Props) => {
  const [optimisticData, addOptimistic] = useOptimistic(data);
  return (
    <Fragment>
      <div>
        <CreateTask scheduleId={scheduleId}  onCreate={alert}/>
        <CustomFilter />
      </div>
      <CustomTable data={optimisticData} columns={[]} />
    </Fragment>
  );
};

export default Table;
