"use client";
import BgCarousel from "@/components/BgCarousel";
import Overlay from "@/components/Overlay";
import { Suspense, createContext, useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";


import { PanelContext, DARKFOREST, DF_MUD_V3 } from "@/constants";

export default function Home() {
  const [world, setWorld] = useState(DF_MUD_V3);
  const [hoverPlanet, setHoverPlanet] = useState(false);
  const [globalTime, setGlobalTime] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple delay to ensure components are fully loaded
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#212121]">
      <header className="text-white text-center py-6 z-50 relative" style={{ backgroundColor: '#ffc0cb' }}>
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

      <div className="h-[calc(100vh-4rem)] relative bg-[#212121]">
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </div>
  );
}

const Loader = () => {
  const { progress } = useProgress();
  const [simulatedProgress, setSimulatedProgress] = useState(0);

  // Simulate loading progress from 0 to 100%
  useEffect(() => {
    // Start with faster progress, then slow down as we approach 100%
    const interval = setInterval(() => {
      setSimulatedProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        // Progress faster at the beginning, slower near the end
        const increment = prev < 70 ? 3 : (prev < 90 ? 1 : 0.5);
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Use the larger of actual or simulated progress
  const displayProgress = Math.max(simulatedProgress, progress);

  return (
    <div className="absolute inset-0 bg-[#212121] flex items-center justify-center w-full h-full z-30">
      <div className="loader-container flex flex-col items-center justify-center p-8 rounded-lg bg-black/30 backdrop-blur-md">
        <div className="w-24 h-24 mb-6 border-4 border-t-transparent border-[#ffc0cb] rounded-full animate-spin"></div>
        <div className="text-[#ffc0cb] text-2xl font-bold mb-4">Loading Game Hub</div>
        <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-[#ffc0cb] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.max(5, displayProgress)}%` }}
          ></div>
        </div>
        <div className="text-white/70 text-sm">{Math.round(displayProgress)}% Complete</div>
      </div>
    </div>
  );
};
