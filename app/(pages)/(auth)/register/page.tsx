import CustomInput from "@/app/_components/common/customInput";

const page = async () => {
  return (
    <div className="h-screen flex justify-center items-center  ">
      <div className="bg-card rounded-[14px] p-3   ">
        <h1 className="">Create an Account</h1>
        <p className="mb-2 ">join NexTask to manage your schedules</p>
        <CustomInput name="email" text="Email" />
      </div>
    </div>
  );
};

export default page;
