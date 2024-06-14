"use client";

import HamburgerMenu from "@/components/HamburgerMenu";
import MenuSection from "@/sections/menu";
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
