import { createContext } from "react";

export const DAD = {
  name: "DF ARES",
  desc: "DF ARES are Dark Forest\
   Community Rounds with Novel Game Mechanics hosted by DF Archon.",
  logo: "/images/logo/DFARES.png",
  color: "#feae34",
  handleClick: () => {
    window.open("https://dfares.xyz/play/0xda5052db1f383b2e82c829608c85ab82cdbd2206","_self");
  },
};

export const SPONSORS = [

  {
    name: "Dark Forest",
    desc: "Dark Forest is an MMO strategy game built with zkSNARKs on Gnosis Chain (formerly xDai). \
    Players explore an infinite, procedurally-generated universe, conquering planets and growing a space empire.",
    logo: "/images/logo/DF.png",
    color: "#06fc1a",
    handleClick: () => {
      window.open("https://zkga.me");
    },
  }, 
  {
    name: "DF Archon",
    desc: "DF Archon is a development team focused on fully on-chain game, \
      working on a more user-friendly gaming environment. \
      In Dark Forest ecosystem, we've built quite a few of useful plugins, \
      DF GAIA(A user-friendly Dark Forest plugin development library),\
      DF ARTEMIS (Planet-targeted bounty mercenary system for Dark Forest), DF APOLLO (Automated assisted operating System for Dark Forest).\
      What's more, we also pay close attention to other on-chain game projects or teams like treaty, realms, mud.dev, etc, \
      prepare to work on top of those projects as well.",
    logo: "/images/dfarchon.png",
    color: "#cd5c5c",
    handleClick: () => {
      window.open("https://dfarchon.xyz/");
    },
  },

  {
    name: "AltLayer",
    desc: "Decentralized & Elastic Rollups-as-a-Service Protocol.\
    Backed by \
    @balajis\
    @polychaincap\
    @hjmomtazi\
    @jump_\
    @gavofyork\
    @kaiynne\
    @tekinsalimi\
    @twobitidiot",
    logo: "/images/logo/AltLayer.png",
    color: "#787ab4",
    handleClick: () => {
      window.open("https://zkga.me");
    },
  },
  {
    name: "Mask Network",
    desc: "Mask Network brings privacy and benefits from Web3 to social media like Facebook & Twitter - with an open-sourced browser extension.",
    logo: "/images/logo/Mask.svg",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("https://mask.io/");
    },
  },

  {
    name: "AGLD DAO",
    desc: "AGLD DAO is committed to building Autonomous Worlds that embody the principles of decentralization, \
    transparency, fairness, and most importantly community sovereignty. The Loot Chain is designed to be a home for\
     builders in the Lootverse. It will become the go-to place for building new games, tools, and worlds within the Lootverse.",
    logo: "/images/logo/AGLDDAO.png",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("https://adventuregold.org/");
    },
  },

  {
    name: "DeGame",
    desc: "DeGame is a leading Web3 gaming aggregator and community engagement platform, \
    listing over 4000 projects. Our aim is to establish a Proof of Contribution platform for Games, NFTs, and Metaverse initiatives.\
     We strive to guide users towards top projects through community engagement and ranking data. \
     Additionally, we serve as long-term ecosystem partners for NFT game development across various Layer1 and Layer2 projects, \
     actively recruiting developers for our partner network.",
    logo: "/images/logo/DeGame.png",
    color: "#17d3f8",
    handleClick: () => {
      window.open("https://www.degame.com");
    },
  },

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
    name: "GamePhylum",
    desc: "GamePhylum is a DAO-driven platform focused on game content creation and distribution,\
     with a vision to create an immersive Web3 game player community.",
    logo: "/images/logo/GamePhylum.png",
    color: "#06beca",
    handleClick: () => {
      window.open("https://www.gamephylum.io/home");
    },
  },


  {
    name: "MarrowDAO | Guild W",
    desc: "Guild W is the first on-chain e-sports team, incubated by MarrowDAO.\
     The main members are Solidity developers, node operators,\
     blockchain game players and investment analysts. All of them are loyal players of the Dark Forest.\
    Guild W believes in the future of native blockchain games and in the power of technology.\
    We are building a professional e-sports team with both software developers and game players.\
     We hope our guild may possess different perspectives at the same time, as visionary as waterdrops. \
     We will uphold the aim of peaceful development and help real blockchain games to grow and prosper.",
    logo: "/images/logo/MarrowDAO.png",
    color: "#06beca",
    handleClick: () => {
      window.open("https://twitter.com/marrowdao");
    },
  },


 

  {
    name: "OrdenGG",
    desc: "we are the orden, a professional on-chain esport team | We won 3/4 of the last dark forest rounds",
    logo: "/images/logo/OrdenGG.png",
    color: "#06beca",
    handleClick: () => {
      window.open("https://twitter.com/orden_gg");
    },
  },

  {
    name: "DFDAO",
    desc: "DFDAO is a collective of Dark Forest players. To play Dark Forest is to build Dark Forest.",
    logo: "/images/logo/DFDAO.png",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("https://mask.io/");
    },
  },

  {
    name: "Web3MQ",
    desc: "Web3MQ, as a Web3 native communication protocol, fully embodies the fundamental characteristics of \
    encryption by being decentralized and supporting distributed sovereignty.",
    logo: "/images/web3mq.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("//web3mq.com/");
    },
  },



  {
    name: "01a1",
    desc: "At 01a1, we're a dedicated metaverse studio,\
     navigating new domains of digital art with an innovative spirit. \
     As an honored metaverse agency for The Sandbox, we've launched games like the 'Maya Water Park'\
     and created immersive experiences such as the 'Chongqing Underground City', inspired by Liu Cixin's novel 'The Wandering Earth'..",
    logo: "/images/logo/01a1.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("https://twitter.com/01a1Official");
    },
  },

  {
    name: "Weirdo Ghost Gang",
    desc: "Weirdo Ghost Gang, affectionately known as \"Lil Ghost\",\
    is a Web3 native IP incubated by ManesLAB. \
    Having a storied background in pioneering aesthetics,\
     a free-spirited community culture, and diverse development trajectories, \
     Weirdo Ghost Gang has captivated collectors, artists, and musicians worldwide.\
      Embodying Web3's free, open, innovative, \
      and inclusive lifestyle, Weirdo Ghost Gang amplifies creative content and operations to inspire. \
      Their unwavering essence is to \"OUTA THE BOX, BE A WEIRDO.\"",
    logo: "/images/logo/WeirdoGhostGang.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("https://www.weirdoghost.com/");
    },
  },

  


  
];



