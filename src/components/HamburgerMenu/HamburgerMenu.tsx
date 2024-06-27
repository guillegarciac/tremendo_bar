import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosGlobe } from "react-icons/io";
import styles from "./HamburgerMenu.module.css";
import Footer from "@/components/FooterMenu/FooterMenu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string | false>(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation("common");
  const menuRef = useRef(null);
  const languageRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setShowLanguageOptions(false); // Close the language dropdown
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
    setIsOpen(false); // Optionally close the menu
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !(menuRef.current as HTMLElement).contains(event.target as Node) &&
      languageRef.current &&
      !(languageRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsOpen(false);
      setShowLanguageOptions(false); // Close the language dropdown if click outside
    }
  };

  useEffect(() => {
    if (isOpen || showLanguageOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, showLanguageOptions]);

  let menuItems = [
    <li key="menu">
      <Link href="/menu" locale={language || undefined}>
        {t("menu")}
      </Link>
    </li>,
    <li key="book">
      <Link href="/book" locale={language || undefined}>
        {t("book")}
      </Link>
    </li>,
  ];

  if (pathname === "/menu") {
    menuItems = [
      <li key="home">
        <Link href="/" locale={language || undefined}>
          {t("home")}
        </Link>
      </li>,
    ].concat(menuItems);
  } else if (pathname === "/book") {
    menuItems = [
      <li key="home">
        <Link href="/" locale={language || undefined}>
          {t("home")}
        </Link>
      </li>,
      <li key="menu">
        <Link href="/menu" locale={language || undefined}>
          {t("menu")}
        </Link>
      </li>,
    ];
  }

  const languageOptions = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "ca", label: "Català" },
  ];

  return (
    <div
      className={styles.stickyContainer}
      style={{
        borderBottom: isOpen ? "none" : "0.5px solid rgb(200, 200, 200)",
      }}
    >
      <button
        className={`${styles.hamburgerButton} ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <span className={styles.closeIcon}>&times;</span>
        ) : (
          <div className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </button>
      <div
        className={styles.menuOverlay}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
        ref={menuRef}
      >
        <ul className={styles.menuList}>{menuItems}</ul>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
      <div
        className={styles.languageIcon}
        onClick={toggleLanguageDropdown}
        ref={languageRef}
      >
        <IoIosGlobe
          size={24}
          style={{
            cursor: "pointer",
            fontWeight: showLanguageOptions ? "bold" : "normal", // Bold when dropdown is open
            color: showLanguageOptions ? "#00b55e" : "inherit", // Color #00b55e when dropdown is open
          }}
        />
        {showLanguageOptions && (
          <ul className={styles.languageDropdown}>
            {languageOptions.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                style={{
                  fontWeight: router.locale === lang.code ? "bold" : "normal",
                  color: router.locale === lang.code ? "#00b55e" : "inherit",
                }}
              >
                {lang.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isOpen && <div className={styles.shadowOverlay}></div>}
    </div>
  );
};

export default HamburgerMenu;
