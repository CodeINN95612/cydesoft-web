import { createContext, PropsWithChildren, useState } from "react";
import { englishInfo, Info, spanishInfo } from "../data/info";

export type Language = "en" | "es";

// Define the shape of the context
export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  info: Info; // The type for the info object (you can be more specific if needed)
};

// Create the context with an initial value of undefined
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider component
export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>("en");

  const value: LanguageContextType = {
    language,
    setLanguage,
    info: language === "en" ? englishInfo : spanishInfo,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
