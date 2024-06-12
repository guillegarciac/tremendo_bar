import React, { FC, MutableRefObject } from "react";
import styles from './nav.module.css'; 

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
  return (
    <div className={styles.desktopNav}>
      <button
        onClick={() => navigationHandler(startersRef)}
        className="font-light text-black"
      >
        Appetizers
      </button>
      <button
        onClick={() => navigationHandler(dinnerRef)}
        className="font-light text-black ml-[28px] md:ml-[44px]"
      >
        Dishes
      </button>
      <button
        onClick={() => navigationHandler(hamburgersRef)}
        className="font-light text-black ml-[28px] md:ml-[44px]"
      >
        Hamburgers
      </button>
      <button
        onClick={() => navigationHandler(dessertsRef)}
        className="font-light text-black ml-[28px] md:ml-[44px]"
      >
        Desserts
      </button>
    </div>
  );
};

export default Nav;
