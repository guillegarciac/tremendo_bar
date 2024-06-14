import Link from "next/link";
import React from "react";

const Footer = () => {
  const buttonStyle = {
    textDecoration: 'none', // Ensures no underlines or color changes on hover
    border: '1px solid #ccc', // Gives a light border for visibility
    borderRadius: '0', // Squared button
    height: '48px', // Consistent height
    width: '200px', // Consistent width
    display: 'flex', // Uses flex to center the text vertically and horizontally
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Ensures text color is black
    backgroundColor: 'white' // Background color of the button
  };

  return (
    <div className="flex flex-col items-center justify-between mt-[96px] mb-[10px] px-[10px]">
      {/* <ul className="flex flex-col md:flex-row items-center justify-center w-full">
        <li className="mb-2 md:mb-0 md:mr-2">
          <Link href="/restaurant" style={buttonStyle}>
            Restaurant
          </Link>
        </li>
        <li>
          <Link href="/contact" style={buttonStyle}>
            Book a Table
          </Link>
        </li>
      </ul> */}

      <div className="text-center mt-10 mb-0">
        <p className="text-xs text-black">
          © 2024 Tremendo Bar Sant Cugat<br/>
          All rights reserved.
        </p>
      </div>
      
      <div className="text-center mt-4 mb-0">
        <p className="text-xs text-black">
          Designed by
          <Link
            href="https://guillegarciac.github.io/mycv/"
            target="_blank"
            className="ml-1"
            style={{ textDecoration: 'none', color: 'black' }} // Ensures no underlines or color changes on hover
          >
            guillegarciac
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
