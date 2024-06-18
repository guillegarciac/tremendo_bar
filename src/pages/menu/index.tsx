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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),  // Adjust the namespace as needed
    },
  };
}
