// Import Images
import Img1 from "../../../../assets/images/nft/img-01.jpg";
import Img2 from "../../../../assets/images/nft/img-02.jpg";
import Img3 from "../../../../assets/images/nft/img-03.jpg";
import Img4 from "../../../../assets/images/nft/img-04.jpg";
import Img5 from "../../../../assets/images/nft/img-05.jpg";
import Img6 from "../../../../assets/images/nft/img-06.jpg";

import ImgGif1 from "../../../../assets/images/nft/gif/img-1.gif";
import ImgGif2 from "../../../../assets/images/nft/gif/img-2.gif";
import ImgGif3 from "../../../../assets/images/nft/gif/img-3.gif";
import ImgGif4 from "../../../../assets/images/nft/gif/img-4.gif";
import ImgGif5 from "../../../../assets/images/nft/gif/img-5.gif";

import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
import avatar10 from "../../../../assets/images/users/avatar-10.jpg";
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../../assets/images/users/avatar-7.jpg";
import avatar9 from "../../../../assets/images/users/avatar-9.jpg";

import metaMask from "../../../../assets/images/nft/wallet/metamask.png";
import coinbase from "../../../../assets/images/nft/wallet/coinbase.png";
import kukai from "../../../../assets/images/nft/wallet/kukai.png";
import binance from "../../../../assets/images/nft/wallet/binance.png";
import enjin from "../../../../assets/images/nft/wallet/enjin.png";
import alpha from "../../../../assets/images/nft/wallet/alpha.png";
import math from "../../../../assets/images/nft/wallet/math.png";
import wallet2 from "../../../../assets/images/demo/wallet2.png";

import {
  topartWork,
  topartWorkUser,
  featuredNFTData,
  popularityData,
  recentNFTsData,
  topCollectionData,
  popularCreatorsData,
  allMarketplaceData,
  monthMarketplaceData,
  halfyearMarketplaceData,
  yearMarketplaceData,
} from "./dashboardNFT";

// creatorsData, creatorsListData

import {
  expolreNow,
  aution,
  NFTRanking,
  creatorsData,
  creatorsListData,
  walletConnectData,
  topDrop,
  topCreator,
  topCollection,
  tradingArtworkData,
  nftArtworkData,
  popularCreatorsNFT,
  marketPlacewidget,
} from "./NFTMarketplace";

import huddleLogo from "../../../../assets/images/companies/img-1.png";
import biswap from "../../../../assets/images/demo/biswap.jpg";
import apextech from "../../../../assets/images/companies/img-2.png";
import near from "../../../../assets/images/companies/img-3.png";
import hightech from "../../../../assets/images/companies/img-4.png";
import softtech from "../../../../assets/images/companies/img-5.png";
import foxtech from "../../../../assets/images/companies/img-6.png";
import arrowtech from "../../../../assets/images/companies/img-9.png";
import tvsarive from "../../../../assets/images/companies/img-7.png";
import spacetech from "../../../../assets/images/companies/img-8.png";

const clientsData = [
  {
    name: "Huddle",
    logo: huddleLogo,
  },
  {
    name: "Biswap",
    logo: biswap,
  },
  {
    name: "Apex Tech",
    logo: apextech,
  },
  {
    name: "Near",
    logo: near,
  },
  {
    name: "High Tech",
    logo: hightech,
  },
  {
    name: "Soft Tech",
    logo: softtech,
  },
  {
    name: "Fox Tech",
    logo: foxtech,
  },
  {
    name: "Arrow Tech",
    logo: arrowtech,
  },
  {
    name: "Arive",
    logo: tvsarive,
  },
  {
    name: "Space Tech",
    logo: spacetech,
  },
];

const userData = [
  {
    id: 3,
    img: avatar3,
    title: " Donald Risher",
  },
  {
    id: 4,
    img: avatar4,
    title: "Sofia Cunha",
  },
  {
    id: 5,
    img: avatar5,
    title: "Luis Rocha",
  },

  {
    id: 6,
    img: avatar6,
    title: "Vitoria Rodrigues",
  },
  {
    id: 7,
    img: avatar7,
    title: "Vitoria Rodrigues",
  },
  {
    id: 8,
    img: avatar8,
    title: "Julia William",
  },
  {
    id: 9,
    img: avatar9,
    title: "Turnal Saw",
  },
  {
    id: 10,
    img: avatar10,
    title: "Jansh Brown",
  },
  {
    id: 1,
    img: avatar1,
    title: "Susan Denton",
  },
  {
    id: 2,
    img: avatar2,
    title: "Prezy William",
  },
];

