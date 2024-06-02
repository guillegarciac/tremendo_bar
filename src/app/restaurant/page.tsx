"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Restaurant() {
  return (
    <>
       <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-8 md:p-12 z-[20] text-center">
          <Link href="/" className="font-dancing text-5xl sm:text-[60px] md:text-[60px] lg:text-[60px] leading-none">
            Tremendo
          </Link>

          <div className="flex flex-col items-center mt-[-50px]">
            <h2 className="text-[#FACE8D] text-3xl sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none">
              The pure taste of
            </h2>
            <h1 className="font-medium text-5xl sm:text-6xl md:text-[90px] lg:text-[160px] leading-none">
              Sant Cugat
            </h1>
            <p className="text-xl md:text-[23px] mt-[20px] md:max-w-[600px]">
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
