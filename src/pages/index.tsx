"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import dynamic from "next/dynamic";
import Head from "next/head";
import { motion } from "framer-motion"; // Import Framer Motion
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useMediaQuery from "@/hooks/useMediaQuery"; // Custom hook for media query
import { BiPhone } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

// Importing assets
import tremendoImage from "../assets/tremendoIndexShort.png";
import tremendoLogo from "../assets/tremendologo.png";
import image5 from "../assets/handSteak.jpg";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});

export default function Home() {
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect if it's mobile

  // Google Maps API key
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;
  const [mapSrc, setMapSrc] = useState<string>("");

  useEffect(() => {
    if (googleApiKey) {
      setMapSrc(
        `https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=41.4744337,2.0827327&maptype=satellite`
      );
    }
  }, [googleApiKey]);

  const buttonStyle = {
    textDecoration: "none",
    border: "1px solid black",
    borderRadius: "0",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <>
      <Head>
        <title>{t("pageTitle", "Tremendo Sant Cugat")}</title>
        <meta
          name="description"
          content="Explore the best dishes at tremendo in Sant Cugat!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <main className="min-h-screen w-full relative">
        <motion.div
          className="motionDiv"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ willChange: "none" }}
        >
          <div className="stickyContainer">
            <HamburgerMenu />
          </div>
          <section className="w-full flex flex-col items-center justify-center md:p-12 z-[20] text-center text-white">
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${tremendoImage.src})`,
                minHeight: "100vh",
              }}
            ></div>
            <div className="navigation-footer mt-8">
              <NavFooter />
            </div>
            <div className="flex flex-col items-center w-full relative md:bg-transparent bg-white">
              <div className="md:hidden w-full relative">
                <div className="w-full px-6">
                  <div className="flex items-center justify-center space-x-4 py-4 mt-11 mb-1">
                    {/* "Book with us" button initiates a phone call */}
                    <a
                      href="tel:936393970"
                      className="flex-grow flex items-center justify-center px-6 py-3 w-full max-w-[200px] text-center text-lg rounded-full transition duration-300 bg-black text-white hover:bg-white hover:text-black"
                      style={{ ...buttonStyle, fontSize: "14px" }}
                    >
                      <BiPhone className="mr-1 text-justify text-base" />
                      {t("book")}
                    </a>

                    <Link href="/menu">
                      <div
                        className="flex-grow flex items-center justify-center px-6 py-3 w-full min-w-[135px] text-center text-lg rounded-full transition duration-300 bg-black text-white hover:bg-white hover:text-black"
                        style={{ ...buttonStyle, fontSize: "14px" }}
                      >
                        {t("menu")}
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="relative w-full custom-image-container">
                  <Image
                    src={image5}
                    alt="Image 5"
                    layout="fill" // Ensure the image fills the container
                    className="object-cover filter-darken" // Custom class to control brightness
                  />
                  <div className="absolute top-10 left-0 right-0 flex justify-center mt-4">
                    <Image
                      src={tremendoLogo}
                      alt="Tremendo Logo"
                      width={300}
                      height={150}
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-center py-6 gap-6">
  <a
    href="https://www.instagram.com/tremendo.santcugat/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-3 py-1 rounded transition duration-300 hover:bg-black hover:text-white text-xs" // Reduced padding and font size
    style={{
      ...buttonStyle,
      height: '40px', // Reduced height
      fontSize: '12px', // Smaller font size
    }}
  >
    <FaInstagram className="mr-1 text-base" /> {/* Smaller icon */}
    {t("@tremendo.santcugat")}
  </a>
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, 6, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="text-black text-xs font-medium flex items-center"
  >
    <span>{t("location")}</span>
    <FaChevronDown className="text-lg ml-1" /> {/* Smaller arrow icon */}
  </motion.div>
</div>
                {/* Mobile Version: Display the Map iframe */}
                {isMobile ? (
                  <>
                    <div className="w-full h-72 my-4">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        src={mapSrc}
                        allowFullScreen
                      />
                    </div>
                  </>
                ) : null}
                {/* 
                <div className="w-full">
                  <Image
                    src={image2}
                    alt="Image 2"
                    layout="responsive"
                    width={700}
                    height={695}
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src={image1}
                    alt="Image 1"
                    layout="responsive"
                    width={700}
                    height={467}
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src={image3}
                    alt="Image 3"
                    layout="responsive"
                    width={700}
                    height={467}
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src={image4}
                    alt="Image 4"
                    layout="responsive"
                    width={700}
                    height={467}
                    className="w-full"
                  />
                </div> */}
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
