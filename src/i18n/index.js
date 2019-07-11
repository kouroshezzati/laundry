import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enWords from './en';
import duWords from './du';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: enWords
    },
    du: {
      translations: duWords
    }
  },
  fallbackLng: 'en',
  debug: true,
  lng: 'du',
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
