import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from '@/locales/en/en.json';
import zhHant from '@/locales/zh-hant/zh-hant.json';

const getInitLng = () => {
  return window.location.pathname.split('/')[1]
}

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
  lng: getInitLng(),
  fallbackLng: 'zh-Hant',
  supportedLngs: ['en', 'zh-Hant']
})