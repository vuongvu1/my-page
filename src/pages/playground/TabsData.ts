import { TabProps } from "components";
import DigitalClock from "./components/DigitalClock";
import Carousel from "./components/3DCarousel";
import SnakeGame from "./components/SnakeGame";
import DrawBoard from "./components/DrawBoard";
import QuizGame from "./components/QuizGame";
import ParallaxEffect from "./components/ParallaxEffect";

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
    name: "Snake Game",
    key: "snake-game",
    component: SnakeGame,
  },
  {
    name: "Quiz Template",
    key: "quiz-template",
    component: QuizGame,
  },
  {
    name: "Parallax Effect",
    key: "parallax-effect",
    component: ParallaxEffect,
  },
];

export const allTabs = tabsData.map(({ key }) => key);

export default tabsData;
