import { ScheduleById, TaskByScheduleId } from "@/app/_lib/api";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";
import EditSchedule from "../editSchedule";
import Table from "./table";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const api = await ScheduleById(Number(id));
  return {
    title: api.data?.data?.name + "detail",
    description: api.data?.data?.description,
  };
};
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const schedule = await ScheduleById(Number(id));
  const tasks = await TaskByScheduleId(Number(id));
  if (schedule.status != 200 || !schedule.data?.data || tasks.status != 200 || !tasks.data?.data) {
    redirect("/notFound");
  }
  const scheduleData = schedule.data.data;
  const taskData = tasks.data.data;
  // console.log(taskData)

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
        <Table data={taskData}  scheduleId={Number(id)} />
      </main>
    </div>
  );
};

export default page;
