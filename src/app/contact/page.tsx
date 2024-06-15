"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import moment from "moment";
import { useEffect, useState } from "react";
import contactTremendo from "../../assets/contacttremendo.jpeg";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu";

const NavigationFooter = dynamic(
  () => import("@/components/NavigationFooter"),
  {
    ssr: false,
  }
);

export default function BookATable() {
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
        <title>Tremendo Bar Sant Cugat</title>
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
              Tremendo Bar Sant Cugat
            </Link>
            <div className="text-center">
              <h2 className="font-dancing text-[60px] leading-none text-white">
                Contact
              </h2>
              <h1 className="font-medium text-[60px] leading-none text-white">
                Get in Touch
              </h1>
            </div>

            <div className="hidden lg:block">
              <NavigationFooter />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-col justify-center items-center  lg:flex lg:flex-col">
            <HamburgerMenu />
            <div className="max-w-[560px] w-full px-4 pb-4">
              <p className="font-dancing text-[30px] leading-none md:text-[50px] my-4 md:my-8">
                Booking
              </p>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-[30px]"
              >
                <h3 className="text-black mt-[30px] text-[16px]">Name</h3>
                <input
                  type="text"
                  className="h-[60px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Name"
                />

                <h3 className="text-black mt-[30px] text-[16px]">Email</h3>
                <input
                  type="text"
                  className="h-[60px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Email"
                />
                <h3 className="text-black mt-[30px] text-[16px]">Message</h3>
                <textarea
                  className="min-h-[200px] max-h-[200px] w-full px-[24px] py-[15px] border border-black rounded-[10px] mb-6"
                  placeholder="Message"
                />

                <button type="submit" style={bookTableStyle}>
                  Book A Table
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
