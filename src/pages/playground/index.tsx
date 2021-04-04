import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Section } from "atoms";
import { useScreen } from "utils/hooks";
import SideBar from "./components/SideBar";
import SC from "./styles";
import TabsData from "./TabsData";

const Playground = () => {
  const { palette } = useTheme();
  const [activeTab, setActiveTab] = useState(TabsData[0]);
  const { search } = useLocation();
  const { isLarge: isScreenBig } = useScreen();

  const ActiveComponent = activeTab.component;

  useEffect(() => {
    const { key: tabKey } = queryString.parse(search);
    const selectedTab = tabKey
      ? TabsData.find(({ key }) => key === tabKey) || TabsData[0]
      : TabsData[0];
    setActiveTab(selectedTab);
  }, [search]);

  return (
    <Section bgColor={palette.common.light}>
      {isScreenBig ? (
        <>
          <SideBar allTabs={TabsData} activeTab={activeTab.key} />
          <SC.Wrapper>
            <SC.Title>{activeTab.name}</SC.Title>
            <ActiveComponent />
          </SC.Wrapper>
        </>
      ) : (
        <SC.Wrapper>
          <div>This page doesn't support small view 😞</div>
        </SC.Wrapper>
      )}
    </Section>
  );
};

export default Playground;
