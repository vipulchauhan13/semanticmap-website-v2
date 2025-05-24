import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    // the translations
    // you can learn more about on i18next documentation
    // We will load translations from the public folder using the backend config instead of 'resources'
    resources: {},

    // Explicitly list supported languages
    supportedLngs: ['en', 'de'],
    // Set the initial language
    lng: 'en',
    // Fallback language if the current language translations are not available
    fallbackLng: 'en',

    // Default namespace (your translation.json file)
    ns: ['translation'],
    defaultNS: 'translation',

    debug: process.env.NODE_ENV === 'development', // Enable debug logs in development

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    backend: {
        loadPath: '/locales/{{lng}}/translation.json', // specify where to load translations from
    },

    // Option to wait for translations to be loaded
    react: {
      wait: true // ADD THIS: Wait for translations to be loaded before rendering
    }
  });

export default i18n;