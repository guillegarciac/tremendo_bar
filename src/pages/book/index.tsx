"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // Import useTranslation
import contactTremendo from "../../assets/contacttremendo.jpeg";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});

export default function BookATable() {
  const { t } = useTranslation("common"); // Use the translation hook
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const bookTableStyle = {
    textDecoration: "none",
    border: "1px solid black",
    borderRadius: "0",
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "black",
  };

  const checkMenuStyle = {
    textDecoration: "none",
    border: "1px solid black",
    borderRadius: "0",
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    backgroundColor: "white",
  };

  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title> {/* Translated */}
      </Head>

      <main className="min-h-screen relative overflow-hidden bg-white">
        <section className="flex flex-col lg:flex-row w-full h-full min-h-screen bg-white">
          <div
            className={`w-full lg:w-1/2 p-12 flex-col justify-between items-center min-h-screen h-full hidden lg:flex`}
            style={{
              background: `url(${contactTremendo.src || contactTremendo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Link href="/" className="font-semibold cursor-pointer text-white">
              {t("pageTitle")} {/* Translated */}
            </Link>
            <div className="text-center">
              <h2 className="font-dancing text-[60px] leading-none text-white" style={{ color: "#00b55e" }}>
                {t("book")} {/* Translated */}
              </h2>
            </div>

            <div className="hidden lg:block">
              <NavFooter />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-col justify-center items-center lg:flex lg:flex-col">
            <HamburgerMenu />
            <div className="max-w-[560px] w-full px-4 pb-4 pt-8">
              <p className="font-dancing text-[30px] leading-none md:text-[50px] my-4 md:my-8" style={{ color: "#00b55e" }} >
                {t("book")} {/* Translated */}
              </p>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-[30px]"
              >
                <h3 className="text-black mt-[30px] text-[16px]">
                  {t("name")}
                </h3>
                <input
                  type="text"
                  className="h-[60px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder={t("name")} // Use translation for placeholder
                />

                <h3 className="text-black mt-[30px] text-[16px]">
                  {t("email")}
                </h3>
                <input
                  type="email" // Correct type for better semantic and functionality
                  className="h-[60px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder={t("email")} // Use translation for placeholder
                />

                <h3 className="text-black mt-[30px] text-[16px]">
                  {t("message")}
                </h3>
                <textarea
                  className="min-h-[200px] max-h-[200px] w-full px-[24px] py-[15px] border border-black rounded-[10px] mb-6"
                  placeholder={t("message")} // Use translation for placeholder
                />

                <button type="submit" style={bookTableStyle}>
                  {t("bookTable")}
                </button>
              </form>
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
      ...(await serverSideTranslations(locale, ["common"])), // Adjust the namespace as needed
    },
  };
}
