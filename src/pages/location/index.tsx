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
  const googleApiKey = process.env.GOOGLE_KEY; // Access the API key from environment variables

  // State to manage iframe src
  const [mapSrc, setMapSrc] = useState<string>(`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=41.4744337,2.0827327`);

  useEffect(() => {
    if (googleApiKey) {
      setMapSrc(`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=41.4744337,2.0827327`);
    }
  }, [locale, googleApiKey]);

  // Update iframe src when locale changes
  useEffect(() => {
    setMapSrc(`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=41.4744337,2.0827327`);
  }, [locale, googleApiKey]);

  return (
    <>
      <HamburgerMenu />
      <main className="relative overflow-visible w-full h-screen">
        <section className="flex flex-col lg:flex-row w-full h-full bg-white">
          <div className="w-full h-full flex flex-col justify-between">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapSrc}
            ></iframe>
            <div className="text-center p-4 fixed inset-x-0 bottom-0 bg-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=41.4744337,2.0827327"
                className="flex items-center justify-center text-green-600 hover:text-green-700 text-xl"
              >
                <FaMapMarkerAlt className="mr-2 text-3xl" />
                {t("navigate")}
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
      locale,
      googleApiKey: process.env.GOOGLE_KEY,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}