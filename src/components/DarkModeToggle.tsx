import { Moon, Sun } from "lucide-react";
import { useCustomDarkMode } from "../hooks/useCustomDarkMode";

export function DarkModeToggle() {
  const { isDark, setMode } = useCustomDarkMode();

  const toggle = () => {
    if (isDark) {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <button onClick={toggle} className="p-2 rounded-lg hover:bg-cs-text-10">
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
