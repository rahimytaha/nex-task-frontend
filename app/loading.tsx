// app/dashboard/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="py-52  flex justify-center items-center  ">
      <Skeleton className="h-10 w-64" /> 

    </div>
  );
}