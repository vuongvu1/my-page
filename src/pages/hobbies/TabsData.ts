import { ElementType } from "react";
import Piano from "./components/Piano";
import Exercise from "./components/Exercise";

export type TabProps = {
  name: string;
  key: string;
  component: ElementType;
};

const tabsData: Array<TabProps> = [
  {
    name: "Piano",
    key: "piano",
    component: Piano,
  },
  {
    name: "Exercise",
    key: "exercise",
    component: Exercise,
  },
];

export const allTabs = tabsData.map(({ key }) => key);

export default tabsData;
