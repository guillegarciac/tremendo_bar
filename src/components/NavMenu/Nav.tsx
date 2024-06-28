import React, { FC, MutableRefObject, useState } from "react";
import { useTranslation } from 'next-i18next'; 
import styles from "./nav.module.css";

interface IProps {
  appetizersRef: MutableRefObject<HTMLDivElement | null>;
  tapasRef: MutableRefObject<HTMLDivElement | null>;
  dessertsRef: MutableRefObject<HTMLDivElement | null>;
  winesRef: MutableRefObject<HTMLDivElement | null>;
  beersRef: MutableRefObject<HTMLDivElement | null>;  
  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

const Nav: FC<IProps> = ({
  navigationHandler,
  appetizersRef,
  tapasRef,
  dessertsRef,
  winesRef,
  beersRef  
}) => {
  const [active, setActive] = useState<string>("");
  const { t } = useTranslation('common'); 

  const handleNavigation = (
    section: string,
    ref: MutableRefObject<HTMLDivElement | null>
  ) => {
    setActive(section);
    navigationHandler(ref);
  };

  return (
    <div className={styles.desktopNav}>
      <button
        onClick={() => handleNavigation("appetizers", appetizersRef)}
        className={`font-light text-black ${active === "appetizers" ? styles.active : ""}`}
      >
        {t('appetizers')}  
      </button>
      <button
        onClick={() => handleNavigation("tapas", tapasRef)}
        className={`font-light text-black ml-[28px] md:ml-[44px] ${active === "tapas" ? styles.active : ""}`}
      >
        {t('tapas')}  
      </button>
      <button
        onClick={() => handleNavigation("desserts", dessertsRef)}
        className={`font-light text-black ml-[28px] md:ml-[44px] ${active === "desserts" ? styles.active : ""}`}
        >
        {t('desserts')} 
        </button>
      <button
        onClick={() => handleNavigation("beers", beersRef)} 
        className={`font-light text-black ml-[28px] md:ml-[44px] ${active === "beers" ? styles.active : ""}`}
      >
        {t('beers')}  
      </button>
      <button
        onClick={() => handleNavigation("wines", winesRef)}
        className={`font-light text-black ml-[28px] md:ml-[44px] ${active === "wines" ? styles.active : ""}`}
      >
        {t('wines')}  
      </button>
    </div>
  );
};

export default Nav;
