import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      
    >
      <SidebarHeader>
        
          <h1 style={{fontSize: '50px', color: 'white', margin: '0', padding: '0', textAlign: 'center'}}>M.</h1>
        
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt style={{color: 'red', fontSize: '20px'}}/>}
            
          >
            <h2>Home</h2>
          </MenuItem>
          <MenuItem icon={<FaGem />}> <h2>About</h2> </MenuItem>
          <MenuItem icon={<FaGem />}> <h2>Blog</h2> </MenuItem>
          <MenuItem icon={<FaGem />}> <h2>Services</h2> </MenuItem>
          <MenuItem icon={<FaGem />}> <h2>Contacts</h2> </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;