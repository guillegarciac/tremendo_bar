// next-i18next.config.ts
import { UserConfig } from 'next-i18next';

export const config: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
