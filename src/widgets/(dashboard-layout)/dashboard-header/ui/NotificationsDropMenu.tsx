"use client";

import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/(shadcn)/DropdownMenu";
import { Button } from "@/shared/ui/(shadcn)/Button";
import { BellRing } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui";

const NotificationsDropMenu: FC = () => {
  const [data, setData] = useState([1]);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="outline-0">
        <Button variant={null} className="h-auto p-0">
          <Badge value={1}>
            <BellRing className="text-green-500" />
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={10}
        align="end"
        alignOffset={-15}
      >
        <DropdownMenuItem>hello 3</DropdownMenuItem>
        <DropdownMenuItem>hello 1</DropdownMenuItem>
        <DropdownMenuItem>hello 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropMenu;
