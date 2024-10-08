"use client";

import { useTranslation } from "next-i18next"; // Import useTranslation from next-i18next
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { CSSProperties } from "react";

export default function NavFooter() {
  const pathname = usePathname();
  const { t } = useTranslation("common"); // Initialize translation hook

  const buttonStyle: CSSProperties = {
    textDecoration: "none",
    border: "1px solid black",
    borderRadius: "0",
    height: "48px",
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
    <div className="flex justify-center items-center w-full mt-[1000px] mb-[80px]">
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
