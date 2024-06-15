"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from 'next-i18next'; 
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation('common'); // Use both t and i18n

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Function to change language
    window.location.reload(); // Simple approach to reload the page and apply the new locale
  };

  const iconColorClass = pathname === "/" ? styles.whiteIcon : styles.blackIcon;

  let menuItems;
  switch (pathname) {
    case "/menu":
      menuItems = [
        <li key="home">
          <Link href="/" locale={i18n.language}>{t('home')}</Link>
        </li>,
        <li key="book">
          <Link href="/book" locale={i18n.language}>{t('book')}</Link>
        </li>,
      ];
      break;
    case "/book":
      menuItems = [
        <li key="home">
          <Link href="/" locale={i18n.language}>{t('home')}</Link>
        </li>,
        <li key="menu">
          <Link href="/menu" locale={i18n.language}>{t('menu')}</Link>
        </li>,
      ];
      break;
    default:
      menuItems = [
        <li key="menu">
          <Link href="/menu" locale={i18n.language}>{t('menu')}</Link>
        </li>,
        <li key="book">
          <Link href="/book" locale={i18n.language}>{t('book')}</Link>
        </li>,
      ];
      break;
  }

  // Append the language selector as an additional menu item
  menuItems.push(
    <li key="language-selector">
      <select onChange={(e) => handleLanguageChange(e.target.value)} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ca">Català</option>
      </select>
    </li>
  );

  return (
    <div>
      {pathname !== "/" && (
        <div className={styles.stickyContainer}>
          <div className={styles.relative}>
            <button className={styles.hamburgerButton} onClick={toggleMenu}>
              {isOpen ? (
                <span className={`${styles.closeIcon} ${styles.whiteIcon}`}>
                  &times;
                </span>
              ) : (
                <div className={`${styles.hamburgerIcon} ${iconColorClass}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
      {pathname === "/" && (
        <div className={styles.relative}>
          <button className={styles.hamburgerButton} onClick={toggleMenu}>
            {isOpen ? (
              <span className={`${styles.closeIcon} ${styles.whiteIcon}`}>
                &times;
              </span>
            ) : (
              <div className={`${styles.hamburgerIcon} ${iconColorClass}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>
        </div>
      )}
      {isOpen && (
        <div className={styles.menuOverlay}>
          <ul className={styles.menuList}>{menuItems}</ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
