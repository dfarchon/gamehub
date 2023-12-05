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

export const GOD = {
  name: "God",
  desc: "GM everyone",
  logo: "data:image/png;base64,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",
  color: "#cd5c5c",
  handleClick: () => {},
};

export const WORLDS_ONE = [
  

];

export const WORLDS_TWO = [
  

  
];
export const WORLDS_THTEE = [


  {
    name: "Dark Forest",
    desc: "Dark Forest is an MMO strategy game built with zkSNARKs on Gnosis Chain (formerly xDai). \n \
    Players explore an infinite, procedurally-generated universe, conquering planets and growing a space empire.",
    logo: "/images/worldlogo/DF.png",
    color: "#06fc1a",
    twitter: "https://twitter.com/darkforest_eth",
    discord: "https://discord.com/invite/2u2TN6v8r6",
    github: "https://github.com/darkforest-eth",
    blog: "https://blog.zkga.me/",
    handleClick: () => {
      window.open("https://zkga.me");
    },
  },

  {
    name: "MUD",
    desc: " BATTLE-TESTED ONCHAIN FRAMEWORK FOR DEVELOPERS. \n\
    MUD provides you with the tools to build ambitious onchain applications. ",
    logo: "/images/worldlogo/MUD.png",
    twitter: 'https://twitter.com/latticexyz',
    discord: 'https://discord.com/invite/latticexyz',
    github: 'https://github.com/latticexyz/mud',
    blog: 'https://mud.dev/introduction',
   
    color: "#ff7513",
    handleClick: () => {
      window.open("https://mud.dev");
    },
  },


  {
    name: "Redstone",
    desc: " A SUPER COST-EFFECTIVE CHAIN FOR GAMES & WORLDS. \n\
    Redstone runs applications on an OP Stack chain optimized for games, autonomous worlds, and other ambitious onchain applications. \n\
    Built by Lattice. ",
    logo: "/images/worldlogo/Redstone.png",
    twitter: 'https://twitter.com/redstonexyz',
    discord: 'https://discord.com/invite/latticexyz',
    github: 'https://github.com/latticexyz/mud',
    blog: 'https://redstone.xyz/docs/what-is-redstone',
  
    color: "red",
    handleClick: () => {
      window.open("https://redstone.xyz/");
    },
  },


  {
    name: "OrdenGG",
    desc: "We are the orden, a professional on-chain esport team. \n \
           We won 3/4 of the last dark forest rounds.",
    logo: "/images/worldlogo/OrdenGG.png",
    twitter: 'https://twitter.com/orden_gg',
    discord: 'https://discord.com/invite/orden',
    github: 'https://github.com/orden-gg',
    blog: "",
    color: "#fff201",
    handleClick: () => {
      window.open("https://github.com/orden-gg");
    },
  },

  {
    name: "MarrowDAO | Guild W",
    desc: "Guild W is the first on-chain e-sports team, incubated by MarrowDAO. \n \
     The main members are Solidity developers, node operators, \n \
     blockchain game players and investment analysts. All of them are loyal players of the Dark Forest.",
    logo: "/images/worldlogo/MarrowDAO.png",
    twitter: "https://twitter.com/marrowdao",
    discord: "",
    github: "https://github.com/guild-w",
    blog: "https://buidl.mirror.xyz/",
    color: "#fff",
    handleClick: () => {
      window.open("https://github.com/guild-w");
    },
  },


  {
    name: "Dark Forest Arena",
    desc: "Dark Forest Arena is the first MOBA-style fully on-chain game. \n \
    It emphasizes action-packed gameplay in short, intense game rounds. \n \
    Dark Forest Arena is a modified version of Dark Forest maintained by DF DAO. ",
    logo: "/images/worldlogo/DFDAO.png",
    color: "#03ce95",
    twitter: "https://twitter.com/d_fdao",
    discord: "http://discord.gg/aaHada53mQ",
    github: "http://github.com/dfdao",
    blog: "https://medium.com/dfdao/latest",
    handleClick: () => {
      window.open(
        "https://arena.dfdao.xyz/",
        "_blank"
      );
    },
  },

  { 
    name: "Dark Forest ARES v0.1.1",
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
    handleClick: () => {
      window.open(
        "https://dfares-redstone.netlify.app/",
        "_blank"
      );
    },
  },

  {
    name: "277DAO",
    desc: "We, 277 DAO, are a Chinese community that provides technical support, strategy sharing and NFT rewards for blockchain game players.\
    In order to make players enjoy blockchain game better, we will often organize community rounds with great rewards for you to win.\
    We look forward to your joining us!",
    logo: "/images/worldlogo/277DAO.png",
    twitter: 'https://twitter.com/277dao_',
    discord: '',
    github: 'https://github.com/277dao',
    blog: 'https://mirror.xyz/277share.eth',
    color: "#c3c8d0",
    handleClick: () => {
      window.open("https://dfgame.277dao.com/");
    },
  },


  {
    name: "Sky Strife",
    desc: "The fully onchain real-time strategy game. \n \
    Running public weekly playtests in Discord on Fridays at 3:30pm GMT. \n \
     It is built on MUD by Lattice.",
    logo: "/images/worldlogo/SkyStrife.png",
    twitter: 'https://twitter.com/skystrifeHQ',
    discord: 'https://discord.com/invite/latticexyz',
    github: 'https://github.com/latticexyz/sky-strife-league',
    blog:'https://lattice.xyz/blog',
    color: "#c3c8d0",
    handleClick: () => {
      window.open("https://playtest.skystrife.xyz/");
    },
  },

  {
    name: "OPCraft",
    desc: "OPCraft is a fully on-chain 3D voxel world built on top of the OP Stack. \n  \
    It is built on MUD by Lattice.  ",
    logo: "/images/worldlogo/OPCraft.png",
    twitter: 'https://twitter.com/latticexyz',
    discord: 'https://discord.com/invite/latticexyz',
    github: 'https://github.com/latticexyz/opcraft',
    blog: 'https://lattice.xyz/blog',
    color: "red",
    handleClick: () => {
      window.open("https://craft.mud.dev/");
    },
  },
  {
    name: "NetherScape",
    desc: "on-chain game using MUD engine to build a permissionless, composable, and autonomous RPG world.",
    logo: "/images/worldlogo/NetherScape.png",
    twitter: 'https://twitter.com/netherscape_xyz',
    discord: '',
    github: 'https://github.com/BriefCandle/netherscape',
    blog: '',
    color: "#fff",
    handleClick: () => {
      window.open("https://twitter.com/netherscape_xyz");
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
    twitter: 'https://twitter.com/primodiumgame',
    discord: 'https://discord.com/invite/bn7eSSKFWV',
    blog: '',
    github: '',
    color: "#62d1d8",
    handleClick: () => {
      window.open("https://primodium.com");
    },
  },


  {
    name: "Dark Seas",
    desc: " Dark Seas is a turn-based MMO strategy game in which players maneuver ships and inflict cannon fire upon their enemies.\n \
    It demonstrates that we can craft on-chain games that are simple, fun, and harness blockchain affordances. \n \
    Built by 0xhank.",
    logo: "/images/worldlogo/DarkSeas.png",
    twitter: 'https://twitter.com/DarkSeasGame',
    discord: '',
    github: 'https://github.com/0xhank/dark-seas',
    blog: '',
    color: "#fff",
    handleClick: () => {
      window.open("https://darkseas.me/");
    },
  },



  {
    name: "Gaul",
    desc: "Build an eternal road into a wild land—get equipment, dig, slash, and pave mile after mile of treacherous terrain. \n\n\
    Gual built it on MUD. ",
    logo: "/images/worldlogo/Gual.png",
    twitter: 'https://twitter.com/engine_study',
    discord: 'https://discord.com/invite/nhpZ5Gsntk',
    github: '',
    color: "#fff",
    handleClick: () => {
      window.open("https://gaul.app/");
    },
  },

  {
    name: "ZKHunt",
    desc: " ZK Hunt is a prototype for an onchain game built on mud, which explores different ZK game mechanics and information asymmetry. ",
    logo: "/images/worldlogo/ZKHunt.png",
    twitter: 'https://twitter.com/0xPARC/status/1711698080788013547',
    discord: '',
    github: 'https://github.com/FlynnSC/zk-hunt',
    blog: 'https://0xparc.org/blog/zk-hunt',
    color: "#fff",
    handleClick: () => {
      window.open("https://network-states-smallbraingames.vercel.app/");
    },
  },

  {
    name: "THIS CURSED MACHINE",
    desc: "֍ THIS CURSED MACHINE ֎ \n\
    sci-fi body horror fulfilment center simulator \n \
    fully onchain - out November 2023 \n \
    playtest soon… \n \n \
    Moving Castles built it on MUD.",
    logo: "/images/worldlogo/MovingCastles.png",
    twitter: 'https://twitter.com/movingcastles_',
    discord: '',
    blog: 'https://movingcastles.world/',
    github: '',
    color: "#fff",
    handleClick: () => {
      window.open("https://www.words3.xyz/");
    },
  },



  {
    name: "Drawtech",
    desc: "Introducing Drawtech, the (first ever!) fully onchain mobile game. \
      Draw together on a shared canvas. Earn rewards...until you get drawn over. \n \
      Small Brain built it on MUD. \n\
    ",
    logo: "/images/worldlogo/Drawtech.png",
    twitter: 'https://twitter.com/0xsmallbrain',
    discord: 'https://github.com/smallbraingames/drawtech',
    github: '',
    blog: '',
    color: "#facd0e",
    handleClick: () => {
      window.open("https://www.draw.tech/");
    },
  },

  {
    name: "Word3",
    desc: "Introducing Words3, a cryptoeconomic crossword game on  @BuildOnBase.\
    In the game, you place letters on a grid to spell words. Each letter has a fluctuating price. Win (or lose) ETH based on your score.. \n\n \
    Small Brain built it on MUD.",
    logo: "/images/worldlogo/Word3.png",
    twitter: 'https://twitter.com/words3bot',
    discord: '',
    github: 'https://github.com/smallbraingames',
    blog: '',
    color: "#dae9fd",
    handleClick: () => {
      window.open("https://www.words3.xyz/");
    },
  },

  {
    name: "Network States",
    desc: " Network States is an upcoming on-chain strategy game, employing the MUD v2 engine. ",
    logo: "/images/worldlogo/NetworkStates.png",
    twitter: 'https://twitter.com/0xsmallbrain',
    discord: 'https://discord.com/invite/nhpZ5Gsntk',
    github: 'https://github.com/smallbraingames/network-states-lite',
    blog:'',
    color: "#fff",
    handleClick: () => {
      window.open("https://network-states-smallbraingames.vercel.app/");
    },
  },

  {
    name: "Nomos Network",
    desc: "Your Gateway to Mass Adoption \n \
    The next-generation modular L3/appchain framework",
    logo: "/images/worldlogo/Web3mq.png",
    twitter: 'https://twitter.com/Web3MQ',
    discord:'',
    github:'https://github.com/Generative-Labs',
    blog:'',
    color: "#9A26F9",
    handleClick: () => {
      window.open("//web3mq.com/");
    },
  },

  {
    name: "AW House",
    desc: "AW house is an Ecosystem for Autonomous World builders.",
    logo: "/images/logo/AWHouse.png",
    twitter:'https://twitter.com/AW_house',
    github:'',
    discord:'',
    blog:'',
    color: "#fff",
    handleClick: () => {
      window.open("https://aw.house/");
    },
  },


  {
    name: "Briq",
    desc: "Collect, build and play with briqs, the building blocks of the metaverse.",
    logo: "/images/logo/Briq.png",
    twitter:"",
    github:'',
    discord:'',
    blog:'',
    color: "#f35601",
    handleClick: () => {
      window.open("https://twitter.com/briqNFT");
    },
  },


  {
    name: "Cellula",
    desc: "Cellula is a fully on-chain artificial life simulation game. \n \
     Players explore, cultivate, evolve, and collect unique Life forms in the game. \n \
    ",
    logo: "/images/logo/Cellula.png",
    twitter:"",
    github:'',
    discord:'',
    blog:'',
    color: " #03feda",
    handleClick: () => {
      window.open("https://cellula.life/");
    },
  },

  {
    name: "World Explorers",
    desc: "Player community and guild focused on exploring fully onchain games and Autonomous Worlds. \n \
    We're currently the reigning world champions for SkyStrife.",
    logo: "/images/worldlogo/AWExplorers.png",
    twitter:"https://twitter.com/awexplorers",
    github:'',
    discord:'',
    blog:'',
    color: "white",
    handleClick: () => {
      window.open("https://twitter.com/awexplorers");
    },
  },

];

export const WORLDS_FOUR =[


  {
    name: "Fun Blocks",
    desc: "FunBlocks is a media which covers the most recent trends and innovations in fully on-chain games.\
     We believe that the ultimate goal of blockchain gaming is to bring joy and fun to players!",
    logo: "/images/logo/FunBlocks.png",
    color: "#d8f2ff",
    handleClick: () => {
      window.open("https://twitter.com/FunBlocksFun");
    },
  }, 


  {
    name: "AW Research",
    desc: "AW Research is a research team focused on studying the Autonomous World. \
    We are committed to track the latest news in the Autonomous World,\
     exploring the journey from fully on chain games to the Autonomous World, and providing strategies for on chain games.",
    logo: "/images/logo/AWResearch.png",
    color: "#0a9053",
    handleClick: () => {
      window.open("http://cryptochasers.co");
    },
  },


  

 




  {
    name: "ggQuest",
    desc: "ggQuest is a gaming reputation protocol which can be used for gamers to maintain a \
    comprehensive record of their gaming history across multiple games and chains.",
    logo: "/images/logo/ggQuest.png",
    color: " #fff",
    handleClick: () => {
      window.open("https://twitter.com/gg_Quest_gg");
    },
  },

];

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
}>({ world: DARKFOREST, setWorld: () => {} });
