import React from "react";

export default function Wind(props: any) {

  return (
    <>
      <div className="flex justify-center sm:mt-[50px] md:mt-[93px] lg:mt-[93px] xl:mt-[93px] 2xl:mt-[93px] mb-[102px] text-center sm:gap-[40px] md:gap-[80px] lg:gap-[80px] xl:gap-[80px] 2xl:gap-[80px]">
        <div className="w-[77px]">
          <div className="flex items-center justify-center uppercase text-[18px] h-[23px] drop-shadow-text">
            chill
          </div>
          <div className="flex items-center justify-center text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.wind.chill}
          </div>
        </div>
        <div className="w-[106px]">
          <div className="flex items-center justify-center uppercase text-[18px] h-[23px] drop-shadow-text">
            direction
          </div>
          <div className="flex items-center justify-center text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.wind.direction}
          </div>
          <div className="flex items-center justify-center text-[32px] drop-shadow-text">
            {props.data.units.distance}
          </div>
        </div>
        <div className="w-[79px]">
          <div className="flex items-center justify-center uppercase text-[18px] h-[23px] drop-shadow-text drop-shadow-text">
            speed
          </div>
          <div className="flex items-center justify-center text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.wind.speed}
          </div>
          <div className="flex items-center justify-center text-[32px] drop-shadow-text">
            {props.data.units.speed}
          </div>
        </div>
      </div>
    </>
  );
}
