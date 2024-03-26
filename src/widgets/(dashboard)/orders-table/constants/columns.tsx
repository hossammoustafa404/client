import { ColumnHeader } from "@/shared/ui";
import { ColumnDef } from "@tanstack/react-table";
import { get } from "http";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <ColumnHeader column={column} title="status" className="" />
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("status")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center">Email</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("email")}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("amount")}</div>;
    },
  },
];
