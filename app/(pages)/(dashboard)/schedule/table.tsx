"use client";
import CustomTable from "@/app/_components/customTable";
import { TScheduleType } from "@/app/_types";
import { Info } from "lucide-react";
import Link from "next/link";
import DeleteSchedule from "./deleteSchedule";
import { Fragment, useOptimistic } from "react";
import { OptimisticAction } from "./optimisticAction";
import CreateSchedule from "./createSchedule";
import { Button } from "@/components/ui/button";
import EditSchedule from "./editSchedule";
import CustomFilter from "@/app/_components/customFilter";

type Props = {
  data: TScheduleType[];
};

const Table = ({ data }: Props) => {
  const [optimisticSchedules, addOptimistic] = useOptimistic(
    data,
    OptimisticAction
  );
  return (
    <Fragment>
      <div className="mb-3 flex justify-between mt-16 ">
        <CreateSchedule
          onCreate={(val) => addOptimistic({ payload: val, type: "create" })}
        />
        <CustomFilter/>
      </div>
      <CustomTable
        data={optimisticSchedules}
        columns={[
          { header: "Id", key: "id" },
          { header: "Name", key: "name" },
          {
            header: "Description",
            key: "description",
            render: (val) => (val != "" ? val : "Not Set"),
          },
          { header: "Time", key: "time", render: (val) => val || "Not Set" },
          {
            key: "actions" as keyof TScheduleType,
            header: "Action",
            render: (value, rows: TScheduleType) => (
              <div className="flex gap-1 ">
                <Link href={`/schedule/${rows.id}`}>
                  <Info
                    className="opacity-70   hover:opacity-100 duration-100"
                    size={26}
                  />
                </Link>
                <DeleteSchedule
                  onDelete={() =>
                    addOptimistic({ payload: rows.id, type: "delete" })
                  }
                  id={rows.id}
                />
                <EditSchedule
                  opUpdate={(val: TScheduleType) =>
                    addOptimistic({ payload: val, type: "update" })
                  }
                  data={rows}
                />
              </div>
            ),
          },
        ]}
      />
    </Fragment>
  );
};

export default Table;
