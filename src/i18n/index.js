import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enWords from './en';
import frWords from './fr';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: enWords
    },
    fr: {
      translations: frWords
    }
  },
  fallbackLng: 'en',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;
