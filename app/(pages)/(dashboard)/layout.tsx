import CustomBreadcrumb from "@/app/_components/customBreadcrumb";
import SideBar from "@/app/_components/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, Slash } from "lucide-react";
import React from "react";
export const metadata = {
  title: "Dashboard | NexTask",
  description: "Manage your tasks and schedules efficiently",
};
const layout = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] p-8 gap-6   h-screen    ">
      <SideBar />
      <div>
        {/* <header className=" border-border border p-3 rounded-2xl   bg-sidebar/60  backdrop-blur ">
          j
        </header> */}
        <div className="flex items-center justify-between w-full">
          {/* سمت چپ: Breadcrumb */}
          <CustomBreadcrumb/>
          {/* سمت راست: جستجو و پروفایل */}
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search className="absolute left-3 size-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
                className="pl-9 bg-accent/50 border-none w-64 focus-visible:ring-1"
              />
              <kbd className="absolute right-3 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>

            {/* آواتار کاربر از /users/profile */}
            <Avatar className="size-9 border border-border">
              <AvatarImage src="/user-avatar.png" />
              <AvatarFallback>NT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
