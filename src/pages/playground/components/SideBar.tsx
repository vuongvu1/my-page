import { FC } from "react";
import { TabProps } from "../MiniMap";
import { SideBarStyles as SC } from "./styles";

type SideBarProps = {
  allTabs: Array<TabProps>;
  activeTab: string;
  setActiveTab: (newTab: TabProps) => void;
};

type ItemProps = {
  active: boolean;
  onClick: () => void;
};

const Item: FC<ItemProps> = ({ children, active, onClick }) => {
  return (
    <SC.Item isActive={active} onClick={onClick}>
      {children}
    </SC.Item>
  );
};

const SideBar: FC<SideBarProps> = ({ allTabs, activeTab, setActiveTab }) => {
  const handleClick = (tabKey: string) => {
    const selectedTab = allTabs.find(({ key }) => key === tabKey) || allTabs[0];
    console.log(selectedTab);
    setActiveTab(selectedTab);
  };

  return (
    <SC.Wrapper>
      {allTabs.map(({ key, name }) => (
        <Item
          active={activeTab === key}
          key={key}
          onClick={() => handleClick(key)}
        >
          {name}
        </Item>
      ))}
    </SC.Wrapper>
  );
};

export default SideBar;
