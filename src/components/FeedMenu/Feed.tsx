import React, { FC, MutableRefObject } from "react";
import { useTranslation } from "next-i18next";
import menuData from "../../data/menuData";
import styles from "./feed.module.css";

interface IProps {
  appetizersRef: MutableRefObject<HTMLDivElement | null>;
  tapasRef: MutableRefObject<HTMLDivElement | null>;
  dessertsRef: MutableRefObject<HTMLDivElement | null>;
  winesRef: MutableRefObject<HTMLDivElement | null>;
  beersRef: MutableRefObject<HTMLDivElement | null>;
}

const Feed: FC<IProps> = ({ appetizersRef, tapasRef, dessertsRef, winesRef, beersRef }) => {
  const { t } = useTranslation("common");

  return (
    <div className="overflow-hidden overflow-y-scroll" style={{ padding: "20px", marginTop: "50px" }}>
      {/* Appetizers Section */}
      <div ref={appetizersRef} className="w-full px-[10px]">
        <h1 className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}>
          {t("appetizers")}
        </h1>
        {menuData.appetizers.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{t(item.key)}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
            {item.descriptionKey && (
              <p className={`${styles.itemdescription} text-[13px]`}>
                {t(item.descriptionKey)}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Tapas Section */}
      <div ref={tapasRef} className="w-full px-[10px] mt-[96px]">
        <h1 className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}>
          {t("tapas")}
        </h1>
        {menuData.tapas.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{t(item.key)}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desserts Section */}
      <div ref={dessertsRef} className="w-full px-[10px] mt-[96px]">
        <h1 className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}>
          {t("desserts")}
        </h1>
        {menuData.desserts.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{t(item.key)}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Beers Section */}
      <div ref={beersRef} className="w-full px-[10px] mt-[96px]">
        <h1 className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}>
          {t("beers")}
        </h1>
        {menuData.beers.map((beer) => (
          <div key={beer.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{t(beer.key)}</h1>
              <p className="pl-[40px] text-black">{beer.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Wines Section */}
      <div ref={winesRef} className="w-full px-[10px] mt-[96px] mb-[96px]">
        <h1 className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}>
          {t("wines")}
        </h1>
        {Object.entries(menuData.wines.categories).map(([category, categoryKey]) => (
          <div key={category}>
            <h2 className={`text-[25px] leading-none mb-[16px] text-black ${styles.subtitle}`}>
              {t(categoryKey)}
            </h2>
            {(menuData.wines as any)[category].map((wine: any) => (
              <div key={wine.id} className={`${styles.item}`}>
                <div className={`${styles.itemheading}`}>
                  <h1 className="text-[15px] text-black">{t(wine.key)}</h1>
                  <p className="pl-[40px] text-black">{wine.price}</p>
                </div>
                <p className={`${styles.itemdescription} text-[13px]`}>
                  {`(${t(wine.descriptionKey)}) `}<b>{t(wine.originKey)}</b>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
