import { useState } from "react";
import { useTheme } from "styled-components";
import { Section } from "atoms";
import SideBar from "./components/SideBar";
import SC from "./styles";
import MiniMap from "./MiniMap";

const Playground = () => {
  const { palette } = useTheme();
  const [activeTab, setActiveTab] = useState(MiniMap[0]);

  const ActiveComponent = activeTab.component;

  return (
    <Section bgColor={palette.common.light}>
      <SideBar
        allTabs={MiniMap}
        activeTab={activeTab.key}
        setActiveTab={setActiveTab}
      />

      <SC.Wrapper>
        <SC.Title>{activeTab.name}</SC.Title>
        <ActiveComponent />
      </SC.Wrapper>
    </Section>
  );
};

export default Playground;
