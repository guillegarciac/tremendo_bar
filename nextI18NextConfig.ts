import { UserConfig } from 'next-i18next';

const nextI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca'],
    localeDetection: false,
  },
  localePath: 'public/locales',
  ns: ['common'],
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  debug: true,
};

export default nextI18NextConfig;
