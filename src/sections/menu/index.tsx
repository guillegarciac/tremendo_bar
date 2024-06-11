import dynamic from 'next/dynamic';
import Link from "next/link";
import { FC, MutableRefObject, useRef } from "react";
import Nav from "./Nav";
import menuImg from "../../assets/menupage.jpg";
import Feed from "./Feed";

const NavigationFooter = dynamic(() => import('@/components/NavigationFooter'), {
  ssr: false
});

const MenuSection: FC = () => {
  const startersRef = useRef<HTMLDivElement | null>(null);
  const dinnerRef = useRef<HTMLDivElement | null>(null);
  const hamburgersRef = useRef<HTMLDivElement | null>(null);
  const dessertsRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(sectionRef: MutableRefObject<HTMLDivElement | null>) {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
      {/* This div will now only be visible on lg screens and above */}
      <div
        style={{
          background: `url(${menuImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hidden lg:flex lg:w-[50%] p-12 flex-col justify-between items-center min-h-[85vh] md:min-h-screen h-full"
      >
        <Link href="/" className="font-dancing text-5xl sm:text-[60px] md:text-[60px] lg:text-[60px] leading-none">
          
        </Link>
        <div className="text-center">
          <h2 className="text-[#FFFFFF] font-dancing text-[80px] leading-none md:text-[80px]">
          <Link href="/" className="font-dancing text-5xl sm:text-[60px] md:text-[60px] lg:text-[60px] leading-none">
          Tremendo
        </Link>
          </h2>
          <h1 className="text-[#FFFFFF] font-medium text-[50px] md:text-[80px] leading-none">
            Menu
          </h1>
        </div>
        <NavigationFooter />
      </div>

      {/* This div remains visible on all screen sizes */}
      <div className="w-full lg:w-[50%] flex flex-col items-center h-screen">
        <Nav
          startersRef={startersRef}
          dinnerRef={dinnerRef}
          hamburgersRef={hamburgersRef}
          dessertsRef={dessertsRef}
          navigationHandler={scrollToSection}
        />
        <Feed
          startersRef={startersRef}
          dinnerRef={dinnerRef}
          hamburgersRef={hamburgersRef}
          dessertsRef={dessertsRef}
        />
      </div>
    </section>
  );
};

export default MenuSection;
