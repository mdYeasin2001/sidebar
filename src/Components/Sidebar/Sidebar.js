import React from 'react';

// import './Sidebar.scss'
// import { ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

import { FaHome } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { FaBlogger } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { RiContactsBookUploadFill } from 'react-icons/ri';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = () => {
    return (
        <>
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FaHome style={{ fontSize: '20px', color: 'white' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="About">
                        <NavIcon>
                            <GoPerson style={{ fontSize: '20px', color: 'white' }} />
                        </NavIcon>
                        <NavText>
                            Home
                    </NavText>
                    </NavItem>

                    <NavItem eventKey="Blog">
                        <NavIcon>
                            <FaBlogger style={{ fontSize: '20px', color: 'white' }} />
                        </NavIcon>
                        <NavText>
                            Blog
                    </NavText>
                    </NavItem>

                    <NavItem eventKey="Services">
                        <NavIcon>
                            <GrServices style={{ fontSize: '20px', color: 'white' }} />
                        </NavIcon>
                        <NavText>
                            Services
                    </NavText>
                    </NavItem>

                    <NavItem eventKey="Contacts">
                        <NavIcon>
                            <RiContactsBookUploadFill style={{ fontSize: '20px', color: 'white' }} />
                        </NavIcon>
                        <NavText>
                            Contacts
                    </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </>
    );
};

export default Sidebar;