import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
    name:string
    placeHolder?:string
    text:string
    state?:any
    type?:"text"|"password",
    defaultValue?:string|number|string[]
};

const CustomInput = ({name,text,placeHolder,type="text",state,defaultValue}: Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 mb-2 "> 
      <Label htmlFor={name}>{text}</Label>
      <Input defaultValue={defaultValue} id={name} name={name} placeholder={placeHolder||text} type={type} />
      {  state?.errors&& state?.errors[name]&&state?.errors[name].map((el:string)=><span className="text-xs text-destructive ">{el}</span>)}
    </div>
  );
};

export default CustomInput;
