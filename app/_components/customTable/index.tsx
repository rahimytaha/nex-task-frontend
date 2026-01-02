// components/SimpleDynamicTable.tsx

import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Column<T> = {
  key: keyof T;         
  header: string;        
  render?: (value: T[keyof T], row: T) => React.ReactNode; 
};

type SimpleDynamicTableProps<T> = {
  data: T[]|undefined;
  columns: Column<T>[];
};

export default function CustomTable<T>({ data, columns }: SimpleDynamicTableProps<T>) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead  key={String(col.key)}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col) => (
                  <TableCell className='min-w-16  ' key={String(col.key)}>
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                NO DATA
              </TableCell>
            </TableRow>
          ):[...Array(5)].map((el,rowIndex)=><TableRow key={rowIndex}>
                {columns.map((col) => (
                  <TableCell key={String(col.key)}>
                    <Skeleton className='w-16    h-5 '/>
                  </TableCell>
                ))}
              </TableRow>)}
        </TableBody>
      </Table>
    </div>
  );
}