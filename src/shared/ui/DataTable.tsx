"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/(shadcn)/Table";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FC, HTMLAttributes } from "react";
import { Button } from "./(shadcn)/Button";

interface Props extends HTMLAttributes<HTMLTableElement> {
  columns: any[];
  data: any[];
}

const DataTable: FC<Props> = ({ columns, data }) => {
  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    previousPage,
    getCanNextPage,
    nextPage,
  } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="bg-white dark:bg-slate-950 border rounded-md ">
      <Table>
        <TableHeader>
          {getHeaderGroups().map(({ id, headers }) => (
            <TableRow key={id}>
              {headers.map(({ id, isPlaceholder, column, getContext }) => (
                <TableHead key={id}>
                  {isPlaceholder
                    ? null
                    : flexRender(column.columnDef.header, getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {getRowModel().rows?.length ? (
            getRowModel().rows.map(({ id, getIsSelected, getVisibleCells }) => (
              <TableRow key={id} data-state={getIsSelected() && "selected"}>
                {getVisibleCells().map(({ id, column, getContext }) => (
                  <TableCell key={id}>
                    {flexRender(column.columnDef.cell, getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="text-end">
        <Button
          className=""
          onClick={() => previousPage()}
          disabled={!getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className=""
          onClick={() => nextPage()}
          disabled={!getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
