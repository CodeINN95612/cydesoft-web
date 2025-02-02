"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

export type DarkModeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggle = () => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className={twMerge(
        "p-2 rounded-lg hover:bg-cs-foreground-10 flex items-center justify-center",
        className
      )}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
