"use client";

import { useTranslation } from "next-i18next"; // Import useTranslation from next-i18next
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { CSSProperties } from "react";

export default function NavFooter() {
  const pathname = usePathname();
  const { t } = useTranslation("common"); // Initialize translation hook

  const buttonStyle: CSSProperties = {

    margin: "10px",
    borderRadius: "12px", // Rounded corners for a modern look
    height: "50px",
    width: "200px",
    backgroundColor: "white", // A pleasant medium slate blue
    color: "green", // White text for high contrast
    boxShadow: "-4px -4px 10px green", // Subtle shadow for depth
    textTransform: "uppercase", // Makes the button text more prominent
    cursor: "pointer", // Changes the cursor to a pointer to indicate it's clickable
    transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
  };

  return (
    <div className="flex justify-center items-center w-full mt-[80px] mb-[80px]">
      <div className="text-black">
        <ul
          className={`flex ${pathname === "/" ? "flex-col md:flex-row" : ""}`}
        >
          {(pathname === "/menu" || pathname === "/") && (
            <Link
              href="/book"
              className="cursor-pointer flex items-center justify-center px-[16px] text-black"
              style={buttonStyle}
            >
              {t("bookTable")}
            </Link>
          )}
          {(pathname === "/" || pathname === "/book") && (
            <Link
              href="/menu"
              className="cursor-pointer flex items-center justify-center px-[16px] text-black"
              style={buttonStyle}
            >
              {t("checkOurMenu")}
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
