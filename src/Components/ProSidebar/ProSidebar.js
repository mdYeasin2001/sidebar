import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({toggled}) => {
    return (
        <ProSidebar toggled={toggled}>
  <Menu iconShape="square">
    <MenuItem>Dashboard</MenuItem>
    <SubMenu title="Components">
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    );
};

export default Sidebar;