import { GetMySchedule } from "@/app/_lib/api";

import Table from "./table";

const Schedule = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) => {
  const queries = await searchParams;
  const data = await GetMySchedule(queries);

  return <Table data={data} />;
};

export default Schedule;