export const SPONSORS_OUTER = [
  {
    name: "web3mq",
    desc: "Web3MQ, as a Web3 native communication protocol, fully embodies the fundamental characteristics of encryption by being decentralized and supporting distributed sovereignty.",
    logo: "/images/web3mq.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("//web3mq.com/");
    },
  },
  {
    name: "mask",
    desc: "Mask Network brings privacy and benefits from Web3 to social media like Facebook & Twitter - with an open-sourced browser extension.",
    logo: "/images/mask.png",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("//mask.io/");
    },
  },
  {
    name: "web3mq",
    desc: "Web3MQ, as a Web3 native communication protocol, fully embodies the fundamental characteristics of encryption by being decentralized and supporting distributed sovereignty.",
    logo: "/images/web3mq.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("//web3mq.com/");
    },
  },
  {
    name: "mask",
    desc: "Mask Network brings privacy and benefits from Web3 to social media like Facebook & Twitter - with an open-sourced browser extension.",
    logo: "/images/mask.png",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("//mask.io/");
    },
  },
  {
    name: "web3mq",
    desc: "Web3MQ, as a Web3 native communication protocol, fully embodies the fundamental characteristics of encryption by being decentralized and supporting distributed sovereignty.",
    logo: "/images/web3mq.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("//web3mq.com/");
    },
  },
  {
    name: "mask",
    desc: "Mask Network brings privacy and benefits from Web3 to social media like Facebook & Twitter - with an open-sourced browser extension.",
    logo: "/images/mask.png",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("//mask.io/");
    },
  },
  {
    name: "web3mq",
    desc: "Web3MQ, as a Web3 native communication protocol, fully embodies the fundamental characteristics of encryption by being decentralized and supporting distributed sovereignty.",
    logo: "/images/web3mq.png",
    color: "#9A26F9",
    handleClick: () => {
      window.open("//web3mq.com/");
    },
  },
  {
    name: "mask",
    desc: "Mask Network brings privacy and benefits from Web3 to social media like Facebook & Twitter - with an open-sourced browser extension.",
    logo: "/images/mask.png",
    color: "#1FB3FB",
    handleClick: () => {
      window.open("//mask.io/");
    },
  },
];



export const GOD = {
  name: "God",
  desc: "Go Fuck Yourself",
  logo: "data:image/png;base64,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",
  color: "#cd5c5c",
  handleClick: () => {},
};
export const CONTRIBUTORS = [
  {
    name: "Tatokoro",
    avatar: "/images/tatokoro.png",
    twitter: "https://twitter.com/lidangzzz",
  },
  {
    name: "Tatokoro1",
    avatar: "/images/tatokoro.png",
    twitter: "https://twitter.com/lidangzzz",
  },
  {
    name: "Tatokoro2",
    avatar: "/images/tatokoro.png",
    twitter: "https://twitter.com/lidangzzz",
  },
  {
    name: "Tatokoro3",
    avatar: "/images/tatokoro.png",
    twitter: "https://twitter.com/lidangzzz",
  },
  {
    name: "Tatokoro4",
    avatar: "/images/tatokoro.png",
    twitter: "https://twitter.com/lidangzzz",
  },
];

export const PanelContext = createContext<{
  sponsor: typeof DAD;
  setSponsor: (sponsor: typeof DAD) => void;
}>({ sponsor: DAD, setSponsor: () => {} });
