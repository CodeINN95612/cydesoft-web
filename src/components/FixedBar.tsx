import { AnimatePresence, motion } from "framer-motion";
import { useIsElementInView } from "../hooks/useIsElementInView";
import { UpButton } from "./UpButton";
import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function FixedBar() {
  const { isInView } = useIsElementInView("scrollMarker");
  return (
    <AnimatePresence>
      {isInView && (
        <motion.aside
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="hidden md:inline-flex bg-cs-background-50 flex-col fixed z-[15] bottom-5 right-5 lg:bottom-24 lg:right-24 text-cs-text p-2 gap-2 justify-center items-center"
        >
          <LanguageToggle />
          <DarkModeToggle className="rounded-full p-4" />
          <UpButton />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
