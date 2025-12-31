"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import { usePathname } from "next/navigation"

const CustomBreadcrumb = () => {
    const pathName = usePathname()
    const convertPathNane = ()=>{
        let pathList=pathName.split("/")

        console.log(pathList)
    }
    convertPathNane()
  return (
    <div className="flex items-center gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
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
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
  )
}

export default CustomBreadcrumb