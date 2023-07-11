"use client";
import React, { useRef, useEffect, useState, useContext } from "react";
import Contributors from "./Contributors";
import LogoDetail from "./LogoDetai";

import { PanelContext, GOD } from "@/constants";
import "animate.css";

export default function Overlay({ ...props }: {}) {
  const planets = 316;
  const { sponsor } = useContext(PanelContext);

  const [active, setActive] = useState(sponsor !== GOD);
  const [activeContributors, setActiveContributors] = useState(false);
  const ref = useRef(null!);

  useEffect(() => {
    setActive(sponsor !== GOD);
    setActiveContributors(false);
  }, [sponsor]);

  const handleClickOutside = (e: any) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
      setActiveContributors(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="select-none">

      <div
        className="overlay upperLeft transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
        DF ARES V0.1
        <br />
        ROUND 1

        <br />

        <br />

        Dark Forest
        <br/>
          
        Community Round
      </div>
      
      <div
        className="overlay upperRight transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster z-50"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
         <a href="https://discord.gg/f3FrFA4T25" target="_blank">
          DISCORD
        </a>
        <br />

        <a href="https://twitter.com/DFArchon" target="_blank">
          TWITTER
        </a>
        <br />
      
        <a href="https://github.com/dfarchon" target="_blank">
          GITHUB
        </a>

        <br />

        

       
        {/* <a href="#" onClick={() => setActiveContributors(!activeContributors)}>
          Contributors
        </a>
        <Contributors active={activeContributors} /> */}
      </div>
      <div
        className="overlay lowerLeft transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
        {/* <h1>{planets}</h1> */}
        <h1> 1024</h1>
        <h2>Planets Conquered</h2>

      
      </div>
      <div
        className="overlay lowerRight transition-all duration-500 ease-in-out  z-30"
        ref={ref}
      >
        <LogoDetail
          active={active}
          setActive={(active: boolean) => {
            setActive(active);
            active && setActiveContributors(false);
          }}
        />
      </div>
    </div>
  );
}
