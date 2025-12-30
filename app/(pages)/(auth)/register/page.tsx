import CustomInput from "@/app/_components/common/customInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  return (
    <div className="h-screen flex justify-center items-center  ">
      <div className="bg-card shadow-sm  border border-border  rounded-[14px] p-8     ">
        <h1 className="text-3xl font-bold  ">Create an Account</h1>
        <p className="mb-2 ">join NexTask to manage your schedules</p>
        <CustomInput name="name" text="Name" />
        <CustomInput name="email" text="Email" />
        <CustomInput name="password" type="password" text="Password" />
        <CustomInput name="conFirmPassword" type="password" text="Confirm Password" />
        <Link href={"/signIn"} className="mb-2 text-sm opacity-80  hover:opacity-100 duration-200  block " >Already have an account? Sign In</Link>
        <Button className="mx-auto  block cursor-pointer  ">Create Account</Button>
      </div>
    </div>
  );
};

export default page;
