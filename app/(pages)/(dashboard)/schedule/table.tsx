"use client";
import CustomTable from "@/app/_components/customTable";
import { TScheduleType } from "@/app/_types";
import {  Info } from "lucide-react";
import Link from "next/link";
import DeleteSchedule from "./deleteSchedule";
import { useOptimistic } from "react";
import { OptimisticAction } from "./optimisticAction";

type Props = {
  data: TScheduleType[];
};

const Table = ({ data }: Props) => {
  const [optimisticSchedules,addOptimistic]=useOptimistic(data,OptimisticAction)
  return (
    <CustomTable
      data={data}
      columns={[
        { header: "Id", key: "id" },
        { header: "Name", key: "name"},
        { header: "Description", key: "description" ,render:(val)=>val !=""?val :"Not Set" },
        { header: "Time", key: "time",render:(val)=>val||"Not Set"  },
        {
          key: "actions" as keyof TScheduleType,
          header: "Action",
          render: (value, rows: TScheduleType) => (
            <div className="flex gap-1 ">

              <Link href={`/schedule/${rows.id}`}>
                <Info className="opacity-70   hover:opacity-100 duration-100" size={26} />
              </Link>
              <DeleteSchedule id={rows.id}/>
            </div>
          ),
        },
      ]}
    />
  );
};

export default Table;
