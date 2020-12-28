import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import useWindowSize from "./useWindowSize";

type ScreenType = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
};

const parseSize = (breakpoint: string): number => {
  return parseInt(breakpoint.replace("px", ""));
};

const useScreen = () => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const [screen, setScreen] = useState<ScreenType>({
    isSmall: false,
    isMedium: false,
    isLarge: false,
  });

  useEffect(() => {
    if (width < parseSize(theme.breakpoint.sm)) {
      setScreen({
        isSmall: true,
        isMedium: false,
        isLarge: false,
      });
    } else if (width < parseSize(theme.breakpoint.md)) {
      setScreen({
        isSmall: false,
        isMedium: true,
        isLarge: false,
      });
    } else {
      setScreen({
        isSmall: false,
        isMedium: false,
        isLarge: true,
      });
    }
  }, [width, theme]);

  return screen;
};

export default useScreen;
