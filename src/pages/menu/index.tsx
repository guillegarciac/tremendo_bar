"use client";

import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import MenuSection from "@/components/MenuSection/MenuSection";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>
      <main className="min-h-screen relative overflow-hidden">
        <HamburgerMenu />
        <MenuSection />
      </main>
    </>
  );
}
export async function getServerSideProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, ['common']);  // Load translations for the 'common' namespace

  // Convert and log the translations to see the full structure and content
  console.log(`Translations for locale '${locale}':`, JSON.stringify(translations, null, 2));

  return {
    props: {
      ...translations,  // Pass the translations to the page as props
    },
  };
}
