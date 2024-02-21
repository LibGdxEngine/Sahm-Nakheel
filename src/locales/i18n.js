import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {en} from './translations/en';
import {ar} from './translations/ar';

i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: {
                translation: en,
            },
            ar: {
                translation: ar,
            },
        },
        lng: "en", // If you're using a language detector, this will be overridden
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
