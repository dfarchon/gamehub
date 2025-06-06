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



export const DFArchon: GameProject = {
  name: "DFArchon",
  desc: "DFArchon is a community dedicated to the pursuit of onchain reality, composed of enthusiasts passionate about emerging technologies.",
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
  chain: "EVM",
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
  chain: "EVM",
};

export const GrugsLair: GameProject = {
  name: "Grug's Lair",
  desc: "The next level of Onchain gaming. Built for players, driven by players.",
  logo: "/images/2025-project-logo/GrugsLair.jpg",
  twitter: "https://x.com/GrugsLair",
  discord: "https://discord.gg/Aa43XBgYvh",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/GrugsLair");
  },
  projectType: 'team',
  chain: "",
};

export const Blobarena: GameProject = {
  name: "Blobarena",
  desc: "Blob Arena is here! 🏟️ ⚔️ On-chain blob-battles ",
  logo: "/images/2025-project-logo/Blobarena.png",
  twitter: "https://x.com/BlobArena",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/BlobArena");
  },
  projectType: 'game',
  chain: "Starknet",
};

export const RRisingRevenant: GameProject = {
  name: "Rising Revenant",
  desc: "Tactical fully Onchain game.",
  logo: "/images/2025-project-logo/RRisingRevenant.jpg",
  twitter: "https://x.com/RRisingRevenant",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/RRisingRevenant");
  },
  projectType: 'game',
  chain: "Starknet",
};

export const zKorp: GameProject = {
  name: "zKorp",
  desc: "Onchain game studio deploying games on Starknet from ProvableMat, Cheelax and Crowsmos",
  logo: "/images/2025-project-logo/zKorp.jpg",
  twitter: "https://x.com/zKorp_",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/zKorp_");
  },
  projectType: 'team',
  chain: "Starknet",
};

export const ForcePrime: GameProject = {
  name: "Force Prime",
  desc: "Onchain strategy game. ALL13 @alliancedao.",
  logo: "/images/2025-project-logo/ForcePrime_io.jpg",
  twitter: "https://x.com/forceprime_io",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://forceprime.io/");
  },
  projectType: 'game',
  chain: "Starknet",
};

export const FOCGERS: GameProject = {
  name: "FOCGERS UNITE",
  desc: "Fully onchain games. That's what it's all about. Ready to get FOCGed? 👉 👈",
  logo: "/images/2025-project-logo/FOCGERS.jpg",
  twitter: "https://x.com/FOCGERS",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://pods.media/focgers");
  },
  projectType: 'team',
  chain: "",
};

export const ponzidotland: GameProject = {
  name: "ponzi.land",
  desc: "No token launched | Get rugged",
  logo: "/images/2025-project-logo/ponzidotland.jpg",
  twitter: "https://x.com/ponzidotland",
  discord: "discord.gg/ponziland",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://ponzi.land/");
  },
  projectType: 'game',
  chain: "Starknet",
};


export const ArchetypalTech: GameProject = {
  name: "Archetypal Tech",
  desc: "Creators of @OrugginTrail, prototyping #FOCG in @ohayo_dojo, @mud_dev, & @WorldEngineGG + building #AW UGC platforms on @starknet @fluentxyz & @CelestiaOrg",
  logo: "/images/2025-project-logo/archetypaltech.jpg",
  twitter: "https://x.com/archetypaltech",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/archetypaltech");
  },
  projectType: 'team',
  chain: "",
};


export const CaravanaStudio: GameProject = {
  name: "Caravana Studio",
  desc: "Game Studio building crypto native games on @Starknet | @JokersOfNeon and @0xStarkane",
  logo: "/images/2025-project-logo/caravana_studio.jpg",
  twitter: "https://x.com/caravana_studio",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/caravana_studio");
  },
  projectType: 'team',
  chain: "Starknet",
};

export const JokersOfNeon: GameProject = {
  name: "Jokers of Neon",
  desc: "A roguelike card game where every hand counts. Build your deck, beat challenges, climb the leaderboard.",
  logo: "/images/2025-project-logo/jokers_of_neon.jpg",
  twitter: "https://x.com/jokers_of_neon",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://jokersofneon.com");
  },
  projectType: 'game',
  chain: "Starknet",
};

export const Pistols_gg: GameProject = {
  name: "Pistols at Dawn",
  desc: "0 paces, one shot. Whether you are duelling for honour or vengeance, be sure to put the bastard in the dirt. ",
  logo: "/images/2025-project-logo/Pistols_gg.jpg",
  twitter: "https://x.com/Pistols_gg",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/Pistols_gg");
  },
  projectType: 'team',
  chain: "Starknet",
};

export const Underware: GameProject = {
  name: "Underware",
  desc: "A game studio building on-chain games and autonomous worlds.",
  logo: "/images/2025-project-logo/underware_gg.jpg",
  twitter: "https://x.com/underware_gg",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://underware.gg");
  },
  projectType: 'team',
  chain: "Starknet",
};

export const provablegames: GameProject = {
  name: "Provable Games",
  desc: "making blockchains fun.",
  logo: "/images/2025-project-logo/provablegames.jpg",
  twitter: "https://x.com/provablegames",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://provable.games/");
  },
  projectType: 'team',
  chain: "Starknet",
};

