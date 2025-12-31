"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  link: string;
  text: string;
  icon: ReactNode;
};

const SideBarItem = ({ icon, link, text }: Props) => {
  const pathName = usePathname();
  const checkActice = (): Boolean => {
    return pathName===link;
  };
  return (
    <Link
      href={link}
      className={`bg-accent  flex gap-2 text-sm items-center border border-sidebar-border   py-2 px-3 my-3  rounded-[10px] font-medium ${
        checkActice()
          ? "bg-primary text-primary-foreground "
          : " hover:text-accent-foreground   "
      }  `}
    >
      {icon}
      {text}
    </Link>
  );
};

export default SideBarItem;
