import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BookSection from "@/components/BookComponents/BookSection"; // Ensure path is correct
import backgroundImage from "../../assets/contacttremendo.jpeg";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: true,
});

export default function BookATable() {
  return (
    <>
      <HamburgerMenu />
      <main className="relative overflow-visible w-full">
        <section className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
          <div
            className="w-full lg:w-1/2 p-12 flex-col justify-center items-center hidden lg:flex"
            style={{
              background: `url(${backgroundImage.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <NavFooter />
          </div>
          <div className="w-full lg:w-1/2 flex-col justify-center items-center flex">
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
