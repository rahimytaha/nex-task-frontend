import Image from "next/image";
import fullLogoPng from "@/public/logo/fullLogo.png";
import Link from "next/link";
import { CalendarDays, User } from "lucide-react";
import SideBarItem from "./item";
import { ReactNode } from "react";
type Props = {};
interface IItems {
  text: string;
  icon:ReactNode
  link: string;
}
const SideBar = (props: Props) => {
  const items :IItems[]= [
    {link:"/dashboard",text:"Profile",icon:<User />},
    {link:"/schedule",text:"Schedules",icon:<CalendarDays/>}
  ];
  return (
    <aside className="border-border border p-3 rounded-2xl bg-sidebar    ">
      <Image width={180} alt="nexTask full detail logo" src={fullLogoPng} />
      <nav>
        <ul className="my-5  ">
          {items.map((el,index) => <SideBarItem key={index} icon={el.icon} link={el.link}  text={el.text}/>)}

        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
