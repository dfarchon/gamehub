"use client";
import React, { useRef, useEffect, useState, useContext } from "react";
import Contributors from "./Contributors";
import LogoDetail from "./LogoDetail";

import { PanelContext, DARKFOREST,GOD } from "@/constants";
import "animate.css";

export default function Overlay({ ...props }: {}) {
  const planets = 316;
  const { world } = useContext(PanelContext);

  const [active, setActive] = useState(world !== GOD);
  const [activeContributors, setActiveContributors] = useState(false);
  const ref = useRef(null!);

  useEffect(() => {
    setActive(world !== GOD);
    setActiveContributors(false);
  }, [world]);

  const handleClickOutside = (e: any) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
      setActiveContributors(false);
    }
  };

  // useEffect(() => {
  //   // Bind the event listener
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);

  return (
    <div className="select-none">

      <div
        className="overlay upperLeft transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster"
        style={{
          color: world.color ?? "#cd5c5c",
          fontSize: "50px"
        }}
      >

        Enter latest FOCGs 
        <br></br>with one click
        
      </div>
      
      <div
        className="overlay upperRight transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster z-50"
        style={{
          color: world.color ?? "#cd5c5c",
        }}
      >

          {
          world.twitter!==''? 
            <div> <a href={world.twitter?? ""} target="_blank">
              TWITTER
              </a>
              <br />
             <br /></div>:<div></div>
          }


          {
          world.discord!==''? 
            <div> <a href={world.discord?? ""} target="_blank">
              DISCORD
              </a>
              <br />
             <br /></div>:<div></div>
          }

          {
          world.github!==''? 
            <div> <a href={world.github?? ""} target="_blank">
              GITHUB
              </a>
              <br />
             <br /></div>:<div></div>
          }
     {
          world.docs!==''? 
            <div> <a href={world.docs?? ""} target="_blank">
              DOCS
              </a>
              <br />
             <br /></div>:<div></div>
          }

   
       
          {
          world.blog!==''? 
            <div> <a href={world.blog?? ""} target="_blank">
              BLOG
              </a>
              <br />
             <br /></div>:<div></div>
          }
       
        {/* <a href="#" onClick={() => setActiveContributors(!activeContributors)}>
          Contributors
        </a>
        <Contributors active={activeContributors} /> */}
      </div>
      <div
        className="overlay lowerLeft transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster"
        style={{
          color: world.color ?? "#cd5c5c",
        }}
      >
        {/* <h1>{planets}</h1> */}
        <h1 style={{fontSize:"100px"}}> FOCG </h1>
        <h1 style={{fontSize:"80px"}}> Rabbit Hole </h1>
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

      <div className="overlay upperCenter transition-all duration-500 ease-in-out  z-30"  
      style={{
          color: world.color ?? "#cd5c5c",
           
        }}><a href={"https://github.com/dfarchon/FOCG-Rabbit-Hole"} target="_blank">
        Open source Repo is here
        </a> </div>
    </div>
  );
}
