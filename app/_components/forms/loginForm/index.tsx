"use client";

import { useActionState } from "react";
import CustomInput from "../../common/customInput";
import LoginAction from "./action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction,isPending] = useActionState(LoginAction, {});
  return (
    <form action={formAction}>
      <CustomInput state={state} name="email" text="Email" />
      <CustomInput state={state}  name="password" text="Password" />
      <Link
        href={"/register"}
        className="mb-2 text-sm opacity-80  hover:opacity-100 duration-200  block "
      >
        Don't have an account? Sign Up
      </Link>
      <Button disabled={isPending} className="mx-auto  block cursor-pointer  ">{isPending?"Sending...":"Sign In"}</Button>
    </form>
  );
};

export default LoginForm;