export const LootSurvivor: GameProject = {
  name: "Loot Survivor",
  desc: "A fully onchain arcade dungeon crawler built on Starknet. Explore dynamically generated dungeons while you fight for your life against beasts and obstacles.",
  logo: "/images/2025-project-logo/LootSurvivor.png",
  twitter: "https://x.com/lootsurvivor",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://lootsurvivor.io/");
  },
  projectType: 'game',
  chain: "Starknet",
};

export const darkshuffle_gg: GameProject = {
  name: "Dark Shuffle",
  desc: "Fully onchain deck-building game.",
  logo: "/images/2025-project-logo/darkshuffle_gg.png",
  twitter: "https://x.com/darkshuffle_gg",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://darkshuffle.io/");
  },
  projectType: 'game',
  chain: "Starknet",
};

export const budokan_gg: GameProject = {
  name: "budokan_gg",
  desc: "the onchain gaming arena.",
  logo: "/images/2025-project-logo/budokan_gg.jpg",
  twitter: "https://x.com/budokan_gg",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://budokan.gg/");
  },
  projectType: 'infra',
  chain: "Starknet",
};

export const evolute_studio: GameProject = {
  name: "Evolute",
  desc: "Indie Game Studio. Pixel, mobile, decentralized 🤖🎮",
  logo: "/images/2025-project-logo/evolute_studio.png",
  twitter: "https://x.com/evolute_studio",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://x.com/evolute_studio");
  },
  projectType: 'team',
  chain: "Starknet",
};


export const ByteBeasts: GameProject = {
  name: "ByteBeasts",
  desc: "We are building the first interconnected on-chain games franchise.",
  logo: "/images/2025-project-logo/0xByteBeasts.jpg",
  twitter: "https://x.com/0xbytebeasts",
  discord: "",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://www.babybeasts.games/");
  },
  projectType: 'team',
  chain: "Starknet",
};

export const PopCraft: GameProject = {
  name: "PopCraft",
  desc: "PopCraft is a fully onchain casual match game — the FOCG with the highest potential for composability, turning cross-app composability into more than just a meme!",
  logo: "/images/2025-project-logo/PopCraft.jpg",
  twitter: "https://x.com/PopCraftOnChain",
  discord: "https://t.me/PopCraftOnChain",
  github: "https://github.com/themetacat/popcraft",
  blog: "https://mirror.xyz/0x7709f04439b59e8A25a35A64C69f5e481266AD17",
  docs: "",
  color: "yellow",
  handleClick: () => {
    window.open("https://popcraft.pixelaw.xyz/");
  },
  projectType: 'game',
  chain: "EVM",
};

export const Conquest: GameProject = {
  name: "Conquest.eth",
  desc: "A permission-less and persistent game of diplomacy",
  logo: "/images/2025-project-logo/conquest.jpg",
  twitter: "https://x.com/conquest_eth",
  discord: "https://discord.com/invite/Qb4gr2ekfr",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://conquest.game/");
  },
  projectType: 'game',
  chain: "EVM",
};

export const BattleForBlockchain: GameProject = {
  name: "Battle for Blockchain",
  desc: " Fully onchain strategy game with stakes, building with initia.",
  logo: "/images/2025-project-logo/battleforblock.png",
  twitter: "https://x.com/battleforblock",
  discord: "https://discord.com/invite/battleforblockchain",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("https://battleforblockchain.com/");
  },
  projectType: 'game',
  chain: "EVM",
};

export const Kamigochi: GameProject = {
  name: "Kamigotchi",
  desc: "❤︎ an onchain universe, by @asph0d37.minting soon on mainnet ❤︎",
  logo: "/images/2025-project-logo/kamigotchi.png",
  twitter: "https://x.com/kamigotchiworld",
  discord: "https://discord.com/invite/GYVgWRmqNH",
  github: "",
  blog: "",
  docs: "",
  color: "#43f771",
  handleClick: () => {
    window.open("https://app.kamigotchi.io");
  },
  projectType: 'game',
  chain: "EVM",
};

export const Eternum: GameProject = {
  name: "Eternum",
  desc: "Multiplayer Civilization with a real economy that never sleeps, Eternum is an AI-agent infused fully onchain MMO.",
  logo: "/images/2025-project-logo/Eternum.png",
  twitter: "https://x.com/RealmsEternum",
  discord: "https://discord.com/invite/realmsworld",
  github: "",
  blog: "",
  docs: "",
  color: "white",
  handleClick: () => {
    window.open("Eternum.Realms.World");
  },
  projectType: 'game',
  chain: "Starknet",
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
  GrugsLair,
  Blobarena,
  RRisingRevenant,
  zKorp,
  ForcePrime,
  FOCGERS,
  ponzidotland,
  ArchetypalTech,
  CaravanaStudio,
  JokersOfNeon,
  Pistols_gg,
  Underware,
  provablegames,
  LootSurvivor,
  darkshuffle_gg,
  budokan_gg,
  evolute_studio,
  ByteBeasts,
  PopCraft,
  Conquest,
  BattleForBlockchain,
  Kamigochi,
  Eternum
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
