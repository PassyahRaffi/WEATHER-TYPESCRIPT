import React, { useState } from "react";

export default function Astronomy(props: any) {
  return (
    <>
      <div className="flex justify-center sm:mt-[50px] md:mt-[93px] lg:mt-[93px] xl:mt-[93px] 2xl:mt-[93px] mb-[102px] text-center sm:gap-[40px] md:gap-[80px] lg:gap-[80px] xl:gap-[80px] 2xl:gap-[80px]">
        <div className="w-[134px]">
          <div className="uppercase text-[18px] drop-shadow-text">sunrise</div>
          <div className="text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.astronomy.sunrise.split(" ")[0]}
          </div>
          <div className="text-[32px] drop-shadow-text">
            {props.data.astronomy.sunrise.split(" ")[1]}
          </div>
        </div>
        <div className="w-[137px]">
          <div className="uppercase text-[18px] drop-shadow-text">sunset</div>
          <div className="text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.astronomy.sunset.split(" ")[0]}
          </div>
          <div className="text-[32px] drop-shadow-text">
            {props.data.astronomy.sunset.split(" ")[1]}
          </div>
        </div>
      </div>
    </>
  );
}
