import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFI from './locales/fi/translation.json';
import translationEN from './locales/en/translation.json';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fi: {
    translation: translationFI
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;