import en from "../i18n/en.json";
import de from "../i18n/de.json";

export const defaultLang = "de";

export const languages = {
  de: "Deutsch",
  en: "English",
};

export const translations = { de, en };

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");

  if (lang in translations) {
    return lang;
  }

  return defaultLang;
}

export function useTranslations(lang = defaultLang) {
  return function t(key) {
    const dict = translations[lang] || translations[defaultLang];
    return dict?.[key] ?? translations[defaultLang]?.[key] ?? key;
  };
}

export function localizedPath(lang = defaultLang, path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (cleanPath === "/") {
    return `/${lang}/`;
  }

  return `/${lang}${cleanPath}`;
}