import Link from "next/link";
import React, { useState } from "react";

const NavigationFooter: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full mt-[80px] mb-[80px]">
      <div className="bg-white text-black rounded-full p-[5px] shadow-md">
        <ul className="flex gap-[14px]">
          <li>
            <Link
              href="/menu"
              className="h-[48px] cursor-pointer rounded-full flex items-center justify-center px-[16px] hover:bg-gray-100"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/restaurant"
              className="h-[48px] cursor-pointer rounded-full flex items-center justify-center px-[16px] hover:bg-gray-100"
            >
              Restaurant
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationFooter;
