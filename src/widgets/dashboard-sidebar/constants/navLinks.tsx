import {
  Compass,
  Component,
  LayoutDashboard,
  Settings,
  Store,
  Tractor,
  User,
  Users,
} from "lucide-react";

export const navLinks = [
  {
    id: 1,
    icon: <LayoutDashboard />,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: <Component />,
    title: "Catalog",
  },
  {
    id: 3,
    icon: <Users />,
    title: "Customers",
    href: "/dashboard/customers",
  },
  {
    id: 4,
    icon: <Compass />,
    title: "Orders",
    href: "/dashboard/orders",
  },
  {
    id: 5,
    icon: <User />,
    title: "Staff",
    href: "/dashboard/staff",
  },
  {
    id: 6,
    icon: <Tractor />,
    title: "Farmers",
    href: "/dashboard/farmers",
  },
  {
    id: 7,
    icon: <Store />,
    title: "Markets",
    href: "/dashboard/markets",
  },
  {
    id: 8,
    icon: <Settings />,
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export const catalogLinks = [
  {
    id: 1,
    title: "Products",
    href: "/dashboard/products",
  },
  {
    id: 2,
    title: "Categories",
    href: "/dashboard/categories",
  },
  {
    id: 3,
    title: "Attributes",
    href: "/dashboard/attributes",
  },
  { id: 4, title: "Coupons", href: "/dashboard/coupons" },
];
