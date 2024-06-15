import React, { FC, MutableRefObject, useState } from "react";
import styles from "./nav.module.css";

//-------------------------------------------------------
interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  hamburgersRef: MutableRefObject<HTMLDivElement | null>;
  dessertsRef: MutableRefObject<HTMLDivElement | null>;
  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}
//-------------------------------------------------------

const Nav: FC<IProps> = ({
  navigationHandler,
  startersRef,
  dinnerRef,
  hamburgersRef,
  dessertsRef,
}) => {
  const [active, setActive] = useState<string>("");

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
        onClick={() => handleNavigation("appetizers", startersRef)}
        className={`font-light text-black ${
          active === "appetizers" ? styles.active : ""
        }`}
      >
        Appetizers
      </button>
      <button
        onClick={() => handleNavigation("dishes", dinnerRef)}
        className={`font-light text-black ml-[28px] md:ml-[44px] ${
          active === "dishes" ? styles.active : ""
        }`}
      >
        Dishes
      </button>
      <button
        onClick={() => handleNavigation("hamburgers", hamburgersRef)}
        className={`font-light text-black ml-[28px] md:ml-[44px] ${
          active === "hamburgers" ? styles.active : ""
        }`}
      >
        Hamburgers
      </button>
      <button
        onClick={() => handleNavigation("desserts", dessertsRef)}
        className={`font-light text-black ml-[28px] md:ml-[44px] ${
          active === "desserts" ? styles.active : ""
        }`}
      >
        Desserts
      </button>
    </div>
  );
};

export default Nav;
