'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu";

const NavigationFooter = dynamic(() => import("@/components/NavigationFooter"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-center p-8 md:p-12 z-[20] text-center text-white">
          <HamburgerMenu />
          <Link href="/" className="text-[#FFFFFF] font-dancing text-[40px] leading-none md:text-[100px] my-4 md:my-8">
            Tremendo
          </Link>

          <div className="flex flex-col items-center">
            <h1 className="font-medium text-3xl sm:text-6xl md:text-[90px] lg:text-[80px] leading-none text-white mb-10 md:mb-16">
              Sant Cugat
            </h1>

            <div className="navigation-footer">
              <NavigationFooter />
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
