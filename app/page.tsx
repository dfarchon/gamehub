"use client";
import React, { useState, Suspense, useEffect } from "react";
import BgCarousel from "@/components/BgCarousel";
import Overlay from "@/components/Overlay";
import { DF_MUD_V3, DFArchon, DARKFOREST, PanelContext } from "@/constants";
import { useProgress } from "@react-three/drei";

export default function Home() {
  const [world, setWorld] = useState(DF_MUD_V3);
  const [hoverPlanet, setHoverPlanet] = useState(false);
  const [globalTime, setGlobalTime] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#212121]">
      <header className="text-white text-center py-6 z-50 relative" style={{ backgroundColor: '#ffc0cb' }}>
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/dfarchon/gamehub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 rounded"
            style={{
              color: '#ffc0cb',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Make pull request to add your project
          </a>
          <a
            href="https://twitter.com/intent/follow?screen_name=dfarchon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 rounded flex items-center gap-2"
            style={{
              color: '#ffc0cb',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="pink">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </svg>
            Follow DFArchon
          </a>
        </div>
      </header>

      <div className="h-[calc(100vh-4rem)] relative bg-[#212121]">

        {showLoading ?
          <Loader />
          :
          <Suspense fallback={<Loader />}>
            <PanelContext.Provider
              value={{
                world,
                setWorld: (data) => {
                  setWorld(data);
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
              <main className="h-full">
                <BgCarousel />
                <Overlay />
              </main>
            </PanelContext.Provider>
          </Suspense>
        }
      </div>
    </div >
  );
}

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log(active, progress, loaded, total);
  return (
    <div className="bg-[#212121] flex w-full h-full">
      <div className="loader mx-auto my-auto">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};



