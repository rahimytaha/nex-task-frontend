"use client";
import CustomInput from "../../common/customInput";
import { Button } from "@/components/ui/button";
import RegisterAction from "./action";
import { useActionState } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useActionState(RegisterAction, {});
  return (
    <form action={formAction} key={JSON.stringify(state)}>
      <CustomInput state={state} name="name" text="Name" />
      <CustomInput state={state} name="email" text="Email" />
      <CustomInput  state={state} name="password" type="password" text="Password" />
      <CustomInput  
        state={state}
        name="conFirmPassword"
        type="password"
        text="Confirm Password"
      />
      <Link
        href={"/signIn"}
        className="mb-2 text-sm opacity-80  hover:opacity-100 duration-200  block "
      >
        Already have an account? Sign In
      </Link>
      <Button className="mx-auto  block cursor-pointer  ">
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
