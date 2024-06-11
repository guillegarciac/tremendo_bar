"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';

const NavigationFooter = dynamic(() => import('@/components/NavigationFooter'), {
  ssr: false
});
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-8 md:p-12 z-[20] text-center text-white">
          <Link href="/" className="text-[#FFFFFF] font-dancing text-[60px] leading-none md:text-[80px]">
            Tremendo
          </Link>

          <div className="flex flex-col items-center mt-[-50px]">
            <h2 className="text-3xl sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none text-white">
              The pure taste of
            </h2>
            <h1 className="font-medium text-5xl sm:text-6xl md:text-[90px] lg:text-[160px] leading-none text-white">
              Sant Cugat
            </h1>
            <p className="text-xl md:text-[23px] mt-[20px] md:max-w-[600px] text-white">
              Welcome to Tremendo Bar—the heart of Sant Cugat for drinks and
              dining. Enjoy great food and lively evenings with us.
            </p>
            <NavigationFooter />
          </div>
        </section>

        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </main>
    </>
  );
}
