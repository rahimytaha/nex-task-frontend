import CustomTable from "@/app/_components/customTable";
import { GetMySchedule } from "@/app/_lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import Table from "./table";
const Schedule = async () => {
  const data = await GetMySchedule();
  console.log(data);
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default Schedule;
