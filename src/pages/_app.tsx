import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import '../pages/globals.css'; 

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  const router = useRouter();

  useEffect(() => {
    console.log('Current locale:', router.locale);
    console.log('Current pathname:', router.pathname);
  }, [router.locale, router.pathname]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
