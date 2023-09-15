"use client";
import React from "react";
import Link from "next/link";
import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";
import "./page.css";

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

export default function Home() {
  function exploreHandle() {
    let destinationNav = document.querySelector(".destination");
    destinationNav.checked = true;
  }
  function homeHandle() {
    let destinationNav = document.querySelector(".home");
    destinationNav.checked = true;
  }
  React.useEffect(() => {
    homeHandle();
  }, []);
  return (
    <div className="total-content-home">
      <div className="home-text-container">
        <h6 className={`${barlowCondensed.className}`}>
          So you want to travel to
        </h6>
        <h1 className={`${bellefair.className}`}>SPACE</h1>
        <p className={`${barlow.className}`}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        onClick={exploreHandle}
        href="/destination"
        className={`${bellefair.className} explore-container`}
      >
        Explore
      </Link>
    </div>
  );
}
