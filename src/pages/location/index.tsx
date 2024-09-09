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

  return (
    <>
      <HamburgerMenu />
      <main className="relative overflow-visible w-full h-screen">
        <section className="flex flex-col lg:flex-row w-full h-full bg-white">
          {/* Hide everything except map on mobile */}
          <div className="w-full h-full flex flex-col justify-between">
            {/* Hide title on mobile */}
            <div className="text-center lg:p-10 hidden lg:block">
              <h1 className="text-4xl font-bold mb-5">{t("findUs")}</h1>
            </div>
            {/* Map container, make full screen on mobile */}
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=41.4744337,2.0827327`}
            ></iframe>
            {/* Navigation button at the bottom */}
            <div className="text-center p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
