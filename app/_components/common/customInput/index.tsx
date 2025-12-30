import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
    name:string
    placeHolder?:string
    text:string
};

const CustomInput = ({name,text,placeHolder}: Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor={name}>{text}</Label>
      <Input id={name} name={name} placeholder={placeHolder||text} type="text" />
    </div>
  );
};

export default CustomInput;
