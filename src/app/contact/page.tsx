"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import contactTremendo from "../../assets/contacttremendo.jpeg"; // Import your custom image
import Head from "next/head";

export default function BookATable() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  setInterval(() => {
    setCurrentTime(moment().format("HH:mm"));
  }, 1000);

  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden bg-white">
        <section className="w-full flex flex-col lg:flex-row h-full min-h-screen bg-white">
          <div
            style={{
              background: `url(${contactTremendo.src || contactTremendo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
            className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
          >
            <div
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust color and opacity here
              }}
            />
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

            <NavigationFooter />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col justify-center h-auto px-4 pb-4 lg:px-0 lg:pb-0 bg-white">
            <div className="max-w-[560px] h-auto mx-auto w-full bg-white">
              <p className="text-black text-opacity-100 text-[20px] mt-[16px]">
                Ready to book with us?
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="mt-[48px] bg-white"
              >
                <h3 className="text-black mt-[48px] text-[16px]">Name</h3>
                <input
                  type="text"
                  className="h-[60px] bg-white mt-[16px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Name"
                />

                <h3 className="text-black mt-[48px] text-[16px]">Email</h3>
                <input
                  type="text"
                  className="h-[60px] bg-white mt-[16px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Email"
                />
                <h3 className="text-black mt-[48px] text-[16px]">Message</h3>
                <textarea
                  placeholder="Message"
                  className="min-h-[120px] max-h-[200px] bg-white mt-[16px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                />

                <button
                  type="submit"
                  className="mt-[48px] w-full bg-white text-black uppercase flex items-center justify-center h-[60px] border border-black"
                  style={{
                    textDecoration: 'none',
                    borderRadius: '0', // Squared corners
                    backgroundColor: 'white' // Ensure background is white
                  }}
                >
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
