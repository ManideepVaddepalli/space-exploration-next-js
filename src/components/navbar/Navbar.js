"use client";
import React from "react";
import Link from "next/link";
import "./navbar.css";
import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";

import Image from "next/image";
import logoImage from "../../Images/icon.png";
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Navbar() {
  let [checked, setChecked] = React.useState("false");
  function handleClick() {
    const navMenu = document.getElementById("mobile-nav-menu");
    setChecked(!checked);
    if (checked) {
      navMenu.style.transform = "translate(0vw)";
    } else {
      navMenu.style.transform = "translate(70vw)";
    }
  }
  function radioHandle(e) {
    e.target.previousSibling.checked = true;
  }
  function homeHandle() {
    let destinationNav = document.querySelector(".home");
    destinationNav.checked = true;
  }
  return (
    <header className="total-content-nav">
      <div className="logo-image-container">
        <Link href="/">
          <Image onClick={homeHandle} src={logoImage} alt="logo" />
        </Link>
      </div>
      <div className="desktop-line"></div>
      <div className="nav-button-conatiner">
        <div className="nav-button">
          <input
            onClick={handleClick}
            className="nav-button-input"
            type="checkbox"
          ></input>
          <span className="first-line line"></span>
          <span className="second-line line"></span>
          <span className="third-line line"></span>
        </div>
      </div>
      <nav className="desktop-nav">
        <ul className={barlowCondensed.className}>
          <li className="home-li">
            <input className="home" type="radio" name="navMenu"></input>
            <Link onClick={radioHandle} href="/">
              <span>00</span>Home
            </Link>
          </li>
          <li className="destination-li">
            <input className="destination" type="radio" name="navMenu"></input>
            <Link href="/destination" onClick={radioHandle}>
              <span>01</span>Destination
            </Link>
          </li>
          <li className="crew-li">
            <input className="crew" type="radio" name="navMenu"></input>
            <Link href="/crew" onClick={radioHandle}>
              <span>02</span>Crew
            </Link>
          </li>
          <li className="technology-li">
            <input className="technology" type="radio" name="navMenu"></input>
            <Link href="/technology" onClick={radioHandle}>
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="side-nav-menu" id="mobile-nav-menu">
        <ul className={barlowCondensed.className}>
          <li>
            <Link href="/">
              <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link href="/destination">
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
