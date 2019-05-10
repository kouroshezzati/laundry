import i18n from 'i18next';
import frWords from './fr';

i18n.init({
  // we init with resources
  resources: {
    fr: {
      translations: frWords
    }
  },
  fallbackLng: 'fr',
  debug: true,

  // have a common namespace used around the full app
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
