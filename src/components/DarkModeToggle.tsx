import { Moon, Sun } from "lucide-react";
import { useCustomDarkMode } from "../hooks/useCustomDarkMode";
import { twMerge } from "tailwind-merge";

export type DarkModeToggleProps = {
  className?: string;
};

export function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { isDark, setMode } = useCustomDarkMode();

  const toggle = () => {
    if (isDark) {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className={twMerge(
        "p-2 rounded-lg hover:bg-cs-text-10 flex items-center justify-center",
        className
      )}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
