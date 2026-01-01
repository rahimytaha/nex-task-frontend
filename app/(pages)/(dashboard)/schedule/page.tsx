import CustomTable from "@/app/_components/customTable";
import { GetMySchedule } from "@/app/_lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import Table from "./table";
import CreateSchedule from "./createSchedule";
const Schedule = async () => {
  const data = await GetMySchedule();
  return (
    <div>
      <CreateSchedule/>
      <Table data={data} />
    </div>
  );
};

export default Schedule;
