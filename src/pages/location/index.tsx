import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import { FaMapMarkerAlt } from "react-icons/fa";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: true,
});

interface LocationPageProps {
  locale: string;
}

export default function LocationPage({ locale }: LocationPageProps) {
  const { t } = useTranslation("common");
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_KEY; // Access API key directly from client-side environment variable

  // State to manage iframe src
  const [mapSrc, setMapSrc] = useState<string>("");

  // Update iframe src when locale or googleApiKey changes
  useEffect(() => {
    if (googleApiKey) {
      setMapSrc(
        `https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=Tremendo+Sant+cugat&maptype=roadmap&zoom=19`
      );
    }
  }, [locale, googleApiKey]);

  return (
    <>
     
      <main className="relative overflow-visible w-full h-screen">
        <section className="flex flex-col lg:flex-row w-full h-full bg-white">
           <HamburgerMenu />
          <div className="w-full h-full flex flex-col justify-between mt-10 mb-10">
            <iframe
              width="100%"
              height="100%"
              
              loading="lazy"
              
              src={mapSrc}
            ></iframe>
            <div className="text-center p-2 fixed inset-x-0 bottom-0 bg-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
              <a
                href="https://www.google.com/maps/dir/41.3929988,2.1615579/Tremendo+Sant+cugat,+Pla%C3%A7a+de+Pep+Ventura,+6,+08172+Sant+Cugat+del+Vall%C3%A8s,+Barcelona"
                className="flex items-center justify-center text-green-600 hover:text-green-700 text-xl"
              >
                <FaMapMarkerAlt className="mr-1 text-2xl" />
                {t("navigate")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Only return the locale; googleApiKey is no longer needed here
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
