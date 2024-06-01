"use client";

import Link from "next/link";
import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-8 md:p-12 z-[20]">
          <Link href="/" className="font-semibold cursor-pointer">
          Tremendo Bar Sant Cugat
          </Link>

          <div className="flex flex-col items-center">
            <h2 className="text-[#FACE8D] font-dancing text-2xl sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none">
              The pure taste of
            </h2>
            <h1 className="font-medium text-5xl sm:text-6xl md:text-[90px] lg:text-[160px] leading-none">
              Sant Cugat
            </h1>
            <p className="text-xl md:text-[23px] text-center md:text-start mt-[20px] md:max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
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
