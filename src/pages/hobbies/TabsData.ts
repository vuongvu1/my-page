import { ElementType } from "react";
import Piano from "./components/Piano";
import VideoEdit from "./components/VideoEdit";

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
    name: "Video Edit",
    key: "video-edit",
    component: VideoEdit,
  },
];

export const allTabs = tabsData.map(({ key }) => key);

export default tabsData;
