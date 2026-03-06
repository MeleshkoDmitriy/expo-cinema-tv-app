import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ENG, RU } from "./locales";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: ENG },
    ru: { translation: RU },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;