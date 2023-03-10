//import icons
import { ImLibrary } from "react-icons/im";
import { AiOutlineAreaChart } from "react-icons/ai";
import { CgPlayListSearch } from "react-icons/cg";
import { SlCalculator } from "react-icons/sl";

//page -> links for sideBar
export const pages = [
  { name: "Synthèse", link: "/", icon: <ImLibrary /> },
  { name: "Graphiques", link: "/charts", icon: <AiOutlineAreaChart /> },
  { name: "Ordres", link: "/orders", icon: <CgPlayListSearch /> },
  { name: "Calculs", link: "/calculation", icon: <SlCalculator /> },
];

//Labels Arrays Charts
export const labelsChartSynthesis = [
  "Total trades",
  "Balance compte",
  "Trades gagnés",
  "Trades perdus",
  "BE/en profit",
];

export const labelsArrayChart2 = [
  "Total trades",
  "Moyenne trades/mois",
  "trades gagnés",
  "trades BE",
  "trades perdus",
];

export const labelsArrayChart3 = [
  "% trades < -5000$",
  "% trades -5000/ -2500$",
  "% trades -2500/ -500$",
  "% trades -500/ -0$",
  "% trades 0/ 500$",
  "% trades 500/ 2500$",
  "% trades 2500/ 5000$",
  "% trades > 5000$",
];
