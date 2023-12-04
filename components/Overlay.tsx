"use client";
import React, { useRef, useEffect, useState, useContext } from "react";
import Contributors from "./Contributors";
import LogoDetail from "./LogoDetai";

import { PanelContext, DARKFOREST,GOD } from "@/constants";
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

        {'DON\'T WORRY about gas fees'}
        <br />
        <br />

        {'DON\'T WORRY  about making money'}
        <br />
        <br />
               
        LIVING IN THE FUTURE

        
      </div>
      
      <div
        className="overlay upperRight transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster z-50"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
         <a href={sponsor.twitter?? ""} target="_blank">
          TWITTER
        </a>
        <br />
        <br />

        <a href={sponsor.discord?? ""} target="_blank">
          DISCORD
        </a>
        <br />
        <br />
        <a href={sponsor.github??""} target="_blank">
          GITHUB
        </a>
        <br />
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

        <h2 style={{fontSize:"80px"}}> Autonomous</h2>
        <h1>  Worlds </h1>
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
