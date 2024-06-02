import dynamic from 'next/dynamic';

const NavigationFooter = dynamic(() => import('@/components/NavigationFooter'), {
  ssr: false
});

import Link from "next/link";
import { FC, MutableRefObject, useRef, useState } from "react";
import Nav from "./Nav";
import menuImg from "../../assets/menupage.jpg";
import Feed from "./Feed";

const MenuSection: FC = () => {
  const startersRef = useRef<HTMLDivElement | null>(null);
  const breakfastRef = useRef<HTMLDivElement | null>(null);
  const dinnerRef = useRef<HTMLDivElement | null>(null);
  const drinksRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(sectionId: MutableRefObject<HTMLDivElement | null>) {
    if (sectionId?.current) {
      sectionId?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
      <div
        style={{
          background: `url(${menuImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-[85vh] md:min-h-screen h-full"
      >
        <Link href="/" className="font-dancing text-5xl sm:text-[60px] md:text-[60px] lg:text-[60px] leading-none">
            Tremendo
          </Link>
        <div className="text-center">
          <h2 className="text-[#FACE8D] text-[50px] md:text-[80px] leading-none">
            Check Out
          </h2>
          <h1 className="font-medium text-[50px] md:text-[80px] leading-none">
            Our Menus
          </h1>
        </div>
        <NavigationFooter />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col items-center h-screen">
        <Nav
          startersRef={startersRef}
          breakfastRef={breakfastRef}
          dinnerRef={dinnerRef}
          drinksRef={drinksRef}
          navigationHandler={scrollToSection}
        />
        <Feed
          startersRef={startersRef}
          breakfastRef={breakfastRef}
          dinnerRef={dinnerRef}
          drinksRef={drinksRef}
        />
      </div>
    </section>
  );
};

export default MenuSection;
