'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default function NavigationFooter() {
  const pathname = usePathname(); // This hook directly provides the pathname

  // Define consistent button dimensions
  const buttonStyle = {
    textDecoration: 'none', // Ensures no underlines or color changes on hover
    border: '1px solid transparent', // Ensures borders are transparent
    borderRadius: '0', // Squared button
    height: '48px', // Consistent height
    width: '200px', // Consistent width
  };

  return (
    <div className="flex justify-center items-center w-full mt-[80px] mb-[80px]">
      <div className="text-black shadow-md">
        <ul className={`flex ${pathname === '/' || pathname === '/restaurant' ? 'flex-col md:flex-row' : ''}`}>
          {(pathname === "/menu" || pathname === '/' || pathname === '/restaurant') && (
            <li className="mb-[16px] md:mb-0 md:mr-[16px] bg-white">
              <Link
                href="/contact"
                className="cursor-pointer flex items-center justify-center px-[16px] text-black"
                style={buttonStyle}
              >
                Book a Table
              </Link>
            </li>
          )}
          {(pathname === '/' || pathname === '/restaurant' || pathname === '/contact') && (
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
