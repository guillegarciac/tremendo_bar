// next-i18next.config.ts
import { UserConfig } from 'next-i18next';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'ca',
    locales: ['en', 'es', 'ca'],
    localeDetection: false
  },
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
