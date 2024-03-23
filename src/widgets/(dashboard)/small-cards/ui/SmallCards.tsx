import { cn } from "@/shared/lib/utils";
import React, { FC, HTMLAttributes } from "react";
import { SmallCard } from "../../small-card";
import { ShoppingCart } from "lucide-react";

interface Props extends HTMLAttributes<HTMLElement> {}

const SmallCards: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 grid-rows-4 sm:grid-rows-2 xl:grid-rows-1",
        className
      )}
      {...props}
    >
      <SmallCard
        Icon={ShoppingCart}
        iconBgColor="bg-orange-700"
        title="Total Orders"
        amount={552}
      />
      <SmallCard
        Icon={ShoppingCart}
        iconBgColor="bg-indigo-500"
        title="Total Orders"
        amount={552}
      />
      <SmallCard
        Icon={ShoppingCart}
        iconBgColor="bg-green-500"
        title="Total Orders"
        amount={552}
      />
      <SmallCard
        Icon={ShoppingCart}
        iconBgColor="bg-green-700"
        title="Total Orders"
        amount={552}
      />
    </div>
  );
};

export default SmallCards;
