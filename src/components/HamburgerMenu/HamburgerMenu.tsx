"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string | false>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation('common');  // Include `ready` to check if translations are ready
  console.log(`Current locale in router: ${router.locale}`);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
  }

  const iconColorClass = pathname === "/" ? styles.whiteIcon : styles.blackIcon;

  let menuItems = [
    <li key="menu">
      <Link href="/menu" locale={language || undefined}>{t('menu')}</Link>
    </li>,
    <li key="book">
      <Link href="/book" locale={language || undefined}>{t('common:book')}</Link>
    </li>,
  ];

  if (pathname === "/menu") {
    menuItems = [
      <li key="home">
        <Link href="/" locale={language || undefined}>{t('common:home')}</Link>
      </li>
    ].concat(menuItems);
  } else if (pathname === "/book") {
    menuItems = [
      <li key="home">
        <Link href="/" locale={language || undefined}>{t('common:home')}</Link>
      </li>,
      <li key="menu">
        <Link href="/menu" locale={language || undefined}>{t('common:menu')}</Link>
      </li>
    ];
  }

  menuItems.push(
    <li key="language-selector">
      <select onChange={(e) => handleLanguageChange(e.target.value)} defaultValue={language || undefined}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ca">Català</option>
      </select>
    </li>
  );

  return (
    <div className={styles.relative}>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        {isOpen ? (
          <span className={`${styles.closeIcon} ${iconColorClass}`}>
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
      {isOpen && (
        <div className={styles.menuOverlay}>
          <ul className={styles.menuList}>{menuItems}</ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
