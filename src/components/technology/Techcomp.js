"use client";
import React from "react";
import Image from "next/image";
import techData from "./techData";
import "./techcomp.css";
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

export default function Techcomp() {
  function techHandle() {
    let techNav = document.querySelector(".technology");
    techNav.checked = true;
  }
  React.useEffect(() => {
    techHandle();
  }, []);
  let [selected, setSelected] = React.useState({
    tech1: true,
    tech2: false,
    tech3: false,
  });
  let [data, setData] = React.useState(techData[0]);
  function techChanged(e) {
    setSelected({
      tech1: false,
      tech2: false,
      tech3: false,

      [e.target.className]: true,
    });
    switch (e.target.className) {
      case "tech1":
        setData(techData[0]);
        break;
      case "tech2":
        setData(techData[1]);
        break;
      case "tech3":
        setData(techData[2]);
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
    <div className="tech-total-content-tech">
      <div className="tech-desktop-left">
        <h1 className={barlowCondensed.className}>
          <span>03</span>Space launch 101
        </h1>
        <div className="tech-top-container">
          <div className="tech-image-container">
            <Image src={data.techImg} alt="tech-img" />
          </div>
        </div>
        <div className="tech-btns-container">
          <ul className={bellefair.className}>
            <li>
              <input type="checkbox" checked={selected.tech1}></input>
              <p className="tech1" onClick={techChanged}>
                1
              </p>
            </li>
            <li>
              <input type="checkbox" checked={selected.tech2}></input>
              <p className="tech2" onClick={techChanged}>
                2
              </p>
            </li>
            <li>
              <input type="checkbox" checked={selected.tech3}></input>
              <p className="tech3" onClick={techChanged}>
                3
              </p>
            </li>
          </ul>
        </div>
        <div className="tech-text-container">
          <h4 className={barlowCondensed.className}>The Terminology...</h4>
          <h1 className={bellefair.className}>{data.name}</h1>
          <p className={barlow.className}>{data.para}</p>
        </div>
      </div>
      <div className="tech-right-container">
        <div className="tech-image-container">
          <Image src={data.techImg} alt="tech-img" />
        </div>
      </div>
    </div>
  );
}
