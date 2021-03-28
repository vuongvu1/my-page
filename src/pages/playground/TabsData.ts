import { ElementType } from "react";
import DigitalClock from "./components/DigitalClock";

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
    name: "Digital Clock 1",
    key: "digital-clock-1",
    component: DigitalClock,
  },
  {
    name: "Digital Clock 2",
    key: "digital-clock-2",
    component: DigitalClock,
  },
  {
    name: "Digital Clock 3",
    key: "digital-clock-3",
    component: DigitalClock,
  },
];

export const allTabs = tabsData.map(({ key }) => key);

export default tabsData;
