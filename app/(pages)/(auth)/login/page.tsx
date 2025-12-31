
import LoginForm from "@/app/_components/forms/loginForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login to NexTask",
};
const page = async () => {
  return (
    <div className="h-screen flex justify-center items-center  ">
      <div className="bg-card shadow-sm  border border-border  rounded-[14px] p-8     ">
        <h1 className="text-3xl font-bold  ">Login to NexTask</h1>
        <p className="mb-2 ">Enter your credentials to access your account</p>
        <LoginForm  />
      </div>
    </div>
  );
};

export default page;
