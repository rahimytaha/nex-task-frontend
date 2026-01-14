"use client";
import CustomFilter from "@/app/_components/customFilter";
import CustomTable from "@/app/_components/customTable";
import { TTaskType } from "@/app/_types";
import { Fragment, useOptimistic } from "react";
import CreateTask from "./createTask";
import EditTask from "./editTask";
import { OptimisticAction } from "../optimisticAction";

type Props = {
  scheduleId: number;
  data: TTaskType[];
};

const Table = ({ data, scheduleId }: Props) => {
  const [optimisticData, addOptimistic] = useOptimistic(data, OptimisticAction);
  return (
    <Fragment>
      <div className="mt-10 mb-2.5 flex  justify-between ">
        <CreateTask
          scheduleId={scheduleId}
          onCreate={(e) => addOptimistic({ payload: e, type: "create" })}
        />
        <CustomFilter />
      </div>
      <CustomTable
        data={optimisticData}
        columns={[
          { header: "Id", key: "id" },
          { header: "Name", key: "name" },
          { header: "Description", key: "description" },
          { header: "Done Average", key: "doneAverage" as keyof TTaskType },
          {
            header: "Actions",
            key: "actions" as keyof TTaskType,
            render: () => (
              <div>
                <EditTask />
              </div>
            ),
          },
        ]}
      />
    </Fragment>
  );
};

export default Table;
