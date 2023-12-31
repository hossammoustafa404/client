"use client";

import { Button } from "@components/ui/Button";
import { cn } from "@utils";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, HTMLAttributes } from "react";

interface props extends HTMLAttributes<HTMLButtonElement> {}

const ModeToggle: FC<props> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <Button onClick={handleMode} variant="outline" className={cn(className)}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ModeToggle;
