import React, { useState } from "react";
/* eslint-disable import/first */

// 01
const Sun = require("../assets/images/01/01.sun-light.png");
const Sunset = require("../assets/images/01/02.sunset-light.png");
const Sunrise = require("../assets/images/01/03.sunrise-light.png");
const Eclipse = require("../assets/images/01/04.eclipse-light.png");
const Partial = require("../assets/images/01/05.partial-cloudy-light.png");
const Mostly = require("../assets/images/01/11.mostly-cloudy-light.png");

// 02
const Thunder = require("../assets/images/02/13.thunderstorm-light.png");
const HeavySnow = require("../assets/images/02/14.heavy-snowfall-light.png");
const CloudyLight = require("../assets/images/02/15.cloud-light.png");
const CloudyNight = require("../assets/images/02/16.cloudy-night-light.png");
const CloudyNightStarts = require("../assets/images/02/17.cloudy-night-stars-light.png");
const Heavy = require("../assets/images/02/18.heavy-rain-light.png");

// 03
const Rain = require("../assets/images/03/06.rainyday-light.png");
const MostlyCloud = require("../assets/images/03/07.mostly-cloud-light.png");
const FullMoon = require("../assets/images/03/08.full-moon-light.png");
const HalfMoon = require("../assets/images/03/09.half-moon-light.png");
const CloudyNgtLight = require("../assets/images/03/10.cloudy-night-light.png");
const ThunderLight = require("../assets/images/03/12.thunder-light.png");

// 04
const Moon = require("../assets/images/04/19.moon-set-light.png");
const RainLight = require("../assets/images/04/20.rain-light.png");
const HeavyWind = require("../assets/images/04/21.heavy-wind-light.png");
const SnowLight = require("../assets/images/04/22.snow-light.png");
const Hails = require("../assets/images/04/23.hailstrom-light.png");
const Drop = require("../assets/images/04/24.drop-light.png");

interface Condition {
  code: string;
  date: string;
  temp: string;
  text: string;
}

interface Image {
  Breezy: any;
  "Partly Cloudy": any;
  Cloudy: any;
  Rain: any;
  "Mostly Cloudy": any;
  "Scattered Showers": any;
}

import { nanoid } from "nanoid";

export default function Weather(props: any) {
  const [image, setImage] = useState({
    Breezy: HeavyWind,
    "Partly Cloudy": Partial,
    Cloudy: CloudyLight,
    Rain: RainLight,
    "Mostly Cloudy": MostlyCloud,
    "Scattered Showers": Drop,
  });

  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const createNewId = (text: any) => ({
    completed: false,
    id: nanoid(),
    text,
  });

  return (
    <>
      {props.weater.map((dataProps: any , index: number) => {
        if (index < 6) {
          return (
            <>
              <div
                key={dataProps.id}
                className="flex justify-center md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] md:mb-[102px] lg:mb-[102px] xl:mb-[102px] 2xl:mb-[102px]"
              >
                <div className="w-[120px] h-[210px] hover:bg-card hover:cursor-pointer rounded-[11.3852px] pt-[20px]">
                  <div className="flex justify-center font-extrabold text-[24px]">
                    {`${new Date(dataProps.date).getDate()} ${
                      month[new Date(dataProps.date).getMonth()]
                    }`}
                  </div>
                  <div className="flex justify-center mt-[1px] text-[16px]">
                    {dataProps.day}
                  </div>
                  <div className="flex justify-center mt-[4px]">
                    <img
                      className="w-[64px] h-[64px]"
                      src={image[dataProps.text as keyof Image]}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center gap-[10px] mt-[12px] text-[18px]">
                    <div className="">{dataProps.low}°</div>
                    <div className="">{dataProps.high}°</div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}
