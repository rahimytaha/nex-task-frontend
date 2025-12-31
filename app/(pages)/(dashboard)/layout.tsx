import SideBar from "@/app/_components/sidebar";
import React from "react";
export const metadata = {
  title: 'Dashboard | NexTask',
  description: 'Manage your tasks and schedules efficiently',
};
const layout = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] p-8  h-screen    ">
      <SideBar/>
      <div>100</div>
    </div>
  );
};

export default layout;
