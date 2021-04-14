import { ElementType } from "react";
import DigitalClock from "./components/DigitalClock";
import Carousel from "./components/3DCarousel";
import Snake from "./components/Snake";
import DrawBoard from "./components/DrawBoard";

export type TabProps = {
  name: string;
  key: string;
  component: ElementType;
};

const tabsData: Array<TabProps> = [
  {
    name: "Digital Clock",
    key: "digital-clock",
    component: DigitalClock,
  },
  {
    name: "3D Carousel",
    key: "3d-carousel",
    component: Carousel,
  },
  {
    name: "Draw Board",
    key: "draw-board",
    component: DrawBoard,
  },
  {
    name: "Snake",
    key: "snake",
    component: Snake,
  },
];

export const allTabs = tabsData.map(({ key }) => key);

export default tabsData;
