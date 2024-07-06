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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0.674);

  const minSwipeWidth = 50;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCurrentTranslate(0);
    setShadowOpacity(0.674); // Reset shadow opacity when toggling
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    router.push(router.pathname, router.pathname, { locale: selectedLanguage });
    setIsOpen(false);
    setShowLanguageOptions(false);
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = e.targetTouches[0].clientX;
    setTouchStart(start);
    setTouchPosition(start);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchCurrent = e.targetTouches[0].clientX;
    if (touchStart !== null) {
      const diff = touchStart - touchCurrent;
      if (diff > 0) {
        const translateAmount = Math.min(diff, window.innerWidth * 0.9);  // Assume the menu is at most 90% of the viewport width
        setCurrentTranslate(-translateAmount);

        // Increase the rate of opacity change
        const opacityFactor = 1 - (2 * (translateAmount / (window.innerWidth * 0.9))); // Doubling the rate at which opacity changes
        setShadowOpacity(Math.max(0.674 * opacityFactor, 0));  // Ensure opacity does not go negative or exceed initial state
      }
    }
    setTouchPosition(touchCurrent);
};


  const handleTouchEnd = () => {
    if (touchStart !== null && touchPosition !== null && (touchStart - touchPosition) > minSwipeWidth) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    setCurrentTranslate(0);
    setShadowOpacity(0); // Hide shadow completely on menu close
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
      <div 
        className={styles.menuOverlay} 
        style={{ transform: isOpen ? `translateX(${Math.max(currentTranslate, -100)}%)` : "translateX(-100%)" }} 
        ref={menuRef} 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        onTouchEnd={handleTouchEnd}
      >
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
      {isOpen && <div className={styles.shadowOverlay} style={{ opacity: shadowOpacity }}></div>}
    </div>
  );
};

export default HamburgerMenu;
