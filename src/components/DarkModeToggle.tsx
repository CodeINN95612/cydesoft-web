import { useDarkMode } from "@rbnd/react-dark-mode";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const { mode, setMode } = useDarkMode();
  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <button onClick={toggle} className="p-2 rounded-lg hover:bg-cs-text-10">
      {mode === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}
