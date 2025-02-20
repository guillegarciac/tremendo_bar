"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import dynamic from "next/dynamic";
import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useMediaQuery from "@/hooks/useMediaQuery";
import { BiPhone } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

// Importing assets
import tremendoImage from "../assets/tremendoIndexShort.png";
import tremendoLogo from "../assets/tremendologo.png";
import image5 from "../assets/handSteak.jpg";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});

// Banner Component
const MobileBanner = () => {
  const { t } = useTranslation("common");
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBg(true), 3000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className={`mobile-banner ${showBg ? "show-bg" : ""}`}>
      <span>{t("bannerMessage")}</span> 
    </div>
  );
};

export default function Home() {
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapSrc, setMapSrc] = useState<string>("");

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    async function fetchMapUrl() {
      try {
        const response = await fetch('/api/maps-url')
        const data = await response.json()
        
        if (data.error) {
          console.error('Error loading map:', data.error)
          return
        }
        
        setMapSrc(data.mapUrl)
      } catch (error) {
        console.error('Failed to load map:', error)
      }
    }

    fetchMapUrl()
  }, [])

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
        {/* Open Graph tags for preview */}
        <meta property="og:title" content="Tremendo Sant Cugat" />
        <meta property="og:description" content="Explore the best dishes at tremendo in Sant Cugat!" />
        <meta property="og:image" content="https://www.tremendosantcugat.com/tremendoIndexShort.png" /> {/* Thumbnail image */}
        <meta property="og:url" content="https://www.tremendosantcugat.com" /> {/* URL to your site */}
        <meta property="og:type" content="website" />

{/*         <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        /> */}

        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          `}
        </style>
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
                  <div className="flex items-center justify-center space-x-4 py-4 mt-12 mb-1 md:mb-4 md:space-x-6">
                    <a
                      href="tel:936393970"
                      className="flex-grow flex items-center justify-center px-4 py-2 w-full text-center text-lg rounded-full transition duration-300 bg-black text-white hover:bg-white hover:text-black md:w-[15%] lg:w-[12%]"
                      style={{ ...buttonStyle, fontSize: "16px" }}
                    >
                      <BiPhone className="mr-1 text-green-600 text-justify text-base" />
                      {t("book")}
                    </a>

                    <Link href="/menu">
                      <div
                        className="flex-grow flex items-center justify-center px-4 py-2 text-center bg-black text-white hover:bg-white hover:text-black md:w-[45%] lg:w-[40%]"
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
                    layout="fill"
                    className="object-cover filter-darken"
                  />
                  <div className="absolute top-10 left-0 right-0 flex justify-center mt-4">
                    <Image
                      src={tremendoLogo}
                      alt="Tremendo Logo"
                      width={300}
                      height={150}
                    />
                  </div>

                  {isMobile && <MobileBanner />}

                </div>
                <div className="w-full flex items-center justify-center p-6 gap-6 md:gap-8 lg:gap-10">
                  <a
                    href="https://www.instagram.com/tremendo.santcugat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-2 py-5 text-center text-sm rounded-full transition duration-300 bg-black text-white hover:bg-white hover:text-black w-full"
                    style={{
                      ...buttonStyle,
                      height: "40px",
                      fontSize: "14px",
                    }}
                  >
                    <FaInstagram className="mr-1 text-base" />
                    {t("@tremendo.santcugat")}
                  </a>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-green-600 text-xs font-medium flex items-center cursor-pointer md:text-sm lg:text-base"
                    onClick={scrollToMap}
                  >
                    <span>{t("location")}</span>
                    <FaChevronDown className="text-lg ml-1" />
                  </motion.div>
                </div>

                {isMobile ? (
                  <>
                    <div
                      ref={mapRef}
                      className="w-full relative"
                      style={{ height: "35rem" }}
                    >
                      <div className="w-full flex items-center justify-center bg-white pb-6">
                        <Link href="/gallery">
                          <div
                            className="flex items-center justify-center px-8 text-center text-sm rounded-full transition duration-300 bg-black text-white hover:bg-white hover:text-black"
                            style={{
                              ...buttonStyle,
                              height: "40px",
                              width: "350px",
                              maxWidth: "100%",
                              fontSize: isMobile ? "14px" : "16px",
                            }}
                          >
                            {t("gallery2")}
                          </div>
                        </Link>
                      </div>

                      {mapSrc ? (
                        <iframe
                          width="100%"
                          height="100%"
                          loading="lazy"
                          src={mapSrc}
                          allowFullScreen
                          style={{ border: "0" }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p>Loading map...</p>
                        </div>
                      )}
                    </div>

                    <div className="text-center p-6 mt-12 bg-white">
                      <a
                        href="https://www.google.com/maps/dir/41.3929988,2.1615579/Tremendo+Sant+cugat,+Pla%C3%A7a+de+Pep+Ventura,+6,+08172+Sant+Cugat+del+Vall%C3%A8s,+Barcelona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 px-4 py-2 text-sm font-medium flex items-center justify-center"
                      >
                        <FaMapMarkerAlt className="mr-2 text-green-600" />
                        {t("openMaps")}
                      </a>
                    </div>
                  </>
                ) : null}
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
