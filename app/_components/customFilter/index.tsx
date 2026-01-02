import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";
import FilterForm from "../forms/filterForm";

type Props = {};

const CustomFilter = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className=" cursor-pointer " variant={"secondary"}>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Data</SheetTitle>
        </SheetHeader>
        <FilterForm inputs={[{ name: "query", text: "Name" }]} />
      </SheetContent>
    </Sheet>
  );
};

export default CustomFilter;
