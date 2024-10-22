import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-5xl mx-auto px-8 pt-12">
      <Logo className="h-12" />
      <div className="flex items-center space-x-2 sm:space-x-4">
        <LanguageToggle />
        <DarkModeToggle />
      </div>
    </header>
  );
}
