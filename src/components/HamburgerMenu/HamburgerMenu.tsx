"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./HamburgerMenu.module.css";
import Footer from "@/components/FooterMenu/FooterMenu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string | false>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation('common');
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
    setIsOpen(false); // Close the menu when language changes
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false);  // Close the menu only if the click is outside the menu overlay
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  let menuItems = [
    <li key="menu">
      <Link href="/menu" locale={language || undefined}>{t('menu')}</Link>
    </li>,
    <li key="book">
      <Link href="/book" locale={language || undefined}>{t('book')}</Link>
    </li>,
  ];

  if (pathname === "/menu") {
    menuItems = [
      <li key="home">
        <Link href="/" locale={language || undefined}>{t('home')}</Link>
      </li>
    ].concat(menuItems);
  } else if (pathname === "/book") {
    menuItems = [
      <li key="home">
        <Link href="/" locale={language || undefined}>{t('home')}</Link>
      </li>,
      <li key="menu">
        <Link href="/menu" locale={language || undefined}>{t('menu')}</Link>
      </li>
    ];
  }

  menuItems.push(
    <li key="language-selector">
      <select onChange={(e) => handleLanguageChange(e.target.value)} value={language || router.locale}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ca">Català</option>
      </select>
    </li>
  );

  return (
    <div className={styles.stickyContainer} style={{ borderBottom: isOpen ? 'none' : '0.5px solid rgb(200, 200, 200)' }}>
      <button className={`${styles.hamburgerButton} ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <span className={styles.closeIcon}>&times;</span> : <div className={styles.hamburgerIcon}><span></span><span></span><span></span></div>}
      </button>
      {isOpen && (
        <>
          <div className={styles.menuOverlay} style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }} ref={menuRef}>
            <ul className={styles.menuList}>{menuItems}</ul>
            <div className={styles.footerContainer}>
              <Footer />
            </div>
          </div>
          <div className={styles.shadowOverlay}></div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;