"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import Image from "next/image";
import tremendologo from "../assets/tremendologo.png";
import { useTranslation } from 'next-i18next'; 
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const NavFooter = dynamic(
  () => import("@/components/NavFooter/NavFooter"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { t } = useTranslation('common'); 

  return (
    <>
      <Head>
        <title>{t('pageTitle', "Tremendo Bar Sant Cugat")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <style>{`
          body, html {
            overflow: hidden;
            height: 100%;
          }
        `}</style>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full" style={{ backgroundImage: `url(${tremendologo})` }}>
        <div className="stickyContainer">
          <HamburgerMenu />
        </div>
        <section className="fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-center p-8 md:p-12 z-[20] text-center text-white">
          <div className="my-4 md:my-8">
            <Image
              src={tremendologo}
              alt={t('logoAlt', "Tremendo Logo")}
              width={400}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="navigation-footer">
              <NavFooter />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
