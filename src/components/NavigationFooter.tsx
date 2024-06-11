'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default function NavigationFooter() {
  const pathname = usePathname(); // This hook directly provides the pathname

  return (
    <div className="flex justify-center items-center w-full mt-[80px] mb-[80px]">
      <div className="bg-white text-black rounded-full p-[5px] shadow-md">
        <ul className="flex">
          {pathname === "/menu" ? (
            <li>
              <Link
                href="/menu"
                className="h-[48px] cursor-pointer rounded-full flex items-center justify-center px-[16px] text-black"
                style={{ textDecoration: 'none' }} // Ensures no underlines or color changes on hover
              >
                Book a Table
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/menu"
                className="h-[48px] cursor-pointer rounded-full flex items-center justify-center px-[16px] text-black"
                style={{ textDecoration: 'none' }} // Ensures no underlines or color changes on hover
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
