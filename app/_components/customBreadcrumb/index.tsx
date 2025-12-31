"use client";
import { RouteName } from "@/app/_config/routeName";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
interface IPath {
  path: string;
  name: string;
}
const CustomBreadcrumb = () => {
  const pathName = usePathname();
  const [pathList, setPathList] = useState<IPath[] | undefined>(undefined);
  const convertPathNane = () => {
    let pathList = pathName.split("/");
    const list = pathList.map((el) => {
      return {
        path: `/${el}`,
        name: RouteName.find((e) => e.path == el)?.name || el,
      };
    });
    setPathList(list);
  };
  useEffect(() => {
    convertPathNane();
  }, [pathName]);
  return (
    <div className="flex items-center gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          {pathList?.map((el, index) => (
            <Fragment key={index} >
              {index != 0 && <BreadcrumbSeparator />}

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={el.path}>{el.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
          {/* <BreadcrumbItem>
            <BreadcrumbLink
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="size-3" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-foreground">
              Schedules
            </BreadcrumbPage>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadcrumb;
