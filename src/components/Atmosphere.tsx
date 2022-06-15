import React, { useState } from "react";

const data: { [key: string]: any } = require("../pages/config.json");
// console.log(data);

export default function Atmosphere(props: any) {
  return (
    <>
      <div className="sm:block md:flex lg:flex xl:flex 2xl:flex justify-center sm:mt-[20px] md:mt-[93px] lg:mt-[93px] xl:mt-[93px] 2xl:mt-[93px] sm:mb-[50px] md:mb-[102px] lg:mb-[102px] xl:mb-[102px] 2xl:mb-[102px] text-center sm:gap-[40px] md:gap-[80px] lg:gap-[80px] xl:gap-[80px] 2xl:gap-[80px]">
        <div className="sm:py-[30px] md:py-[0px] lg:py-[0px] xl:py-[0px] 2xl:py-[0px]">
          <div className="uppercase text-[18px] drop-shadow-text">humdity</div>
          <div className="text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.atmosphere.humidity}
          </div>
        </div>
        <div className="sm:py-[30px] md:py-[0px] lg:py-[0px] xl:py-[0px] 2xl:py-[0px]">
          <div className="uppercase text-[18px] drop-shadow-text">pressure</div>
          <div className="text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.atmosphere.pressure}
          </div>
          <div className="text-[32px] drop-shadow-text">{props.data.units.distance}</div>
        </div>
        <div className="sm:py-[30px] md:py-[0px] lg:py-[0px] xl:py-[0px] 2xl:py-[0px]">
          <div className="uppercase text-[18px] drop-shadow-text">rising</div>
          <div className="text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.atmosphere.rising}
          </div>
          <div className="text-[32px] drop-shadow-text">{props.data.units.speed}</div>
        </div>
        <div className="sm:py-[30px] md:py-[0px] lg:py-[0px] xl:py-[0px] 2xl:py-[0px]">
          <div className="uppercase text-[18px] drop-shadow-text">
            visibility
          </div>
          <div className="text-[64px] h-[81px] font-extrabold drop-shadow-text">
            {props.data.atmosphere.visibility}
          </div>
          <div className="text-[32px] drop-shadow-text">{props.data.units.speed}</div>
        </div>
      </div>
    </>
  );
}
