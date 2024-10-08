"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../gallery/Gallery.module.css";

// Import your images
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
import image12 from "../../assets/flan.jpg";
import image13 from "../../assets/tortilla.jpg";
import image14 from "../../assets/tuna1.jpg";
import image15 from "../../assets/vieiras.jpg";
import image16 from "../../assets/anxovas.jpg";
import image17 from "../../assets/handSteak.jpg";
import image18 from "../../assets/musclosClosques.jpg";
import image19 from "../../assets/salmon.jpg";
import image20 from "../../assets/salmonAbove.jpg";
import image21 from "../../assets/buffala2.jpg";
import image22 from "../../assets/tomatoSalad.jpg";
import image23 from "../../assets/tartar.jpg";
import image24 from "../../assets/tuna2.jpg";
import image25 from "../../assets/anxovas2.jpg";
import image26 from "../../assets/sirope.jpg";
import image27 from "../../assets/handFigas.jpg";
import image28 from "../../assets/paella.jpg";
import image29 from "../../assets/tartar3.jpg";

// Dynamically import the footer to improve page load speed
const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});

// Define photo type
interface Photo {
  src: string;
  width: number;
  height: number;
}

// Image gallery component
const MasonryImageGallery: React.FC = () => {
  const { t } = useTranslation("common");

  // Image data
  const photos: Photo[] = [
    { src: image1.src, width: 3, height: 2 },
    { src: image2.src, width: 4, height: 3 },
    { src: image3.src, width: 3, height: 4 },
    { src: image4.src, width: 4, height: 3 },
    { src: image5.src, width: 3, height: 2 },
    { src: image6.src, width: 3, height: 2 },
    { src: image7.src, width: 3, height: 2 },
    { src: image8.src, width: 4, height: 3 },
    { src: image9.src, width: 3, height: 4 },
    { src: image10.src, width: 4, height: 3 },
    { src: image11.src, width: 3, height: 2 },
    { src: image12.src, width: 4, height: 3 },
    { src: image13.src, width: 3, height: 2 },
    { src: image14.src, width: 4, height: 3 },
    { src: image15.src, width: 3, height: 4 },
    { src: image16.src, width: 4, height: 3 },
    { src: image17.src, width: 3, height: 2 },
    { src: image18.src, width: 4, height: 3 },
    { src: image19.src, width: 3, height: 2 },
    { src: image20.src, width: 4, height: 3 },
    { src: image21.src, width: 3, height: 4 },
    { src: image22.src, width: 4, height: 3 },
    { src: image23.src, width: 3, height: 2 },
    { src: image24.src, width: 4, height: 3 },
    { src: image25.src, width: 3, height: 2 },
    { src: image26.src, width: 4, height: 3 },
    { src: image27.src, width: 3, height: 4 },
    { src: image28.src, width: 4, height: 3 },
    { src: image29.src, width: 3, height: 2 },
  ];

  // State for lightbox viewer
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Open the viewer with the selected image index
  const openViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

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
          {/* Image Gallery Section */}
          <div className={styles.imageGallery}>
            {/* Column 1 */}
{/* Column 1 */}
<div className={styles.column1}>
  {photos.slice(0, 9).map((photo, index) => (
    <div
      key={index}
      className={styles.galleryItem}
      onClick={() => openViewer(index)}
    >
      <Image
        src={photo.src}
        alt={`Gallery Image ${index + 1}`}
        layout="responsive"
        width={photo.width * 100}
        height={photo.height * 100}
      />
    </div>
  ))}
</div>

{/* Column 2 */}
<div className={styles.column2}>
  {photos.slice(9, 20).map((photo, index) => (
    <div
      key={index + 9}
      className={styles.galleryItem}
      onClick={() => openViewer(index + 9)}
    >
      <Image
        src={photo.src}
        alt={`Gallery Image ${index + 10}`}
        layout="responsive"
        width={photo.width * 100}
        height={photo.height * 100}
      />
    </div>
  ))}
</div>

{/* Column 3 */}
<div className={styles.column3}>
  {photos.slice(20).map((photo, index) => (
    <div
      key={index + 20}
      className={styles.galleryItem}
      onClick={() => openViewer(index + 20)}
    >
      <Image
        src={photo.src}
        alt={`Gallery Image ${index + 21}`}
        layout="responsive"
        width={photo.width * 100}
        height={photo.height * 100}
      />
    </div>
  ))}
</div>

          </div>

          {/* Lightbox Viewer */}
          {isViewerOpen && (
            <Lightbox
              open={isViewerOpen}
              close={() => setIsViewerOpen(false)}
              slides={photos.map((photo) => ({ src: photo.src }))}
              index={currentImageIndex}
            />
          )}

          {/* Footer Section */}
          <div className="navigation-footer mt-8">
            <NavFooter />
          </div>
        </section>
      </main>
    </>
  );
};

export default MasonryImageGallery;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
