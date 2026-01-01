"use client";
import CustomTable from "@/app/_components/customTable";
import { TScheduleType } from "@/app/_types";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Eye, Info } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

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
            <Fragment>
              <Link href={`/schedule/${rows.id}`}>
                <Info />
              </Link>
              
            </Fragment>
          ),
        },
      ]}
    />
  );
};

export default Table;
