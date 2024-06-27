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
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation("common");
  const menuRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
    setIsOpen(false); // Close the menu when changing language
    setShowLanguageOptions(false); // Close the language dropdown
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!menuRef.current?.contains(event.target as Node) && !languageRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
      setShowLanguageOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, showLanguageOptions]);

  const languageOptions = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "ca", label: "Català" },
  ];

  // Define menu items based on the current path
  const getMenuItems = () => {
    const links = [
      { path: "/", label: t("home"), alwaysShow: pathname !== "/" },
      { path: "/menu", label: t("menu"), alwaysShow: pathname !== "/menu" },
      { path: "/book", label: t("book"), alwaysShow: pathname !== "/book" }
    ];

    return links.filter(link => link.alwaysShow).map(link => (
      <li key={link.path}>
        <Link href={link.path} locale={router.locale}>
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <div className={styles.stickyContainer} style={{ borderBottom: isOpen ? "none" : "0.5px solid rgb(200, 200, 200)" }}>
      <button className={`${styles.hamburgerButton} ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isOpen ? <span className={styles.closeIcon}>&times;</span> : <div className={styles.hamburgerIcon}>
          <span></span><span></span><span></span>
        </div>}
      </button>
      <div className={styles.menuOverlay} style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }} ref={menuRef}>
        <ul className={styles.menuList}>{getMenuItems()}</ul>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
      <div className={styles.languageIcon} onClick={toggleLanguageDropdown} ref={languageRef}>
        <IoIosGlobe size={24} style={{ cursor: "pointer", fontWeight: showLanguageOptions ? "bold" : "normal", color: showLanguageOptions ? "#00b55e" : "inherit" }} />
        {showLanguageOptions && (
          <ul className={styles.languageDropdown}>
            {languageOptions.map(lang => (
              <li key={lang.code} onClick={() => handleLanguageChange(lang.code)} style={{ fontWeight: router.locale === lang.code ? "bold" : "normal", color: router.locale === lang.code ? "#00b55e" : "inherit" }}>
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
