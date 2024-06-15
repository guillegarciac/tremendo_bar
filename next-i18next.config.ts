import { UserConfig } from 'next-i18next';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'ca',
    locales: ['en', 'es', 'ca'],
    localeDetection: false
  },
  localePath: 'public/locales', // Ensure this points to the correct directory
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
