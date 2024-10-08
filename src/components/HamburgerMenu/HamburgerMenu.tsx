import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./HamburgerMenu.module.css";
import Footer from "@/components/FooterMenu/FooterMenu";
import useMediaQuery from "../../hooks/useMediaQuery";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation("common");
  const menuRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const languageOptions = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "ca", label: "Català" },
  ];

  const getCurrentLanguageLabel = () => {
    const currentLang = languageOptions.find(lang => lang.code === router.locale);
    return currentLang ? currentLang.label : "Language"; // Default label if not found
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
    setShowLanguageOptions(false);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !menuRef.current?.contains(event.target as Node) &&
      !languageRef.current?.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setShowLanguageOptions(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) {
        setShowLanguageOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const getMenuItems = () => {
    const links = [
      { path: "/", label: t("home"), alwaysShow: pathname !== "/" },
      { path: "/menu", label: t("menu"), alwaysShow: pathname !== "/menu" },
      { path: "/book", label: t("book"), alwaysShow: pathname !== "/book" },
      { path: "/location", label: t("location"), alwaysShow: pathname !== "/location" },
      { path: "/gallery", label: t("gallery"), alwaysShow: pathname !== "/gallery" },
    ];
  
    return links
      .filter((link) => {
        if (link.path === "/book" && isMobile) {
          return false; // Exclude "Book" link on mobile devices
        }
        return link.alwaysShow;
      })
      .map((link) => (
        <li key={link.path} className={styles.menuItem}>
          <Link href={link.path} locale={router.locale} className={styles.menuLink}>
            {link.label}
          </Link>
        </li>
      ));
  };
  

  return (
    <div className={styles.stickyContainer}>
      <button className={`${styles.hamburgerButton} ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isOpen ? <span className={styles.closeIcon}>&times;</span> : <div className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>}
      </button>
      <div className={styles.menuOverlay} style={{
          transform: `translateX(${isOpen ? "0" : "-100%"})`,
          overflow: isOpen ? "auto" : "hidden", // This handles scrolling within the menu
        }} ref={menuRef}>
        <ul className={styles.menuList}>{getMenuItems()}</ul>
        <Footer />
      </div>
      <div className={styles.languageIcon} onClick={toggleLanguageDropdown} ref={languageRef}>
        {showLanguageOptions ? (
          <ul className={styles.languageDropdown}>
            {languageOptions.map((lang) => (
              <li key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={router.locale === lang.code ? styles.languageActive : ""}>
                {lang.label}
              </li>
            ))}
          </ul>
        ) : (
          <span>{getCurrentLanguageLabel()} <span className={styles.dropdownArrow}>▼</span></span> // Display current language with a dropdown arrow
        )}
      </div>
      {isOpen && <div className={styles.shadowOverlay} style={{ opacity: 0.5 }}></div>}
    </div>
  );
};

export default HamburgerMenu;
