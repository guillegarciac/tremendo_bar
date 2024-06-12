"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';
import moment from "moment";
import { useEffect, useState } from "react";
import contactTremendo from "../../assets/contacttremendo.jpeg";
import Head from "next/head";

const NavigationFooter = dynamic(() => import('@/components/NavigationFooter'), {
  ssr: false
});

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

  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden bg-white">
        <section className="flex flex-col lg:flex-row w-full h-full min-h-screen bg-white">
          {/* Only apply the background image on desktop sizes */}
          <div className={`w-full lg:w-1/2 p-12 flex flex-col justify-between items-center min-h-screen h-full ${!contactTremendo ? '' : 'hidden lg:flex'}`}
            style={{
              background: contactTremendo ? `url(${contactTremendo.src})` : undefined,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}>
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

          {/* Always visible section with form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 pb-4">
            <div className="max-w-[560px] w-full">
              <p className="text-black text-opacity-100 text-[20px] mt-[16px]">
                Ready to book with us?
              </p>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-[48px]"
              >
                <h3 className="text-black mt-[48px] text-[16px]">Name</h3>
                <input
                  type="text"
                  className="h-[60px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Name"
                />

                <h3 className="text-black mt-[48px] text-[16px]">Email</h3>
                <input
                  type="text"
                  className="h-[60px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Email"
                />
                <h3 className="text-black mt-[48px] text-[16px]">Message</h3>
                <textarea
                  className="min-h-[120px] max-h-[200px] w-full px-[24px] py-[15px] border border-black rounded-[10px]"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  className="mt-[48px] w-full uppercase flex items-center justify-center h-[60px] border border-black"
                  style={{
                    textDecoration: 'none',
                    borderRadius: '0',
                    backgroundColor: 'white'
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
