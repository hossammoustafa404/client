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
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import DataTablePagination from "./DataTablePagination";
import ColumnToggleView from "./ColumnToggleView";
import { useSearchParams } from "next/navigation";

interface Props extends HTMLAttributes<HTMLTableElement> {
  columns: any[];
  data: any[];
  rowCount: number;
}

const DataTable: FC<Props> = ({ columns, data, rowCount }) => {
  const searchParams = useSearchParams();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    rowCount,
  });

  const { getHeaderGroups, getRowModel, setPagination } = table;

  useEffect(() => {
    let pageParam = Number(searchParams.get("page"));
    let limitParam = Number(searchParams.get("limit"));

    if (isNaN(limitParam) || ![10, 20, 30, 40, 50].includes(limitParam)) {
      limitParam = 10;
    }

    if (isNaN(pageParam) || pageParam <= 0) {
      pageParam = 1;
    }

    if (rowCount) {
      const lastPage = Math.ceil(rowCount / limitParam);

      if (pageParam > lastPage) {
        pageParam = lastPage;
      }
    }

    setPagination({ pageIndex: pageParam - 1, pageSize: limitParam });
  }, [searchParams, rowCount]);

  return (
    <div className="p-12 bg-white dark:bg-slate-950 rounded-md border">
      <header className="mb-6">
        <ColumnToggleView table={table} />
      </header>
      <div className=" border rounded-md ">
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
              getRowModel().rows.map(
                ({ id, getIsSelected, getVisibleCells }) => (
                  <TableRow key={id} data-state={getIsSelected() && "selected"}>
                    {getVisibleCells().map(({ id, column, getContext }) => (
                      <TableCell key={id}>
                        {flexRender(column.columnDef.cell, getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <footer className="mt-6">
        <DataTablePagination table={table} />
      </footer>
    </div>
  );
};

export default DataTable;
