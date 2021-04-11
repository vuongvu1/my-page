import { ElementType } from "react";
import DigitalClock from "./components/DigitalClock";
import Carousel from "./components/3DCarousel";

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
];

export const allTabs = tabsData.map(({ key }) => key);

export default tabsData;
