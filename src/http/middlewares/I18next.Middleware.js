import i18next from "i18next";
import i18nextBackend from "i18next-node-fs-backend";
import i18nextMiddleware from "i18next-express-middleware";
import path from "path";

const options = {
  order: ["header", "cookie"],
  lookupCookie: "i18next",
  lookupHeader: "accept-language",
};

i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(
        __dirname,
        "/../../core/locales/{{lng}}/translation.json"
      ),
    },
    preload: ["EN", "AR"],
    fallbackLng: "EN",
    detection: options,
  });

export default i18nextMiddleware.handle(i18next);
