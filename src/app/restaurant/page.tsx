"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';
import Head from "next/head";

const NavigationFooter = dynamic(() => import('@/components/NavigationFooter'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-center p-8 md:p-12 z-[20] text-center text-white">
          <Link href="/" className="text-[#FFFFFF] font-dancing text-[40px] leading-none md:text-[100px] my-4 md:my-8">
            Tremendo
          </Link>

          <div className="flex flex-col items-center">
            <h1 className="font-medium text-3xl sm:text-6xl md:text-[90px] lg:text-[80px] leading-none text-white mb-10 md:mb-16">
              Sant Cugat
            </h1>
            
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
