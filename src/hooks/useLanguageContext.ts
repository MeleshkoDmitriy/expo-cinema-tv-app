import { use } from "react";
import { LanguageContext, type LanguageContextValue } from "@/context";
import { useTranslation } from "react-i18next";

export function useLanguageContext(): LanguageContextValue {
  const context = use(LanguageContext);
  const { t } = useTranslation();

  if (!context) throw new Error(t('common.languageContextErrorMassage'));

  return context;
}