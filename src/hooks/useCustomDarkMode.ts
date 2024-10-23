import { useDarkMode } from "@rbnd/react-dark-mode";
import { useEffect, useState } from "react";

export function useCustomDarkMode() {
  const { mode, setMode } = useDarkMode();
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    //query document.documentElement, if mode is neither "dark" nor "light", but the document.documentElement classList contains "dark", setDark to true
    if (
      mode !== "dark" &&
      mode !== "light" &&
      document.documentElement.classList.contains("dark-mode")
    ) {
      setDark(true);
    } else if (mode === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [mode]);

  return { mode, setMode, isDark };
}
