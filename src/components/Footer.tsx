import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between mt-[96px] mb-[80px]" style={{ padding: '10px' }}>
      <div className="w-full max-w-[162px]">
        <Link href="/" className="font-semibold cursor-pointer text-black" style={{ textDecoration: 'none' }}>
          Tremendo Bar <br />Sant Cugat
        </Link>
        <p className="mt-[32px] text-black">
          
          <Link
            href="https://guillegarciac.github.io/mycv/"
            target="_blank"
            className="text-black"
            style={{ textDecoration: 'none' }} // Ensures no underlines or color changes on hover
          >
            web by guillegarciac{" "}
          </Link>
        </p>
      </div>

      <div className="w-full max-w-[162px]">
        <h1 className="text-[18px] font-light text-black">Pages</h1>
        <ul className="mt-[32px]">
          <li className="mb-[16px] text-[16px] text-black cursor-pointer">
            <Link href="/restaurant" style={{ textDecoration: 'none', color: 'black' }}>Restaurant</Link>
          </li>
          <li className="mb-[16px] text-[16px] text-black cursor-pointer">
            <Link href="/contact" style={{ textDecoration: 'none', color: 'black' }}>Book a Table</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
