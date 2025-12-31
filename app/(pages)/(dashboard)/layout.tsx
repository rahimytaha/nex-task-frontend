import CustomBreadcrumb from "@/app/_components/customBreadcrumb";
import SideBar from "@/app/_components/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const metadata = {
  title: "Dashboard | NexTask",
  description: "Manage your tasks and schedules efficiently",
};
const layout = ({children}) => {
  return (
    <div className="grid grid-cols-[280px_1fr] p-8 gap-6   h-screen    ">
      <SideBar />
      <div>
        <div className="flex mt-3 items-center justify-between w-full">
          <CustomBreadcrumb />

          <div className="flex items-center gap-4">
            <div className="relative flex items-center   ">
              <Search className="absolute left-3 size-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
                className="pl-9 bg-accent/50 border-none w-64 focus-visible:ring-1"
              />
              <kbd className="absolute right-3 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>

            <Avatar className="size-9 border border-border">
              <AvatarImage src="/user-avatar.png" />
              <AvatarFallback>TR</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
