import RegisterForm from "@/app/_components/forms/registerForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "create an account",
};
const page = async () => {
  return (
    <div className="h-screen flex justify-center items-center  ">
      <div className="bg-card shadow-sm  border border-border  rounded-[14px] p-8     ">
        <h1 className="text-3xl font-bold  ">Create an Account</h1>
        <p className="mb-2 ">join NexTask to manage your schedules</p>
        <RegisterForm  />
      </div>
    </div>
  );
};

export default page;
