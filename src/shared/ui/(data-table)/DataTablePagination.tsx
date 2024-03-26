"use client";

import { Table } from "@tanstack/react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../(shadcn)/Select";
import { Button } from "../(shadcn)/Button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  // Hooks
  const pathname = usePathname();
  const router = useRouter();

  // Table Destructing
  const {
    getState,
    setPageSize,
    getPageCount,
    setPageIndex,
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
  } = table;

  const {
    pagination: { pageIndex, pageSize },
  } = getState();

  useEffect(() => {
    router.push(`${pathname}?page=${pageIndex + 1}&limit=${pageSize}`);
  }, [pageIndex, pageSize]);

  return (
    <div className="flex items-center justify-between px-2 flex-wrap gap-6">
      <div className="flex-shrink-1 md:flex-shrink-0 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center flex-wrap gap-8">
        <div className="flex items-center space-x-2 flex-wrap">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${getState().pagination.pageSize}`}
            onValueChange={(value) => {
              setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex">
          <div className="flex w-[100px] items-center text-sm font-medium">
            Page {getState().pagination.pageIndex + 1} of {getPageCount()}
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* First Page */}
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => setPageIndex(0)}
              disabled={!getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>

            {/* Previous Page */}
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => previousPage()}
              disabled={!getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            {/* Next Page */}
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => nextPage()}
              disabled={!getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>

            {/* Last Page */}
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => setPageIndex(table.getPageCount() - 1)}
              disabled={!getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTablePagination;
