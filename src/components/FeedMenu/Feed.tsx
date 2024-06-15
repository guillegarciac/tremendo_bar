import React, { FC, MutableRefObject } from "react";
import menuData from "../../data/menuData";
import Footer from "@/components/FooterMenu/FooterMenu";
import styles from "./feed.module.css";

//---------------------------------------------
interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  hamburgersRef: MutableRefObject<HTMLDivElement | null>;
  dessertsRef: MutableRefObject<HTMLDivElement | null>;
}
//---------------------------------------------

const Feed: FC<IProps> = ({
  startersRef,
  dinnerRef,
  hamburgersRef,
  dessertsRef,
}) => {
  return (
    <div
      className="max-w-[628px] overflow-hidden overflow-y-scroll"
      style={{ padding: "20px" }}
    >
      <div ref={startersRef} className="w-full px-[10px]">
        <h1
          className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}
        >
          Appetizers
        </h1>
        {menuData.appetizers.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{item.name}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
            {item.description && (
              <p className={`${styles.itemdescription} text-[13px]`}>
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div ref={dinnerRef} className="w-full px-[10px] mt-[96px]">
        <h1
          className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}
        >
          Dishes
        </h1>
        {menuData.dishes.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{item.name}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
            {item.description && (
              <p className={`${styles.itemdescription} text-[13px]`}>
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div ref={hamburgersRef} className="w-full px-[10px] mt-[96px]">
        <h1
          className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}
        >
          Hamburgers
        </h1>
        {menuData.hamburgers.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{item.name}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
            {item.description && (
              <p className={`${styles.itemdescription} text-[13px]`}>
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div ref={dessertsRef} className="w-full px-[10px] mt-[96px]">
        <h1
          className={`font-dancing text-[45px] leading-none mb-[32px] text-black ${styles.title}`}
        >
          Desserts
        </h1>
        {menuData.desserts.map((item) => (
          <div key={item.id} className={`${styles.item}`}>
            <div className={`${styles.itemheading}`}>
              <h1 className="text-[15px] text-black">{item.name}</h1>
              <p className="pl-[40px] text-black">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Feed;
