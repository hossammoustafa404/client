import { cn } from "@/shared/lib/utils";
import { FC, HTMLAttributes } from "react";
import { Button, buttonVariants } from "../(shadcn)/Button";
import { Download, Edit, Plus, Trash } from "lucide-react";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLElement> {
  addTitle: string;
  addHref: string;
  ImportAction: any;
  ExportAction: any;
  BulkAction: any;
  DeleteAction: any;
}

const TableActions: FC<Props> = ({
  ImportAction,
  ExportAction,
  BulkAction,
  DeleteAction,
  addTitle,
  addHref,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "p-6 mt-6 rounded-md flex justify-between items-center flex-wrap gap-6 bg-white dark:bg-slate-950 shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex gap-x-3 gap-y-6 flex-wrap">
        {/* Import Action */}
        <ImportAction variant="outline" className="outline-btn">
          <Download className="w-4" />
          <span>Export</span>
        </ImportAction>

        {/* Export Action */}
        <ExportAction variant="outline" className="outline-btn">
          <Download className="w-4" />
          <span>Import</span>
        </ExportAction>
      </div>
      <div className="flex gap-x-3 gap-y-6 flex-wrap">
        {/* Bulk Action */}
        <BulkAction className="filled-btn !bg-blue-600 hover:!bg-blue-600/80">
          <Edit className="w-4" />
          <span>Bulk Action</span>
        </BulkAction>

        {/* Delete Action */}
        <DeleteAction className="filled-btn !bg-red-600 hover:!bg-red-600/80">
          <Trash className="w-4" />
          <span>Delete</span>
        </DeleteAction>

        {/* Add Action */}
        <Link
          href={addHref}
          className={cn(
            buttonVariants(),
            "filled-btn !bg-green-600 hover:!bg-green-600/80"
          )}
        >
          <Plus className="w-4" />
          <span>{addTitle}</span>
        </Link>
      </div>
    </section>
  );
};

export default TableActions;
