"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content, type Content, type Lang } from "@/data/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Content };
const LanguageContext = createContext<Ctx | null>(null);

/** Inglés por defecto. La elección solo se recuerda durante la sesión de la pestaña. */
export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      // Se lee tras hidratar (el servidor siempre renderiza inglés) para evitar desajustes
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (sessionStorage.getItem("lang") === "es") setLangState("es");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { sessionStorage.setItem("lang", l); } catch {}
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
