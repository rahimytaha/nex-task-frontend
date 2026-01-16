import { GetTasksCheck } from "@/app/_lib/api";
import Day from "./day";

type Props = {
  params: { id: number };
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);
  const data = await GetTasksCheck(id);
  const list = data.data?.data;
  if (!list) {
    return Error();
  }

  return (
    <div className="flex border rounded-xl p-1 justify-around  ">
      <div>
        <h3 className="rotate-45 text-xs  py-5  ">
         Tasks
        </h3>
        <div>
            <div>12</div>
            <div>13</div>
        </div>
      </div>
      {list.map((el) => (
        <div>
          <h3 className="rotate-45 text-xs  py-5  ">
            {new Date(el.day).toLocaleDateString()}
          </h3>
          <Day day={el} />
        </div>
      ))}
    </div>
  );
};

export default page;
