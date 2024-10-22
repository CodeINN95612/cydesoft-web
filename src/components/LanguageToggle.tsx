import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { Language } from "../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // For controlling the dropdown

  // Language options
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setIsOpen(false); // Close the dropdown on selection
  };

  return (
    <div className="relative">
      <button
        className="flex items-center sm:space-x-2 sm:px-3 py-2 rounded hover:bg-gray-300 dark:hover:bg-cs-text-10 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{language === "en" ? "EN" : "ES"}</span>{" "}
        {/* Current language abbreviation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded shadow-lg py-2 z-20 border-2 border-cs-text-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                language === lang.code ? "font-bold" : ""
              }`}
              onClick={() => handleLanguageChange(lang.code as Language)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
