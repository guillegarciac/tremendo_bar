import React, { FC, MutableRefObject } from "react";

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
    <div className="min-h-[130px] w-full flex justify-center items-center">
      <button
        onClick={() => navigationHandler(startersRef)}
        className="font-light text-[#FACE8D]"
      >
        Appetizers
      </button>
      <button
        onClick={() => navigationHandler(dinnerRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        Dishes
      </button>
      <button
        onClick={() => navigationHandler(hamburgersRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        Hamburgers
      </button>
      <button
        onClick={() => navigationHandler(dessertsRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        Desserts
      </button>
    </div>
  );
};

export default Nav;
