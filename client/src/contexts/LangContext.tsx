import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang, type Content } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Content;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: React.ReactNode;
  defaultLang?: Lang;
}

export function LangProvider({ children, defaultLang = "fr" }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return (stored as Lang) || defaultLang;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within LangProvider");
  }
  return context;
}
