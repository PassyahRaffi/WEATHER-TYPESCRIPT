import React, { useState } from "react";
/* eslint-disable import/first */
import Weather from "../components/Weather";
import Wind from "../components/Wind";
import Atmosphere from "../components/Atmosphere";
import Astronomy from "../components/Astronomy";

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

export default function Beranda() {
  const data: { [key: string]: any } = require("./config.json");
  const [openTab, setOpenTab] = useState(1);

  const [forecasts, setForecasts] = useState(
    data.query.results.channel.item.forecast
  );

  const [dataChannel, setDataChannel] = useState(data.query.results.channel);

  const [image, setImage] = useState({
    Breezy: HeavyWind,
    "Partly Cloudy": Partial,
    Cloudy: CloudyLight,
    Rain: RainLight,
    "Mostly Cloudy": MostlyCloud,
    "Scattered Showers": Drop,
  });

  return (
    <>
      <main className="font-default bg-backgorund text-white h-content w-full">
        <div className="">
          <div className="flex justify-center pt-[45px]">
            <div className="top-[45px]">
              <h1 className="flex justify-center text-[32px] font-extrabold drop-text-shadow">
                {data.query.results.channel.location.city}
              </h1>
              <div className="flex justify-center gap-2">
                <h3>{data.query.results.channel.location.city},</h3>
                <h3>{data.query.results.channel.location.region},</h3>
                <h3>{data.query.results.channel.location.country}</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={image[data.query.results.channel.item.condition.text as keyof Image]} alt="" />
          </div>
          <div className="flex justify-center font-extrabold">
            <h2 className="text-[120px] drop-shadow-text leading-[152px]">
              {data.query.results.channel.item.condition.temp}
            </h2>
            <h2 className="text-[30px] leading-[38px]">
              °{data.query.results.channel.units.temperature}
            </h2>
          </div>
          <div className="flex justify-center text-[32px] font-normal">
            {data.query.results.channel.item.condition.text}
          </div>

          {/* TABS NAVIGATION */}
          <div
            className="flex justify-center pt-[84px] sm:gap-[20px] md:gap-[45px] lg:gap-[45px] xl:gap-[45px] 2xl:gap-[45px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] border-b-[1px] border-border"
            role="tablist"
          >
            {/* TAB 1 */}
            <a
              className={
                "pb-[10px] cursor-pointer " +
                (openTab === 1
                  ? "border-b-[1px] border-white"
                  : "opacity-[0.4]")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="/Weather"
              role="tablist"
            >
              Weather
            </a>
            
            {/* TAB 2 */}
            <a
              className={
                "pb-[10px] cursor-pointer " +
                (openTab === 2
                  ? "border-b-[1px] border-white"
                  : "opacity-[0.4]")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="/Wind"
              role="tablist"
            >
              Wind
            </a>
            
            {/* TAB 3 */}
            <a
              className={
                "pb-[10px] cursor-pointer " +
                (openTab === 3
                  ? "border-b-[1px] border-white"
                  : "opacity-[0.4]")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="/Atmosphere"
              role="tablist"
            >
              Atmosphere
            </a>
            
            {/* TAB 4 */}
            <a
              className={
                "pb-[10px] cursor-pointer " +
                (openTab === 4
                  ? "border-b-[1px] border-white"
                  : "opacity-[0.4]")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="/Astronomy"
              role="tablist"
            >
              Astronomy
            </a>
          </div>

          {/* CONDITION TABS NAVIGATION */}
          <div className="flex justify-center">
            <div className="tab-content tab-space">
              {/* TAB 1 */}
              <div
                className={openTab === 1 ? "sm:block md:flex lg:flex xl:flex 2xl:flex sm:mt-[20px] sm:mb-[50px]" : "hidden"}
                id="/Weather">
                <Weather weater={forecasts} />
              </div>

              {/* TAB 2 */}
              <div
                className={openTab === 2 ? "flex" : "hidden"}
                id="/Wind">
                <Wind data={dataChannel} />
              </div>

              {/* TAB 3 */}
              <div
                className={openTab === 3 ? "flex" : "hidden"}
                id="/Atmosphere"
              >
                <Atmosphere data={dataChannel} />
              </div>

              {/* TAB 4 */}
              <div
                className={openTab === 4 ? "flex" : "hidden"}
                id="/Astronomy"
              >
                <Astronomy data={dataChannel} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
