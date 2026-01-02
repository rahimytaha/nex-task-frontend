
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
type TInputs = {
  name: string;
  defaultValue?: string;
  text: string;
};
type Props = {
  inputs: TInputs[];
};

const FilterForm = ({ inputs }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const FilterFormAction = async (formData: FormData) => {
    const url = new URLSearchParams(searchParams);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const dataList = Object.keys(data);
    dataList.forEach((el) => {
      url.set(el, data[el]);
    });
    router.push(`?${url.toString()}`);
  };

  return (
    <form action={FilterFormAction} className="mx-2  ">
      {inputs.map((el, index) => (
        <CustomInput
          key={index}
          name={el.name}
          text={el.text}
          defaultValue={searchParams.get(el.name) || el.defaultValue || ""}
        />
      ))}

      <Button className="mx-auto ">Apply Filters</Button>
    </form>
  );
};

export default FilterForm;
