import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between mt-[96px] mb-[80px]" style={{ 'padding': '10px' }}>
      <div className="w-full max-w-[162px]">
        <Link href="/" className="font-semibold cursor-pointer">
        Tremendo Bar <br></br>Sant Cugat
        </Link>
        <p className="mt-[32px] text-white text-opacity-50">
          By Guille García{" "}
          <Link
            href="https://guillegarciac.github.io/mycv/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Website
          </Link>
        </p>
      </div>

      <div className="w-full max-w-[162px]">
        <h1 className="text-[18px] font-light">Pages</h1>
        <ul className="mt-[32px]">
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/restaurant">Restaurant</Link>
          </li>
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
