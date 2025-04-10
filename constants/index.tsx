import { createContext } from "react";

// Define a type for game projects
export type GameProject = {
  name: string;
  desc: string;
  logo: string;
  color: string;
  twitter?: string;
  discord?: string;
  github?: string;
  blog?: string;
  docs?: string;
  handleClick?: () => void;
  projectType: 'team' | 'infra' | 'game';
  chain: string;
};

// =====================================================================
// Game Projects Definitions
// =====================================================================

export const DARKFOREST: GameProject = {
  name: "Dark Forest",
  desc: "Dark Forest is an MMO strategy game built with zkSNARKs on Gnosis Chain (formerly xDai). \
  Players explore an infinite, procedurally-generated universe, conquering planets and growing a space empire.",
  logo: "/images/gamelogo/DF.png",
  color: "#06fc1a",
  twitter: "https://twitter.com/darkforest_eth",
  discord: "https://discord.com/invite/2u2TN6v8r6",
  github: "https://github.com/darkforest-eth",
  blog: "https://blog.zkga.me/",
  docs: "https://dev-guides.zkga.me/",
  handleClick: () => {
    window.open("https://zkga.me");
  },
  projectType: 'game',
  chain: "Gnosis Chain",
};

export const DFArchon2: GameProject = {
  name: "DF Archon",
  desc: "DF Archon is a development team focused on fully onchain game, \
  working on a more user-friendly gaming environment.",
  logo: "/images/gamelogo/DFArchon.png",
  color: "pink",
  handleClick: () => {
    window.open("https://dfarchon.xyz/");
  },
  projectType: 'team',
  chain: "",
};

export const DFArchon: GameProject = {
  name: "DFArchon",
  desc: "DF Archon is a development team focused on fully onchain game, \
  working on a more user-friendly gaming environment.",
  logo: "/images/2025-project-logo/dfarchon.jpg",
  color: "pink",
  twitter: "https://twitter.com/dfarchon",
  discord: "https://discord.gg/XpBPEnsvgX",
  github: "https://github.com/dfarchon",
  blog: "",
  docs: "",
  handleClick: () => {
    window.open("https://twitter.com/dfarchon");
  },
  projectType: 'team',
  chain: "",
};

export const DF_MUD_V3: GameProject = {
  name: "Dark Forest MUD v3",
  desc: "Decentralized, space-themed RTS built on MUD & zkSNARKs. \n \
  Dark Foret community round. \n \
  Onchain reality universe begins here",
  logo: "/images/2025-project-logo/dfmud.jpg",
  color: "pink",
  twitter: "https://twitter.com/darkforest_mud",
  discord: "https://discord.gg/XpBPEnsvgX",
  github: "https://github.com/dfarchon/darkforest-mud",
  blog: "",
  docs: "",
  handleClick: () => {
    window.open("https://dfmud.xyz");
  },
  projectType: 'game',
  chain: "EVM",
};

export const MovingCastles: GameProject = {
  name: "Moving Castles",
  desc: "post-brainrot gaming moguls.",
  logo: "/images/2025-project-logo/movingcastles.png",
  twitter: "https://x.com/movingcastles_",
  discord: "",
  github: "https://github.com/Moving-Castles",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/movingcastles_");
  },
  projectType: 'team',
  chain: "",
};



// =====================================================================
// Game Group Definitions
// =====================================================================

// Group One Games (currently empty)
export const GAMES_ONE = [];

// Group Two Games (currently empty)
export const GAMES_TWO = [];

// Group Three Games (main display)
export const GAMES_THREE = [
  DFArchon,
  DF_MUD_V3,
  MovingCastles,

];

// Group Four Games (currently empty)
export const GAMES_FOUR = [];

// Sponsors (currently empty)
export const SPONSORS_FOUR = [];

// =====================================================================
// Contributors Definition
// =====================================================================

export const CONTRIBUTORS = [
  {
    name: "Tatokoro",
    avatar: "/images/tatokoro.png",
    twitter: "",
  },
];

// =====================================================================
// Global Context Definition
// =====================================================================

export const PanelContext = createContext<{
  world: typeof DARKFOREST;
  setWorld: (world: typeof DARKFOREST) => void;
  hoverPlanet: boolean;
  setHoverPlanet: (status: boolean) => void;
  globalTime: number;
  setGlobalTime: (time: number) => void;
}>({
  world: DARKFOREST,
  setWorld: () => { },
  hoverPlanet: false,
  setHoverPlanet: () => { },
  globalTime: 0,
  setGlobalTime: () => { },
});
