import CustomTable from "@/app/_components/customTable";
import { GetMySchedule } from "@/app/_lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import Table from "./table";
import CreateSchedule from "./createSchedule";
import { Button } from "@/components/ui/button";
const Schedule = async () => {
  const data = await GetMySchedule();
  return (
    <div>
      <div className="mb-3 flex justify-between mt-16 ">
        <CreateSchedule />
        <Button className=" cursor-pointer " variant={"secondary"}>Filter</Button>
      </div>
      <Table data={data} />
    </div>
  );
};

export default Schedule;
