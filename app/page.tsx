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
