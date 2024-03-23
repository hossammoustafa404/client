import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/(shadcn)/DropdownMenu";
import Link from "next/link";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import { Avatar } from "@/shared/ui/(shadcn)/Avatar";
import { Button } from "@/shared/ui/(shadcn)/Button";

const AvatarDropMenu: FC = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="outline-0">
        <Button variant={null} className="h-auto p-0">
          <Avatar className="bg-red-500 w-8 h-8" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={10}
        align="end"
        alignOffset={-15}
      >
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex gap-x-2 items-center">
            <LayoutDashboard className="w-5" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex gap-x-2 items-center">
            <User className="w-5" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem asChild>
          <Button
            variant={null}
            className="p-1 h-auto flex items-center gap-x-2 font-normal"
          >
            <LogOut className="w-5" />
            <span>Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropMenu;
