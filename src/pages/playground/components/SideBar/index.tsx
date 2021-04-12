import { FC } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

import { Text } from "atoms";
import { TabProps } from "../../TabsData";
import SC, { Menu } from "./styles";

type SideBarProps = {
  allTabs: Array<TabProps>;
  activeTab: string;
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

const SideBar: FC<SideBarProps> = ({ allTabs, activeTab }) => {
  const { search, pathname } = useLocation();
  const { push } = useHistory();

  const handleClick = (tabKey: string) => {
    const query = queryString.parse(search);
    query.key = tabKey;

    push({ pathname, search: queryString.stringify(query) });
  };

  return (
    <SC.Wrapper>
      <Menu>
        <Text>Menu</Text>
      </Menu>
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
