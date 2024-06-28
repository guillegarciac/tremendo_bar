import dynamic from "next/dynamic";
import Link from "next/link";
import { FC, MutableRefObject, useRef } from "react";
import Nav from "../NavMenu/Nav";
import menuImg from "../../assets/menupage.jpg";
import Feed from "../FeedMenu/Feed";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), { ssr: false });

const MenuSection: FC = () => {
  const appetizersRef = useRef<HTMLDivElement | null>(null);
  const tapasRef = useRef<HTMLDivElement | null>(null);
  const dessertsRef = useRef<HTMLDivElement | null>(null);
  const winesRef = useRef<HTMLDivElement | null>(null);
  const beersRef = useRef<HTMLDivElement | null>(null);  // Added reference for beers

  function scrollToSection(sectionRef: MutableRefObject<HTMLDivElement | null>) {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        className="hidden lg:flex lg:w-[50%] p-12 flex-col justify-center items-center min-h-[85vh] md:min-h-screen h-full"
      >
        <div className="text-center">
        </div>
        <NavFooter />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col items-center h-screen">
        <Nav
          appetizersRef={appetizersRef}
          tapasRef={tapasRef}
          dessertsRef={dessertsRef}
          winesRef={winesRef}
          beersRef={beersRef}  // Pass beersRef to the Nav component
          navigationHandler={scrollToSection}
        />
        <Feed
          appetizersRef={appetizersRef}
          tapasRef={tapasRef}
          dessertsRef={dessertsRef}
          winesRef={winesRef}
          beersRef={beersRef}  // Pass beersRef to the Feed component
        />
      </div>
    </section>
  );
};

export default MenuSection;
