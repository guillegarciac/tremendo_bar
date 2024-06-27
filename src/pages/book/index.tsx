import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BookSection from "@/components/BookComponents/BookSection";  // Ensure path is correct
import backgroundImage from "../../assets/contacttremendo.jpeg";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), { ssr: false });
const HamburgerMenu = dynamic(() => import("@/components/HamburgerMenu/HamburgerMenu"));

export default function BookATable() {
  return (
    <>
      <HamburgerMenu />
      <main className="lg:min-h-screen relative overflow-visible w-full">
        <section className="flex flex-col lg:flex-row w-full h-full lg:min-h-screen bg-white">
          <div
            className="w-full lg:w-1/2 p-12 flex-col justify-between items-center lg:min-h-screen h-full hidden lg:flex"
            style={{  background: `url(${backgroundImage.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} 
          >
            <NavFooter />
          </div>
          <div className="w-full lg:w-1/2 flex-col justify-center items-center lg:flex lg:flex-col">
            <BookSection />
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
