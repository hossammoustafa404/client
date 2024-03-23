"use client";

import { Button } from "@/shared/ui/(shadcn)/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, HTMLAttributes, useEffect, useState } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const ThemeSwitcher: FC<Props> = () => {
  // Hooks
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Effects
  useEffect(() => {
    setMounted(() => true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant={null}
      className="h-auto p-0"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {theme === "dark" ? (
        <Sun className="text-green-500" />
      ) : (
        <Moon className="text-green-500" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
