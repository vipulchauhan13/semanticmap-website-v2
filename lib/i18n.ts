
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detect user language (browser default initially)
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if user language is not available or key is missing
    debug: process.env.NODE_ENV === 'development', // Enable debug logs in development

    interpolation: {
      escapeValue: false, // React already protects against XSS
    },

    // This configuration tells i18next where to load translation files from.
    // We'll load them from /locales/[language]/translation.json
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    // We'll use the standard json file format,
    // i.e. file path to json file namespace
    // For example: public/locales/en/translation.json => namespace 'translation'
    ns: ['translation'], // Specify the namespace(s)
    defaultNS: 'translation', // Default namespace

    // Resources are not needed when using the backend to load files
    resources: {}
  });

export default i18n;