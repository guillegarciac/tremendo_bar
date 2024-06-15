"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import Image from "next/image";
import tremendologo from "../assets/tremendologo.png";
import { useTranslation } from 'next-i18next'; 

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
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-center p-8 md:p-12 z-[20] text-center text-white">
          <HamburgerMenu />
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

        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>

        <style jsx global>{`
          body {
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }
          .slider {
            max-width: 100%;
            max-height: 100vh; /* Limits height to the viewport height */
            overflow: hidden; /* Hide any overflow beyond viewport */
          }
          .slide {
            width: 100%;
            height: 100%; /* Ensures each slide takes up full viewport */
          }
        `}</style>
      </main>
    </>
  );
}
