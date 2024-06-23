// Assuming this file is at 'src/pages/_app.tsx' and your config is at the root level.
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation, appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../nextI18NextConfig';  // Make sure this path correctly points to your config file at the root.
import './globals.css';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log('Current locale:', router.locale);
    console.log('Current pathname:', router.pathname);
    console.log("Current language:", i18n.language);
  }, [router.locale, router.pathname, i18n.language]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18NextConfig);
