import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BookSection from "@/components/BookComponents/BookSection";
import backgroundImage from "../../assets/tremendoDay.jpg";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import { FaPhone } from 'react-icons/fa';
import { useTranslation } from "next-i18next";  // Import useTranslation

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: true,
});

export default function BookATable() {
  const { t } = useTranslation('common');  // Initialize the translation hook

  return (
    <>
      <HamburgerMenu />
      <main className="relative overflow-visible w-full">
        <section className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
          <div
            className="w-full lg:w-1/2 p-12 flex-col justify-between items-center hidden lg:flex"
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
            <div className="text-center mt-10"> 
  <p className="text-2xl mt-20 mb-4"> 
    {t('preferPhoneBooking')}
  </p>
</div>
<div className="mt-4"> 
  <a href="tel:936393970" className="flex items-center justify-center text-green-600 hover:text-green-700 text-xl"> 
    <FaPhone className="mr-2 text-3xl" /> 
    936 393 970
  </a>
</div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),  // Ensure the common namespace is loaded
    },
  };
}
