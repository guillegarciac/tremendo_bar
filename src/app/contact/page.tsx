"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';
import moment from "moment";
import { useEffect, useState } from "react";
import contactTremendo from "../../assets/contacttremendo.jpeg";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu";

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

  const bookTableStyle = {
    textDecoration: 'none',
    border: '1px solid black',
    borderRadius: '0',
    height: '60px', // Matching input height
    width: '100%', // Matching input width
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // White text for contrast
    backgroundColor: 'black', // Black background
  };

  const checkMenuStyle = {
    textDecoration: 'none',
    border: '1px solid black',
    borderRadius: '0',
    height: '60px', // Matching input height
    width: '100%', // Matching input width
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Black text
    backgroundColor: 'white' // White background
  };

  return (
    <>
      <Head>
        <title>Tremendo Bar Sant Cugat</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden bg-white">
        <section className="flex flex-col lg:flex-row w-full h-full min-h-screen bg-white">
          <div className={`w-full lg:w-1/2 p-12 flex-col justify-between items-center min-h-screen h-full hidden lg:flex`}
            style={{
              background: `url(${contactTremendo.src || contactTremendo})`,
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

          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 pb-4">
          <HamburgerMenu />
            <div className="max-w-[560px] w-full">
              <p className="font-dancing text-[26px] leading-none md:text-[50px] my-4 md:my-8]">
                Tremendo Booking
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
                  className="min-h-[250px] max-h-[250px] w-full px-[24px] py-[15px] border border-black rounded-[10px] mb-6"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  style={bookTableStyle}
                >
                  Book A Table
                </button>
              </form>

              {/* Additional button for checking the menu, displayed only on mobile */}
              <div className="lg:hidden mt-4 flex justify-center w-full">
                <Link href="/menu" style={checkMenuStyle}>
                  Check our Menu
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
