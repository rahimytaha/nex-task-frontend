"use client";
import CustomTable from "@/app/_components/customTable";
import { TScheduleType } from "@/app/_types";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Eye, Info } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";
import DeleteSchedule from "./deleteSchedule";

type Props = {
  data: TScheduleType[];
};

const Table = ({ data }: Props) => {
  return (
    <CustomTable
      data={data}
      columns={[
        { header: "Id", key: "id" },
        { header: "Name", key: "name" },
        { header: "Description", key: "description" },
        { header: "Time", key: "time" },
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
