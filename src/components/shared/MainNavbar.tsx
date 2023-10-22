import Link from "next/link";
import MainLogo from "./MainLogo";
import ModeToggle from "./ModeToggle";
import { cn } from "@lib/utils";
import { buttonVariants } from "@components/ui/button";

const MainNavbar = () => {
  return (
    <nav className="mb-8">
      <div className="container">
        <div className="min-h-[4rem] flex items-center">
          {/* Logo */}
          <MainLogo />

          {/* Mode Toggle */}
          <ModeToggle className="ml-auto mr-6" />

          {/* Signin Button */}
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ size: "sm" }),
              "capitalize font-semibold"
            )}
          >
            sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
