import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextType,
} from "../contexts/LanguageContext";

// Hook to use the LanguageContext
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
