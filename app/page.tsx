"use client";
import BgCarousel from "@/components/BgCarousel";
import Overlay from "@/components/Overlay";
import { Suspense, createContext, useState } from "react";
import { useProgress } from "@react-three/drei";


import { PanelContext, DARKFOREST, DF_MUD_V3 } from "@/constants";

export default function Home() {
  const [world, setWorld] = useState(DF_MUD_V3);
  const [hoverPlanet, setHoverPlanet] = useState(false);
  const [globalTime, setGlobalTime] = useState(0);

  return (
    <div className="h-screen  w-screen overflow-hidden">
      <header className="text-white text-center py-6" style={{ backgroundColor: '#ffc0cb' }}>
        <a
          href="https://github.com/dfarchon/gamehub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white px-6 py-3 rounded-full"
          style={{
            color: '#ffc0cb',
            transition: 'transform 0.3s',
          }}
        >
          Open Source Code
        </a>
      </header>


      <main className=" ">
        <Suspense fallback={<Loader />}>
          <PanelContext.Provider
            value={{
              world,
              setWorld: (data) => {
                setWorld(data);
                // setActive();
              },
              hoverPlanet,
              setHoverPlanet: (status) => {
                setHoverPlanet(status);
              },
              globalTime,
              setGlobalTime: (time) => {
                setGlobalTime(time);
              }
            }}
          >
            <BgCarousel />
            <Overlay />
          </PanelContext.Provider>
        </Suspense>
        {/* <Loader /> */}

        {/* <div className="h-32 w-full flex">
          
        </div> */}
      </main>
    </div>
  );
}

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  // console.log(active, progress, loaded, total);
  return (
    <div className="bg-[#212121]  flex w-full h-full">
      <div className="loader mx-auto my-auto">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};
