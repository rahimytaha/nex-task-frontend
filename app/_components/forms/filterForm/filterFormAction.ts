"use server";

import { redirect } from "next/navigation";

export const FilterFormAction = async (formData: FormData) => {
  const url = new URLSearchParams();
  const data = Object.fromEntries(formData) as Record<string, string>;
  const dataList = Object.keys(data);
  dataList.forEach((el) => {
    url.set(el, data[el]);
  });

  redirect(`?${url.toString()}`)
};
