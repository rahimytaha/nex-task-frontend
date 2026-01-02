import { Fragment } from "react/jsx-runtime";
import { Skeleton } from "@/components/ui/skeleton";
import CustomTable from "@/app/_components/customTable";
import { TScheduleType } from "@/app/_types";

const loading = () => {
  return (
    <Fragment>
      <div className="mb-3 flex  items-center  justify-between mt-16 ">
        <Skeleton className="h-9   w-35.75 " />
        <Skeleton className="h-5     w-10  " />
      </div>
      <CustomTable
        data={undefined}
        columns={[
          { header: "Id", key: "id" },
          { header: "Name", key: "name" },
          {
            header: "Description",
            key: "description",
          },
          { header: "Time", key: "time" },
          {
            key: "actions" as keyof TScheduleType,
            header: "Action"
          },
        ]}
      />
    </Fragment>
  );
};

export default loading;
