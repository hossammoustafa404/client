import { ColumnHeader } from "@/shared/ui";
import { ColumnDef } from "@tanstack/react-table";
import { get } from "http";

export type Category = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Title" className="" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <ColumnHeader
        column={column}
        title="Description"
        className=""
        sortable={false}
      />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("description")}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Price" className="" />
    ),

    cell: ({ row }) => {
      return <div className="">{row.getValue("price")}</div>;
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Rating" className="" />
    ),

    cell: ({ row }) => {
      return <div className="">{row.getValue("rating")}</div>;
    },
  },
];
