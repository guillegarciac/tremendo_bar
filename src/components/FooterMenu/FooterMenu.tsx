import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'; 
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common'); 
  
  return (
    <div className="flex flex-col items-center justify-between mb-[20px] px-[10px]">
      {/* <div className="text-center mt-4 mb-0">
        <p className="text-xs text-black">
          {t('designedBy')}
          <Link
            href="https://guillegarciac.github.io/mycv/"
            target="_blank"
            className="ml-1"
            style={{ textDecoration: "none", color: "black" }}
          >
            guillegarciac
          </Link>
        </p>
      </div> */}
      <div className="text-center mt-4 mb-0">
        <a href="https://www.instagram.com/tremendo.santcugat/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="text-center mt-6 mb-0">
        <p className="text-xs text-black">
          © 2024, {t('footerCopyright')}
          <br />
          {t('allRightsReserved')}
        </p>
      </div>

      
    </div>
  );
};

export default Footer;
