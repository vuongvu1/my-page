import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Section } from "atoms";
import { SideBar } from "components";
import SC from "./styles";
import TabsData from "./TabsData";

const Playground = () => {
  const { palette } = useTheme();
  const [activeTab, setActiveTab] = useState(TabsData[0]);
  const { search } = useLocation();

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
      <SideBar allTabs={TabsData} activeTab={activeTab.key} />
      <SC.Wrapper>
        <SC.Title>{activeTab.name}</SC.Title>
        <ActiveComponent />
      </SC.Wrapper>
    </Section>
  );
};

export default Playground;
