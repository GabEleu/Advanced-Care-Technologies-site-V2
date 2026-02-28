"use client";

import { LanguageProvider } from "@/context/LanguageContext";

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
