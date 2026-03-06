import i18n from "@/i18n";
import { EnumStorageKeys, EnumStorageLangsValues, Storage } from "@/lib";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";

export interface LanguageContextValue {
  locale: EnumStorageLangsValues;
  setLocale: (language: EnumStorageLangsValues) => Promise<void>;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const defineInitialLanguage = () => {
  return i18n.language === EnumStorageLangsValues.EN
    ? EnumStorageLangsValues.EN
    : EnumStorageLangsValues.RU;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [localeState, setLocaleState] = useState(() => defineInitialLanguage());

  useEffect(() => {
    const handler = (lang: string) => {
      setLocaleState(
        lang === EnumStorageLangsValues.RU ? EnumStorageLangsValues.RU : EnumStorageLangsValues.EN
      );
    };
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  const setLocale = useCallback(async (lang: EnumStorageLangsValues) => {
    await i18n.changeLanguage(lang);
    await Storage.setStorageItem(EnumStorageKeys.LANG, lang);
    setLocaleState(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale: localeState, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};