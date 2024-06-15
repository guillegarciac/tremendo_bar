import Link from "next/link";
import React from "react";

const Footer = () => {
  const buttonStyle = {
    textDecoration: "none",
    border: "1px solid #ccc",
    borderRadius: "0",
    height: "48px",
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    backgroundColor: "white",
  };

  return (
    <div className="flex flex-col items-center justify-between mt-[96px] mb-[10px] px-[10px]">
      <div className="text-center mt-10 mb-0">
        <p className="text-xs text-black">
          © 2024 Tremendo Bar Sant Cugat
          <br />
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
            style={{ textDecoration: "none", color: "black" }}
          >
            guillegarciac
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
