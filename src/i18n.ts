import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from '@/locales/en/en.json';
import zhHant from '@/locales/zh-hant/zh-hant.json';

const resources = {
  en: {
    translation: en
  },
  "zh-Hant": {
    translation: zhHant
  }
}

i18next.use(initReactI18next).init({
  resources,
  // lng: 'en',
  fallbackLng: 'zh-Hant',
  supportedLngs: ['en', 'zh-Hant']
})