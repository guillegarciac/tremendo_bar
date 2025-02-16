import { useEffect, useState } from "react";
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
  const [mapSrc, setMapSrc] = useState<string>("");

  useEffect(() => {
    async function fetchMapUrl() {
      try {
        const response = await fetch('/api/maps-url')
        const data = await response.json()
        
        if (data.error) {
          console.error('Error loading map:', data.error)
          return
        }
        
        setMapSrc(data.mapUrl)
      } catch (error) {
        console.error('Failed to load map:', error)
      }
    }

    fetchMapUrl()
  }, [])

  return (
    <>
      <main className="relative overflow-visible w-full h-screen">
        <section className="flex flex-col lg:flex-row w-full h-full bg-white">
          <HamburgerMenu />
          <div
            className="w-full relative"
            style={{ height: "100%", marginTop: "-20px" }}
          >
            {mapSrc ? (
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                src={mapSrc}
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p>Loading map...</p>
              </div>
            )}
            <div
              className="absolute inset-0"
              style={{ pointerEvents: "auto", background: "transparent" }}
            />
            <div className="text-center p-2 fixed inset-x-0 bottom-0 bg-white">
              <a
                href="https://www.google.com/maps/dir/41.3929988,2.1615579/Tremendo+Sant+cugat,+Pla%C3%A7a+de+Pep+Ventura,+6,+08172+Sant+Cugat+del+Vall%C3%A8s,+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 px-4 py-2 text-sm font-medium z-10 flex items-center justify-center"
              >
                <FaMapMarkerAlt className="mr-2 text-green-600" />
                {t("openMaps")}
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
