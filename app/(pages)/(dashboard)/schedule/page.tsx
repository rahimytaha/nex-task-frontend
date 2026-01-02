
import { GetMySchedule } from "@/app/_lib/api";

import Table from "./table";

const Schedule = async () => {
  const data = await GetMySchedule();

  return (
 
      
      <Table data={data} />
   
  );
};

export default Schedule;
