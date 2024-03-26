import { CategoriesBulkAction } from "@/features/(categories)/categories-bulk-action";
import { DeleteCategories } from "@/features/(categories)/delete-categories";
import { ExportCategories } from "@/features/(categories)/export-categories";
import { FilterCategories } from "@/features/(categories)/filter-categories";
import { ImportCategories } from "@/features/(categories)/import-categories";
import { cn } from "@/shared/lib/utils";
import { Heading, TableActions } from "@/shared/ui";
import { buttonVariants } from "@/shared/ui/(shadcn)/Button";
import { CategoriesTable } from "@/widgets/(categories)/categories-table";
import { Plus } from "lucide-react";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Heading title="Categories" />
      </header>

      {/* Actions Box */}
      <TableActions
        ImportAction={ImportCategories}
        ExportAction={ExportCategories}
        BulkAction={CategoriesBulkAction}
        DeleteAction={DeleteCategories}
        addTitle="Add Category"
        addHref="/dashboard/categories/add"
      />

      {/* <section className="p-6 mt-6 rounded-md flex items-center bg-white dark:bg-slate-950 shadow-md">
        <div className="flex gap-x-3">
          <ExportCategories />
          <ImportCategories />
        </div>
        <div className="ml-auto flex gap-x-3">
          <CategoriesBulkAction />
          <DeleteCategories />
          <Link
            href="/dashboard/categories/add"
            className={cn(
              buttonVariants(),
              "filled-btn !bg-green-600 hover:!bg-green-600/80"
            )}
          >
            <Plus className="w-4" />
            <span>Add Category</span>
          </Link>
        </div>
      </section> */}

      {/* Filter Box*/}
      <section className="p-6 mt-6 rounded-md flex items-center bg-white dark:bg-slate-950 shadow-md">
        <FilterCategories />
      </section>
      {/* CategoriesTable */}
      <section className="mt-4 shadow-md">
        <CategoriesTable />
      </section>
    </>
  );
};

export default Categories;
