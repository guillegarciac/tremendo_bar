"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function NavFooter() {
  const pathname = usePathname();

  const buttonStyle = {
    textDecoration: "none",
    border: "1px solid transparent",
    borderRadius: "0",
    height: "48px",
    width: "200px",
  };

  return (
    <div className="flex justify-center items-center w-full mt-[80px] mb-[80px]">
      <div className="text-black shadow-md">
        <ul
          className={`flex ${pathname === "/" ? "flex-col md:flex-row" : ""}`}
        >
          {(pathname === "/menu" || pathname === "/") && (
            <li className="mb-[16px] md:mb-0 md:mr-[16px] bg-white">
              <Link
                href="/book"
                className="cursor-pointer flex items-center justify-center px-[16px] text-black"
                style={buttonStyle}
              >
                Book a Table
              </Link>
            </li>
          )}
          {(pathname === "/" || pathname === "/book") && (
            <li className="bg-white">
              <Link
                href="/menu"
                className="cursor-pointer flex items-center justify-center px-[16px] text-black"
                style={buttonStyle}
              >
                Check our Menu
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
