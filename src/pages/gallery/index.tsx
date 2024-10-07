"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../gallery/Gallery.module.css";

// Importing gallery images
import image1 from "../../assets/calamars.jpg";
import image2 from "../../assets/musclos.jpg";
import image3 from "../../assets/perrins.jpg";
import image4 from "../../assets/rusa.jpg";
import image5 from "../../assets/salmonWine.jpg";
import image6 from "../../assets/buffala1.jpg";
import image7 from "../../assets/bravas.jpg";
import image8 from "../../assets/croquetasCalamars.jpg";
import image9 from "../../assets/figas.jpg";
import image10 from "../../assets/hildas.jpg";
import image11 from "../../assets/navajas.jpg";
import image12 from "../../assets/perrins.jpg";
import image13 from "../../assets/tartar.jpg";
import image14 from "../../assets/tuna1.jpg";
import image15 from "../../assets/vieiras.jpg";
import image16 from "../../assets/anxovas.jpg";
import image17 from "../../assets/handSteak.jpg";
import image18 from "../../assets/musclosClosques.jpg";
import image19 from "../../assets/salmon.jpg";
import image20 from "../../assets/salmonAbove.jpg";
import image21 from "../../assets/salmonWine.jpg";
import image22 from "../../assets/tomatoSalad.jpg";
import image23 from "../../assets/tartar.jpg";
import image24 from "../../assets/tuna2.jpg";

// Dynamically import the footer to improve page load speed
const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});

export default function Gallery() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("galleryPageTitle", "Gallery - Tremendo Sant Cugat")}</title>
        <meta
          name="description"
          content="Explore the image gallery of Tremendo Sant Cugat."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <main className="min-h-screen w-full relative pb-24">
        <div className="stickyContainer">
          <HamburgerMenu />
        </div>
        <div className={styles.whiterDiv}></div>

        <section className="w-full flex flex-col items-center justify-center md:p-12 z-[20] text-center">
          <h1 className="text-3xl font-bold mb-8">Our Gallery</h1>

                   {/* Image Gallery Section */}
                   <div className={styles.imageGallery}>
            {/* Column 1 */}
            <div className={styles.column1}>
              <div className={styles.galleryItem}>
                <Image src={image1} alt="Calamari Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image4} alt="Rusa Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image7} alt="Bravas Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image10} alt="Hildas Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image13} alt="Tartar Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image16} alt="New Dish 1" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image19} alt="New Dish 2" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image22} alt="New Dish 3" layout="responsive" width={130} height={200} />
              </div>
            </div>

            {/* Column 2 */}
            <div className={styles.column2}>
              <div className={styles.galleryItem}>
                <Image src={image2} alt="Mussels Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image5} alt="Salmon with Wine" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image8} alt="Croquetas Calamari Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image11} alt="Navajas Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image14} alt="Tuna Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image17} alt="New Dish 4" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image20} alt="New Dish 5" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image23} alt="New Dish 6" layout="responsive" width={130} height={200} />
              </div>
            </div>

            {/* Column 3 */}
            <div className={styles.column3}>
              <div className={styles.galleryItem}>
                <Image src={image3} alt="Perrins Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image6} alt="Buffala Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image9} alt="Figas Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image12} alt="Perrins Dish Again" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image15} alt="Vieiras Dish" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image18} alt="New Dish 7" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image21} alt="New Dish 8" layout="responsive" width={130} height={200} />
              </div>
              <div className={styles.galleryItem}>
                <Image src={image24} alt="New Dish 9" layout="responsive" width={130} height={200} />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="navigation-footer mt-8">
            <NavFooter />
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
