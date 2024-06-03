import React, { FC, MutableRefObject } from "react";
import menuData from "./menuData";
import Footer from "@/components/Footer";

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
    <div className="max-w-[628px] overflow-hidden overflow-y-scroll" style={{ 'padding': '20px' }}>
      {/* Starters Section */}
      <div ref={startersRef} className="w-full px-[10px]">
        <h1 className="text-[#FACE8D] font-dancing text-[45px] leading-none mb-[32px]">
          Appetizers
        </h1>
        {menuData.appetizers.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
            style={{ border: "1px solid black", borderRadius: 10 }}
          >
            <div className="w-full   flex justify-between">
              <h1 className="text-[15px]">{item.name}</h1>
              <p className="pl-[40px] text-white text-opacity-90">{item.price}</p>
            </div>
            {item.description && (
              <p className="pr-[70px] text-[13px] text-white text-opacity-50 ">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Each subsequent section follows the same padding and margin setup to ensure alignment */}
      <div ref={dinnerRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[45px] leading-none mb-[32px]">
          Dishes
        </h1>
        {menuData.dishes.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
            style={{ border: "1px solid transparent", borderRadius: 10 }}
          >
            <div className=" w-full flex justify-between ">
              <h1 className="text-[15px]">{item.name}</h1>
              <p className="pl-[40px] text-white text-opacity-90">{item.price}</p>
            </div>
            {item.description && (
              <p className="pr-[70px] text-[13px] text-white text-opacity-50 ">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div ref={hamburgersRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[45px] leading-none mb-[32px]">
          Hamburgers
        </h1>
        {menuData.hamburgers.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
            style={{ border: "1px solid transparent", borderRadius: 10 }}
          >
            <div className=" w-full flex justify-between ">
              <h1 className="text-[15px]">{item.name}</h1>
              <p className="pl-[40px] text-white text-opacity-90">{item.price}</p>
            </div>
            {item.description && (
              <p className="pr-[70px] text-[13px] text-white text-opacity-50 ">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div ref={dessertsRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[45px] leading-none mb-[32px]">
          Desserts
        </h1>
        {menuData.desserts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
            style={{ border: "1px solid transparent", borderRadius: 10 }}
          >
            <div className=" w-full flex justify-between ">
              <h1 className="text-[15px]">{item.name}</h1>
              <p className="pl-[40px] text-white text-opacity-90">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Feed;
