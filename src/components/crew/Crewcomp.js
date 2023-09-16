"use client";
import React from "react";
import Image from "next/image";
import crewData from "./crewData";
import "./crewcomp.css";
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

export default function Crewcomp() {
  function crewHandle() {
    let crewNav = document.querySelector(".crew");
    crewNav.checked = true;
  }
  React.useEffect(() => {
    crewHandle();
  }, []);
  let [selected, setSelected] = React.useState({
    crew1: true,
    crew2: false,
    crew3: false,
    crew4: false,
  });
  let [data, setData] = React.useState(crewData[0]);
  function crewChanged(e) {
    setSelected({
      crew1: false,
      crew2: false,
      crew3: false,
      crew4: false,
      [e.target.className]: true,
    });
    switch (e.target.className) {
      case "crew1":
        setData(crewData[0]);
        break;
      case "crew2":
        setData(crewData[1]);
        break;
      case "crew3":
        setData(crewData[2]);
        break;
      case "crew4":
        setData(crewData[3]);
        break;
    }
  }

  // function switchCrew() {
  //   if (selected.crew1) {
  //     setSelected({ crew1: false, crew2: true, crew3: false, crew4: false });
  //     setData(crewData[1]);
  //   }
  //   if (selected.crew2) {
  //     setSelected({ crew1: false, crew2: false, crew3: true, crew4: false });
  //     setData(crewData[2]);
  //   }
  //   if (selected.crew3) {
  //     setSelected({ crew1: false, crew2: false, crew3: false, crew4: true });
  //     setData(crewData[3]);
  //   }
  //   if (selected.crew4) {
  //     setSelected({ crew1: true, crew2: false, crew3: false, crew4: false });
  //     setData(crewData[0]);
  //   }
  // }
  return (
    <div className="crew-total-content-crew">
      <div className="crew-desktop-left">
        <h1 className={barlowCondensed.className}>
          <span>02</span>Meet your crew
        </h1>
        <div className="crew-top-container">
          <div className="crew-image-container">
            <Image src={data.crewImg} alt="crew-img" />
          </div>
        </div>
        <div className="crew-btns-container">
          <ul className={barlowCondensed.className}>
            <li>
              <input type="checkbox" checked={selected.crew1}></input>
              <p className="crew1" onClick={crewChanged}></p>
            </li>
            <li>
              <input type="checkbox" checked={selected.crew2}></input>
              <p className="crew2" onClick={crewChanged}></p>
            </li>
            <li>
              <input type="checkbox" checked={selected.crew3}></input>
              <p className="crew3" onClick={crewChanged}></p>
            </li>
            <li>
              <input type="checkbox" checked={selected.crew4}></input>
              <p className="crew4" onClick={crewChanged}></p>
            </li>
          </ul>
        </div>
        <div className="crew-text-container">
          <h4 className={barlowCondensed.className}>{data.designation}</h4>
          <h1 className={bellefair.className}>{data.name}</h1>
          <p className={barlow.className}>{data.para}</p>
        </div>
      </div>
      <div className="crew-right-container">
        <div className="crew-image-container">
          <Image src={data.crewImg} alt="crew-img" />
        </div>
      </div>
    </div>
  );
}
