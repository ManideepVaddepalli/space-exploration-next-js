"use client";
import React from "react";
import Image from "next/image";
import destinationData from "./destinationData";
import "./destin.css";
import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
const barlow = Barlow({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});
const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Destin() {
  function destinationHandle() {
    let destinationNav = document.querySelector(".destination");
    destinationNav.checked = true;
  }
  React.useEffect(() => {
    destinationHandle();
  }, []);
  let [selected, setSelected] = React.useState({
    moon: true,
    mars: false,
    europa: false,
    titan: false,
  });
  let [data, setData] = React.useState(destinationData[0]);
  function destiChanged(e) {
    setSelected({
      moon: false,
      mars: false,
      europa: false,
      titan: false,
      [e.target.textContent]: true,
    });
    switch (e.target.textContent) {
      case "moon":
        setData(destinationData[0]);
        break;
      case "mars":
        setData(destinationData[1]);
        break;
      case "europa":
        setData(destinationData[2]);
        break;
      case "titan":
        setData(destinationData[3]);
        break;
    }
  }
  return (
    <div className="total-content-destin">
      <div className="top-container">
        <h1 className={barlowCondensed.className}>
          <span>01</span>Pick your destination
        </h1>
        <div className="planet-image-container">
          <Image src={data.planetImg} alt="planet-img" />
        </div>
      </div>
      <div className="right-container">
        <div className="destin-btns-container">
          <ul className={barlowCondensed.className}>
            <li>
              <input
                type="checkbox"
                checked={selected.moon}
                name="desti-planet"
              ></input>
              <p onClick={destiChanged}>moon</p>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selected.mars}
                name="desti-planet"
              ></input>
              <p onClick={destiChanged}>mars</p>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selected.europa}
                name="desti-planet"
              ></input>
              <p onClick={destiChanged}>europa</p>
            </li>
            <li>
              <input
                type="checkbox"
                checked={selected.titan}
                name="desti-planet"
              ></input>
              <p onClick={destiChanged}>titan</p>
            </li>
          </ul>
        </div>
        <div className="middle-container">
          <h1 className={bellefair.className}>{data.name}</h1>
          <p className={barlow.className}>{data.para}</p>
        </div>
        <br />
        <div className="bottom-conatiner">
          <div className="bottom-distance bottom-common">
            <h4 className={barlowCondensed.className}>avg. distance</h4>
            <h2 className={bellefair.className}>{data.distance}</h2>
          </div>
          <div className="bottom-time bottom-common">
            <h4 className={barlowCondensed.className}>est. travel time</h4>
            <h2 className={bellefair.className}>{data.travelTime}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
