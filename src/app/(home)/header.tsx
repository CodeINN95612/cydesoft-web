"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-5xl mx-auto px-8 pt-12">
      <Logo className="h-10 sm:h-12" />
      <div className="flex items-center space-x-2 sm:space-x-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
