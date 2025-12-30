import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
    name:string
    placeHolder?:string
    text:string
    type?:"text"|"password"
};

const CustomInput = ({name,text,placeHolder,type="text"}: Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 mb-2 "> 
      <Label htmlFor={name}>{text}</Label>
      <Input  id={name} name={name} placeholder={placeHolder||text} type={type} />
    </div>
  );
};

export default CustomInput;
