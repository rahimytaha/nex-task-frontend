"use client";
import CustomFilter from "@/app/_components/customFilter";
import CustomTable from "@/app/_components/customTable";
import { TTaskType } from "@/app/_types";
import { Fragment, useOptimistic } from "react";
import CreateTask from "./createTask";

type Props = {
  scheduleId: number;
  data: TTaskType[];
};

const Table = ({ data, scheduleId }: Props) => {
  const [optimisticData, addOptimistic] = useOptimistic(data);
  return (
    <Fragment>
      <div className="mt-10 mb-2.5 flex  justify-between ">
        <CreateTask scheduleId={scheduleId} onCreate={alert} />
        <CustomFilter />
      </div>
      <CustomTable
        data={data}
        columns={[
          { header: "Id", key: "id" },
          { header: "Name", key: "name" },
          { header: "Description", key: "description" },
          { header: "Done Average", key: "doneAverage" },
          {
            header: "Actions",
            key: "actions" as keyof TTaskType,
            render: () => <div>
              
            </div>,
          },
        ]}
      />
    </Fragment>
  );
};

export default Table;
