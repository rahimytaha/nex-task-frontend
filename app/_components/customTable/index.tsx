"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDown, ArrowUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

type Column<T> = {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type SimpleDynamicTableProps<T> = {
  data: T[] | undefined;
  columns: Column<T>[];
};
type TSortState = {
  field: string;
  type: "asc" | "desc";
};
export default function CustomTable<T>({
  data,
  columns,
}: SimpleDynamicTableProps<T>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sortState, setSortState] = useState<TSortState | undefined>(
    searchParams.get("sortType") && searchParams.get("sortCol")
      ? {
          field: searchParams.get("sortCol")||"",
          type: searchParams.get("sortType") == "asc" ? "asc" : "desc",
        }
      : undefined
  );

  useEffect(() => {
    if (sortState) {
      const url = new URLSearchParams(searchParams);
      url.set("sortCol", sortState.field);
      url.set("sortType", sortState.type);
      router.push(`?${url.toString()}`);
    }
  }, [sortState]);
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={String(col.key)}>
                <div className="flex items-center  gap-0.5 ">
                  <button
                    onClick={() => {
                      col.sortable
                        ? sortState?.field == col.key
                          ? setSortState(undefined)
                          : setSortState({
                              field: col.key.toString(),
                              type: "desc",
                            })
                        : undefined;
                    }}
                  >
                    {col.header}
                  </button>
                  {col.sortable && sortState?.field == col.key ? (
                    sortState.type == "asc" ? (
                      <ArrowDown
                        className="opacity-70 hover:opacity-100 duration-200 size-5 "
                        onClick={() =>
                          setSortState({
                            field: col.key.toString(),
                            type: "desc",
                          })
                        }
                      />
                    ) : (
                      <ArrowUp
                        className="opacity-70 hover:opacity-100 duration-200 size-5 "
                        onClick={() =>
                          setSortState({
                            field: col.key.toString(),
                            type: "asc",
                          })
                        }
                      />
                    )
                  ) : undefined}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data ? (
            data.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col) => (
                    <TableCell className="min-w-16  " key={String(col.key)}>
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  NO DATA
                </TableCell>
              </TableRow>
            )
          ) : (
            [...Array(5)].map((el, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col) => (
                  <TableCell key={String(col.key)}>
                    <Skeleton className="w-16    h-5 " />
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
