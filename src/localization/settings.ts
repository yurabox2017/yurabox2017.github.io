import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation } from './translation';
import LanguageDetector from 'i18next-browser-languagedetector';
export const LANG_STORAGE_KEY = 'lang';

export enum Locale {
  ru = 'ru',
  en = 'en',
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: translation,
    // translation,
    lng: localStorage.getItem(LANG_STORAGE_KEY) || Locale.ru,
    // // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // // if you're using a language detector, do not define the lng option

    // interpolation: {
    //   escapeValue: false, // react already safes from xss
    // },
  } as InitOptions);

export default i18n;