const ecomWidgets = [
  {
    id: 1,
    cardColor: "primary",
    label: "Total Earned Points",
    counter: "258",
    bgcolor: "success",
    icon: "bx bxs-medal",
    decimals: 0,
    prefix: "",
    suffix: "",
  },

  {
    id: 3,
    cardColor: "success",
    label: "Completed Activities",
    counter: "6",
    bgcolor: "primary",
    icon: "bx bx-task",
    decimals: 0,
    prefix: "",
    suffix: "",
  },
  {
    id: 4,
    cardColor: "info",
    label: "Redeemed Points",
    counter: "865",
    bgcolor: "warning",
    icon: "bx bxs-down-arrow-circle",
    decimals: 0,
    prefix: "",
    suffix: "",
  },

  // {
  //   id: 3,
  //   cardColor: "success",
  //   label: "Food Delivered",
  //   counter: "798",
  //   bgcolor: "secondary",
  //   icon: " bx bx-food-menu",
  //   decimals: 0,
  //   prefix: "",
  //   suffix: "kg",
  // },
  // {
  //   id: 3,
  //   cardColor: "success",
  //   label: "CO2 REDUCTION",
  //   counter: "1798",
  //   bgcolor: "danger",
  //   icon: "bx bxs-radiation",
  //   decimals: 0,
  //   prefix: "",
  //   suffix: "kt",
  // },
];

const activitiesData = [
  {
    name: "Walk 10 km",
    des: "The task is designed for people who haven't started fitness walking and who don't have major health issues",
  },
  {
    name: "Read Blog",
    des: "Read the blog improve the reading skill and earn points",
  },

  {
    name: "Watch Videos",
    des: "Watch usefull videos to learn more and earn points",
  },

  {
    name: "Two hour Workout",
    des: "daily morning exercise kick-starts your metabolism, gets your heart pumping and may help lower your blood pressure",
  },
];

const recentOrders = [
  {
    id: 1,
    clientImg: clientsData[1].logo,
    clientName: clientsData[1].name,
    userName: userData[1].title,
    userImg: userData[1].img,
    type: "Gift Card",
    amount: 809.0,
    statusClass: "success",
    points: "4618",
  },

  {
    id: 2,
    clientImg: clientsData[2].logo,
    clientName: clientsData[2].name,
    userName: userData[2].title,
    userImg: userData[2].img,
    type: "Donation",
    amount: 800.0,
    statusClass: "danger",
    points: "4398",
  },

  {
    id: 3,
    clientImg: clientsData[3].logo,
    clientName: clientsData[3].name,
    userName: userData[3].title,
    userImg: userData[3].img,
    type: "Event",
    amount: 789.0,
    statusClass: "warning",
    points: "4018",
  },

  {
    id: 4,
    clientImg: clientsData[4].logo,
    clientName: clientsData[4].name,
    userName: userData[4].title,
    userImg: userData[4].img,
    type: "Event",
    amount: 779.0,
    statusClass: "warning",
    points: "4000",
  },

  {
    id: 5,
    clientImg: clientsData[5].logo,
    clientName: clientsData[5].name,
    userName: userData[5].title,
    userImg: userData[5].img,
    type: "Donation",
    amount: 689.0,
    statusClass: "danger",
    points: "3818",
  },
  {
    id: 6,
    clientImg: clientsData[6].logo,
    clientName: clientsData[6].name,
    userName: userData[6].title,
    userImg: userData[6].img,
    type: "Gift Card",
    amount: 659.0,
    statusClass: "success",
    points: "3718",
  },

  {
    id: 7,
    clientImg: clientsData[7].logo,
    clientName: clientsData[7].name,
    userName: userData[7].title,
    userImg: userData[7].img,
    type: "Donation",
    amount: 610.0,
    statusClass: "danger",
    points: "3598",
  },

  {
    id: 8,
    clientImg: clientsData[8].logo,
    clientName: clientsData[8].name,
    userName: userData[8].title,
    userImg: userData[8].img,
    type: "Event",
    amount: 590.0,
    statusClass: "warning",
    points: "3000",
  },

  {
    id: 9,
    clientImg: clientsData[9].logo,
    clientName: clientsData[9].name,
    userName: userData[9].title,
    userImg: userData[9].img,
    type: "Event",
    amount: 300.0,
    statusClass: "warning",
    points: "4007",
  },

  {
    id: 10,
    clientImg: clientsData[0].logo,
    clientName: clientsData[0].name,
    userName: userData[0].title,
    userImg: userData[0].img,
    type: "Donation",
    amount: 200.0,
    statusClass: "danger",
    points: "2000",
  },
];

export {
  expolreNow,
  aution,
  NFTRanking,
  creatorsData,
  creatorsListData,
  walletConnectData,
  topDrop,
  topCreator,
  topCollection,
  tradingArtworkData,
  nftArtworkData,
  popularCreatorsNFT,
  marketPlacewidget,
  ecomWidgets,
  recentOrders,
  clientsData,
  userData,
  activitiesData,
  topartWork,
  topartWorkUser,
  featuredNFTData,
  popularityData,
  recentNFTsData,
  topCollectionData,
  popularCreatorsData,
  allMarketplaceData,
  monthMarketplaceData,
  halfyearMarketplaceData,
  yearMarketplaceData,
};
