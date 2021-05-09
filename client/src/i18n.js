import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["EN"];
const availableLanguages = ["AR", "EN"];

const options = {
  order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],

  lookupQuerystring: "locale",
  lookupLocalStorage: "locale",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],

  cookieMinutes: 10,

  htmlTag: document.documentElement,

  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: false,
    whitelist: availableLanguages,
    detection: options,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
