import { createContext } from "react";

export const DARKFOREST = {
  name: "Dark Forest",
  desc: "Dark Forest is an MMO strategy game built with zkSNARKs on Gnosis Chain (formerly xDai). \
  Players explore an infinite, procedurally-generated universe, conquering planets and growing a space empire.",
  logo: "/images/worldlogo/DF.png",
  color: "#06fc1a",
  twitter: "https://twitter.com/darkforest_eth",
  discord: "https://discord.com/invite/2u2TN6v8r6",
  github: "https://github.com/darkforest-eth",
  blog: "https://blog.zkga.me/",
  docs: "https://dev-guides.zkga.me/",
  handleClick: () => {
    window.open("https://zkga.me");
  },
};

export const DFArchon = {
  name: "DF Archon",
  desc: "DF Archon is a development team focused on fully on-chain game, \
    working on a more user-friendly gaming environment. \
    In Dark Forest ecosystem, we've built quite a few of cool projects: \
    DF GAIA,\
    DF ARTEMIS , DF APOLLO.\
   We also pay close attention to other on-chain game projects or teams, \
    prepare to work on top of those projects as well.",
  logo: "/images/worldlogo/DFArchon.png",
  color: "#fee763",
  handleClick: () => {
    window.open("https://dfarchon.xyz/");
  },
};

export const WORLDS_ONE = [];


export const WORLDS_THREE = [
  {
    name: "Dark Forest ARES v0.1.3",
    desc: "Dark Forest ARES v0.1.1 is based on the code of Dark Forest v0.6.5, \
    exploring more fun MMORTS mechanics by adding magic artifacts. \n \
    Dark Forest ARES are Dark Forest\
   Community Rounds hosted by DF Archon.",
    logo: "/images/worldlogo/DFARES.png",
    color: "#feae34",
    twitter: "https://twitter.com/DFArchon",
    discord: "https://discord.com/invite/XpBPEnsvgX",
    github: "https://github.com/dfarchon/DFARES-v0.1",
    blog: "https://mirror.xyz/dfarchon.eth",
    docs: "",
    handleClick: () => {
      window.open("https://dfares-redstone.netlify.app/", "_blank");
    },
  },
  {
    name: "Sky Strife",
    desc: "The fully onchain real-time strategy game. \n \
    Running public weekly playtests in Discord on Fridays at 3:30pm GMT. \n \
     It is built on MUD by Lattice.",
    logo: "/images/worldlogo/SkyStrife.png",
    twitter: "https://twitter.com/skystrifeHQ",
    discord: "https://discord.com/invite/latticexyz",
    github: "https://github.com/latticexyz/sky-strife-league",
    blog: "https://lattice.xyz/blog",
    docs: "https://latticexyz.notion.site/How-to-play-Sky-Strife-8c9f951c605e487cad9e8158bc641835?pvs=4}",
    color: "#c3c8d0",
    handleClick: () => {
      window.open("https://playtest.skystrife.xyz/");
    },
  },

  {
    name: "Primodium",
    desc: "Introducing Primodium v0.8 of the fully onchain factory sim! \n\
    - Make onchain Alliances with teammates \n\
    - Hide resources in vaults from raids \n\
    - Build giant shield generators \n\
    - Blow up asteroids...\n\
    …and much more in this update! ",
    logo: "/images/worldlogo/Primodium.png",
    twitter: "https://twitter.com/primodiumgame",
    discord: "https://discord.com/invite/bn7eSSKFWV",
    github: "",
    blog: "",
    docs: "",
    color: "#62d1d8",
    handleClick: () => {
      window.open("https://primodium.com");
    },
  },

  {
    name: "LootSurvivor",
    desc: "A roguelike, survival fully onchain game built on Starknet. \n \
    Built by Bibliotheca DAO contributors and @LootRealms community. ",
    logo: "/images/worldlogo/LootSurvivor.png",
    twitter: "https://twitter.com/survivor_bot_69",
    github: "https://github.com/BibliothecaDAO/loot-survivor",
    discord: "https://discord.com/invite/realmsworld",
    blog: "",
    docs: "https://survivor-docs.realms.world/",
    color: "#4af626",
    handleClick: () => {
      window.open("https://survivor.realms.world/");
    },
  },

  {
    name: "Realms: Eternum",
    desc: "Eternum is a strategy game that is built on StarkNet.\
     It is a game of management and conquest, where players must build and defend their Realm to thrive.\
      The game is governed by a set of rules that are enforced by the game's smart contracts. ",
    logo: "/images/worldlogo/Eternum.png",
    twitter: "https://twitter.com/LootRealms",
    discord: "https://discord.com/invite/realmsworld",
    github: "https://github.com/BibliothecaDAO/eternum",
    blog: "",
    docs: "",

    color: "white",
    handleClick: () => {
      window.open("https://eternum.realms.world/");
    },
  },

  {
    name: "PixeLAW",
    desc: "PixeLAW is a pixel-based Autonomous World built on Starknet using dojo engine ",
    logo: "/images/worldlogo/PixeLAW.png",
    twitter: "https://twitter.com/0xPixeLAW",
    discord: "https://discord.com/invite/aeYzsHxAZb",
    github: "https://github.com/pixelaw/",
    blog: "",
    docs: "https://pixelaw.github.io/book/",

    color: "white",
    handleClick: () => {
      window.open("https://pixelaw.github.io/book/");
    },
  },
];

export const WORLDS_TWO = [];

export const WORLDS_FOUR = [];

export const SPONSORS_FOUR = [];

export const CONTRIBUTORS = [
  {
    name: "Tatokoro",
    avatar: "/images/tatokoro.png",
    twitter: "",
  },
];

export const PanelContext = createContext<{
  world: typeof DARKFOREST;
  setWorld: (world: typeof DARKFOREST) => void;
  hoverPlanet: boolean;
  setHoverPlanet: (status: boolean) => void;
  globalTime: number;
  setGlobalTime: (time: number) => void;
}>({
  world: DARKFOREST,
  setWorld: () => {},
  hoverPlanet: false,
  setHoverPlanet: () => {},
  globalTime: 0,
  setGlobalTime: () => {},
});
