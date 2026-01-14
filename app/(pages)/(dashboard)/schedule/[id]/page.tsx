
import { ScheduleById } from "@/app/_lib/api";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";
import EditSchedule from "../editSchedule";
import Table from "./table";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const schedule = await ScheduleById(Number(id));
  if (schedule.status != 200 || !schedule.data?.data) {
    redirect("/notFound");
  }
  const scheduleData = schedule.data.data;
  console.log(scheduleData);
  return (
    <div>
      <header className="flex items-center justify-between ">
        <div>
          <h2 className="mb-2.5 ">{scheduleData.name}</h2>
          <p className="text-primary "> {scheduleData.description}</p>
        </div>
        <EditSchedule data={scheduleData} trigger={true} />
      </header>
      <main>
        <Table />
      </main>
    </div>
  );
};

export default page;
