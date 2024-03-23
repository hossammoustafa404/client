"use client";

import { cn } from "@/shared/lib/utils";
import { Logo } from "@/shared/ui";
import { Button } from "@/shared/ui/(shadcn)/Button";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { FC, HTMLAttributes, useState } from "react";
import { catalogLinks, navLinks } from "../constants";
import { usePathname } from "next/navigation";

interface Props extends HTMLAttributes<HTMLElement> {}

const DashboardSidebar: FC<Props> = ({ className, ...props }) => {
  // Hooks
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openCataglog, setOpenCatalog] = useState<boolean>(false);
  const pathname = usePathname().slice("/dashboard".length);

  return (
    <>
      <div
        className={cn(
          "duration-300 bg-red-500 flex-shrink-0",
          openSidebar ? "w-20 lg:w-72" : "w-20"
        )}
      />
      <aside
        className={cn(
          "fixed z-30 h-screen overflow-y-auto duration-300 bg-white dark:bg-slate-950",
          openSidebar ? "w-72" : "w-20",
          className
        )}
        {...props}
      >
        {/* Header */}
        <header className="px-6 pt-3 flex items-center">
          {openSidebar && <Logo />}
          <Button
            variant={null}
            className="h-auto p-0 ml-auto"
            onClick={() => {
              if (openSidebar === true) {
                setOpenCatalog(() => false);
              }
              setOpenSidebar((prev: boolean) => !prev);
            }}
          >
            <Menu className="text-green-500" size={32} />
          </Button>
        </header>

        {/* Nav Links */}
        <nav className="mt-6">
          <ul>
            {navLinks.map(({ id, icon, title, href }) => {
              if (title === "Catalog") {
                return (
                  <li
                    key={id}
                    className={cn(
                      "px-6 py-4 relative",
                      [
                        "/products",
                        "/categories",
                        "/attributes",
                        "/coupons",
                      ].includes(pathname)
                        ? "before:absolute before:left-0 before:top-0 before:w-[0.3rem] before:rounded-sm before:h-full before:bg-green-500"
                        : ""
                    )}
                  >
                    <Button
                      variant={null}
                      className={cn(
                        "h-auto p-0 flex gap-x-3 font-medium text-md",
                        !openSidebar ? "justify-center" : ""
                      )}
                      onClick={() => {
                        if (openCataglog === false) {
                          setOpenSidebar(() => true);
                        }
                        setOpenCatalog((prev) => !prev);
                      }}
                    >
                      {icon}
                      {openSidebar && title}
                      {openSidebar && (
                        <ChevronRight
                          className={cn(
                            "duration-300",
                            openCataglog ? "rotate-90" : "rotate-0"
                          )}
                        />
                      )}
                    </Button>
                    {openCataglog && (
                      <ul className="mt-3 px-6 py-4 rounded-md bg-black/30">
                        {catalogLinks.map(({ id, title, href }) => (
                          <li
                            key={id}
                            className={cn(
                              "py-1",
                              pathname === href.slice("/dashboard".length)
                                ? "text-green-500"
                                : ""
                            )}
                          >
                            <Link href={href}>-{" " + title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={id}
                  className={cn(
                    "px-6 py-4 relative",
                    pathname === href?.slice("/dashboard".length)
                      ? "before:absolute before:left-0 before:top-0 before:w-[0.3rem] before:rounded-sm before:h-full before:bg-green-500  text-green-500"
                      : ""
                  )}
                >
                  <Link
                    href={href as string}
                    className={cn(
                      "flex items-center gap-x-3 font-medium",
                      !openSidebar ? "justify-center" : ""
                    )}
                  >
                    {icon}
                    {openSidebar && title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <div className="h-[500vh]"></div> */}
      </aside>
    </>
  );
};

export default DashboardSidebar;
